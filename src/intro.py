import pandas as pd
import json

ingredients = ['vegan', 'vegetarian', 'fish']

def print_array(list):
    for x in list:
        print(x)

def _create_ingredients(string):
    result = list()
    if string and len(string) > 2:
        for i in range(len(ingredients)):
            if ingredients[i] in string.lower():
                result.append(ingredients[i])
    return result

def _write_json(dst_file, json_obj):
    f = open(dst_file, 'w')
    f.write('const productsAux = \'')
    json.dump(json_obj, f, ensure_ascii=False, separators=(',\' +\n\'', ': '))
    f.write('\';\nconst products = JSON.parse(productsAux);\n')
    f.write('export default products;\n')

def csv_to_json(src_file, dst_file):
    # load json
    df = pd.read_csv(src_file, header=0, sep=';;;', engine='python')
    json_string = df.to_json(orient='records')
    # create value arrays for ingredients / type
    json_obj = json.loads(json_string)
    for x in json_obj:
        x['type'] = _create_ingredients(x['type'])
        x['name'] = x['name'].replace('"','')
    # write to file
    _write_json(dst_file, json_obj)

csv_to_json('./data.csv', './test.js')
