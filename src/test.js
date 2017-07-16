const productsAux = '[{"price": "3.90", "type": ["vegetarian"], "business": "Albert", "location": "Adlershof", "date": "17.07.2017", "name": "Blumenkohlcremesuppe mit Croutons"},{"price": "5.00", "type": ["vegetarian"], "business": "Albert", "location": "Adlershof", "date": "17.07.2017", "name": "Linguine mit Waldpilzsauce & Rucola"},{"price": "5.90", "type": [], "business": "Albert", "location": "Adlershof", "date": "17.07.2017", "name": "Seelachsfilet im Knuspermantel auf Kohlrabi-Karottenrahm & Wasabi-Kartoffelpüree"},{"price": "3.90", "type": [], "business": "Albert", "location": "Adlershof", "date": "18.07.2017", "name": "Pikante Maiscremesuppe mit Hähnchenbruststreifen"},{"price": "5.00", "type": ["vegetarian"], "business": "Albert", "location": "Adlershof", "date": "18.07.2017", "name": "Karotten-Sesam-Knusperschnitzel mit Schnittlauchsauce & Reis"},{"price": "5.80", "type": [], "business": "Albert", "location": "Adlershof", "date": "18.07.2017", "name": "Geschnetzeltes „Züricher Art“ mit Champignons & Spätzle"},{"price": "3.90", "type": [], "business": "Albert", "location": "Adlershof", "date": "19.07.2017", "name": "Weiße Bohneneintopf mit Rindfleisch"},{"price": "5.00", "type": ["vegetarian"], "business": "Albert", "location": "Adlershof", "date": "19.07.2017", "name": "Cannelloni mit Spinat-Ricottafüllung, Tomatensauce & Mozzarella"},{"price": "5.80", "type": [], "business": "Albert", "location": "Adlershof", "date": "19.07.2017", "name": "Hähnchenbrust in Senf-Estragonsauce mit Broccoli & Reis"},{"price": "3.90", "type": ["vegetarian"], "business": "Albert", "location": "Adlershof", "date": "20.07.2017", "name": "Gemüsesuppe mit Maultaschenstreifen"},{"price": "5.00", "type": ["vegetarian"], "business": "Albert", "location": "Adlershof", "date": "20.07.2017", "name": "Lauchquiche mit gemischtem Salat & Honig-Senfdressing"},{"price": "5.80", "type": [], "business": "Albert", "location": "Adlershof", "date": "20.07.2017", "name": "Saltimbocca von der Hähnchenbrust auf Spaghetti mit mediterranem Tomatenragout & Parmesan"},{"price": "3.90", "type": [], "business": "Albert", "location": "Adlershof", "date": "21.07.2017", "name": "Kohlrabieintopf mit Kasseler"},{"price": "5.00", "type": ["vegetarian"], "business": "Albert", "location": "Adlershof", "date": "21.07.2017", "name": "Käsespätzle mit Röstzwiebeln"},{"price": "5.80", "type": [], "business": "Albert", "location": "Adlershof", "date": "21.07.2017", "name": "Mit Hackfleisch gefüllte Kohlroulade auf Kartoffelstampf"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "17.07.2017", "name": "Schweinegulasch mit Paprika, dazu Spiralnudeln"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "18.07.2017", "name": "Schweinegulasch mit Paprika, dazu Spiralnudeln"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "19.07.2017", "name": "Schweinegulasch mit Paprika, dazu Spiralnudeln"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "20.07.2017", "name": "Schweinegulasch mit Paprika, dazu Spiralnudeln"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "21.07.2017", "name": "Schweinegulasch mit Paprika, dazu Spiralnudeln"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "17.07.2017", "name": "Bulgur- Kichererbsensalat mit Sellerie und Thousand Island Dressing"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "18.07.2017", "name": "Bulgur- Kichererbsensalat mit Sellerie und Thousand Island Dressing"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "19.07.2017", "name": "Bulgur- Kichererbsensalat mit Sellerie und Thousand Island Dressing"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "20.07.2017", "name": "Bulgur- Kichererbsensalat mit Sellerie und Thousand Island Dressing"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "21.07.2017", "name": "Bulgur- Kichererbsensalat mit Sellerie und Thousand Island Dressing"},{"price": "", "type": ["vegan", "vegetarian"], "business": "Esswirtschaft", "location": "Adlershof", "date": "17.07.2017", "name": "Quinoasalat im Glas mit Rotkohl, Datteln, Gemüsezwiebeln und Sanddorn-Dressing"},{"price": "", "type": ["vegan", "vegetarian"], "business": "Esswirtschaft", "location": "Adlershof", "date": "18.07.2017", "name": "Quinoasalat im Glas mit Rotkohl, Datteln, Gemüsezwiebeln und Sanddorn-Dressing"},{"price": "", "type": ["vegan", "vegetarian"], "business": "Esswirtschaft", "location": "Adlershof", "date": "19.07.2017", "name": "Quinoasalat im Glas mit Rotkohl, Datteln, Gemüsezwiebeln und Sanddorn-Dressing"},{"price": "", "type": ["vegan", "vegetarian"], "business": "Esswirtschaft", "location": "Adlershof", "date": "20.07.2017", "name": "Quinoasalat im Glas mit Rotkohl, Datteln, Gemüsezwiebeln und Sanddorn-Dressing"},{"price": "", "type": ["vegan", "vegetarian"], "business": "Esswirtschaft", "location": "Adlershof", "date": "21.07.2017", "name": "Quinoasalat im Glas mit Rotkohl, Datteln, Gemüsezwiebeln und Sanddorn-Dressing"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "17.07.2017", "name": "Südtiroler Berglinsensuppe mit Kasseler"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "18.07.2017", "name": "Südtiroler Berglinsensuppe mit Kasseler"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "19.07.2017", "name": "Südtiroler Berglinsensuppe mit Kasseler"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "20.07.2017", "name": "Südtiroler Berglinsensuppe mit Kasseler"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "21.07.2017", "name": "Südtiroler Berglinsensuppe mit Kasseler"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "17.07.2017", "name": "Klare Glasnudelsuppe mit Geflügelstreifen"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "18.07.2017", "name": "Klare Glasnudelsuppe mit Geflügelstreifen"},{"price": "4,70", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Soljanka mit Kassler, Kartoffeln, Tomaten, Paprika, sauren Gurken, Sahne und frischer Petersilie"},{"price": "4,70", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Soljanka mit Kassler, Kartoffeln, Tomaten, Paprika, sauren Gurken, Sahne und frischer Petersilie"},{"price": "4,70", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Soljanka mit Kassler, Kartoffeln, Tomaten, Paprika, sauren Gurken, Sahne und frischer Petersilie"},{"price": "4,70", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Soljanka mit Kassler, Kartoffeln, Tomaten, Paprika, sauren Gurken, Sahne und frischer Petersilie"},{"price": "4,70", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Soljanka mit Kassler, Kartoffeln, Tomaten, Paprika, sauren Gurken, Sahne und frischer Petersilie"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Kartoffeltopf mit Speck und Würstchen, Lauch, Sahne und frischer Petersilie"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Kartoffeltopf mit Speck und Würstchen, Lauch, Sahne und frischer Petersilie"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Kartoffeltopf mit Speck und Würstchen, Lauch, Sahne und frischer Petersilie"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Kartoffeltopf mit Speck und Würstchen, Lauch, Sahne und frischer Petersilie"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Kartoffeltopf mit Speck und Würstchen, Lauch, Sahne und frischer Petersilie"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Asiatische Fischsuppe mit Reis, Möhren, Staudensellerie, Lauch, Kokosmilch, Chili und frischem Koriander"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Asiatische Fischsuppe mit Reis, Möhren, Staudensellerie, Lauch, Kokosmilch, Chili und frischem Koriander"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Asiatische Fischsuppe mit Reis, Möhren, Staudensellerie, Lauch, Kokosmilch, Chili und frischem Koriander"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Asiatische Fischsuppe mit Reis, Möhren, Staudensellerie, Lauch, Kokosmilch, Chili und frischem Koriander"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Asiatische Fischsuppe mit Reis, Möhren, Staudensellerie, Lauch, Kokosmilch, Chili und frischem Koriander"},{"price": "5,50", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Königsberger Klopse An heißen Sommertagen servieren wir Euch auch extra kalte Suppen, Salate und Desserts. Bitte achtet auch auf die Angebote im Laden."},{"price": "5,50", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Königsberger Klopse An heißen Sommertagen servieren wir Euch auch extra kalte Suppen, Salate und Desserts. Bitte achtet auch auf die Angebote im Laden."},{"price": "5,50", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Königsberger Klopse An heißen Sommertagen servieren wir Euch auch extra kalte Suppen, Salate und Desserts. Bitte achtet auch auf die Angebote im Laden."},{"price": "5,50", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Königsberger Klopse An heißen Sommertagen servieren wir Euch auch extra kalte Suppen, Salate und Desserts. Bitte achtet auch auf die Angebote im Laden."},{"price": "5,50", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Königsberger Klopse An heißen Sommertagen servieren wir Euch auch extra kalte Suppen, Salate und Desserts. Bitte achtet auch auf die Angebote im Laden."},{"price": "5,40/5,80", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Glasnudelsalat mit verschiedenen Blattsalaten, geraspelten Möhren, Paprika, Sojasprossen, Morcheln, einem hausgemachten Limettendressing, Erdnüssen und frischem Koriander, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,40/5,80", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Glasnudelsalat mit verschiedenen Blattsalaten, geraspelten Möhren, Paprika, Sojasprossen, Morcheln, einem hausgemachten Limettendressing, Erdnüssen und frischem Koriander, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,40/5,80", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Glasnudelsalat mit verschiedenen Blattsalaten, geraspelten Möhren, Paprika, Sojasprossen, Morcheln, einem hausgemachten Limettendressing, Erdnüssen und frischem Koriander, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,40/5,80", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Glasnudelsalat mit verschiedenen Blattsalaten, geraspelten Möhren, Paprika, Sojasprossen, Morcheln, einem hausgemachten Limettendressing, Erdnüssen und frischem Koriander, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,40/5,80", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Glasnudelsalat mit verschiedenen Blattsalaten, geraspelten Möhren, Paprika, Sojasprossen, Morcheln, einem hausgemachten Limettendressing, Erdnüssen und frischem Koriander, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,60/6,00", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Bunte Salatvariation mit in Rosmarin gebratenen Süßkartoffeln, Hirtenkäse und einem hausgemachten Agavendressing, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,60/6,00", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Bunte Salatvariation mit in Rosmarin gebratenen Süßkartoffeln, Hirtenkäse und einem hausgemachten Agavendressing, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,60/6,00", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Bunte Salatvariation mit in Rosmarin gebratenen Süßkartoffeln, Hirtenkäse und einem hausgemachten Agavendressing, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,60/6,00", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Bunte Salatvariation mit in Rosmarin gebratenen Süßkartoffeln, Hirtenkäse und einem hausgemachten Agavendressing, auf Wunsch mit Hähnchenbrustfilet"},{"price": "5,60/6,00", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Bunte Salatvariation mit in Rosmarin gebratenen Süßkartoffeln, Hirtenkäse und einem hausgemachten Agavendressing, auf Wunsch mit Hähnchenbrustfilet"},{"price": "7.5", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "14.7.2017", "name": "Puten-Tagliatelle mit Limettensauce und buntem Sommersalat"},{"price": "5.9", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "14.7.2017", "name": "Gemüse-Paella á la Jouis Nour mit frischem Gemüse und Joghurt-Dip"},{"price": "4.5", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "14.7.2017", "name": "Zucchinicremesuppe mit gerösteten Haferflocken"},{"price": "7.5", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "17.7.2017", "name": "Gebratene Hähnchenkeule mit Backkartoffeln an Knackigem Krautsalat und Salsa-Dip"},{"price": "5.9", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "17.7.2017", "name": "Buntes Spirelli-Brokkoli-Gratin mit Grünkern und Tomatensauce"},{"price": "4.5", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "17.7.2017", "name": "Zucchinicremesuppe mit gerösteten Haferflocken"},{"price": "7.5", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "18.7.2017", "name": "Griechischer Hackfleisch-Auflauf mit Bohnen und Fetakäse an Kräauterquark"},{"price": "5.9", "type": ["bio", "vegetarian", "vegan"], "business": "Jouis Nour", "location": "Adlershof", "date": "18.7.2017", "name": "Gemüse-Quinoa-Pfanne mit Naturreis und einer leichten Curry-Sauce"},{"price": "4", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "18.7.2017", "name": "Toskanische Zuppa del Contadino (Bauersuppe) m. Dinkel u. geriebene Käse"},{"price": "7.5", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "19.7.2017", "name": "Rinder-Rahmgeschnetzeltes mit Kartoffelpüree und Champignons"},{"price": "5.5", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "19.7.2017", "name": "Spagetthi mit Oliven, Peperoni, Käse und frischen Kräutern, dazu Salat"},{"price": "4.5", "type": ["bio", "vegetarian", "vegan"], "business": "Jouis Nour", "location": "Adlershof", "date": "19.7.2017", "name": "Grüner Bohnen-Eintopf mit Sonnenblumenkernen"},{"price": "7.9", "type": ["fish"], "business": "Jouis Nour", "location": "Adlershof", "date": "20.7.2017", "name": "Seelachs mit Rahmlinsen, bunten Reis und grüner Salat"},{"price": "5.9", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "20.7.2017", "name": "Kartoffel-Pfifferlingsauflauf mit Lauchstreifen und Kräaterkruste"},{"price": "4", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "20.7.2017", "name": "Kohlrabicreme-Suppe mit Schnittlauch"},{"price": "7", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "21.7.2017", "name": "Klopse “Königsberger Art” mit Rote Beete und Kartoffelpüree"},{"price": "5.5", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "21.7.2017", "name": "Bunte Gemüse-Schupfnudeln-Pfanne mit Pesto"},{"price": "4", "type": ["bio", "vegetarian", "vegan"], "business": "Jouis Nour", "location": "Adlershof", "date": "21.7.2017", "name": "Blumenkohl-Süppchen mit gerösteten Haferflocken"},{"price": "7.5", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "24.7.2017", "name": "Schaschlik-Spieß mit ungarische, Letscho und Reis"},{"price": "5.9", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "24.7.2017", "name": "Gebackene Rosmarin-Ofenkartoffeln mit Ratatouille-Gemüse und Paprika Schmand"},{"price": "4", "type": ["bio", "vegetarian", "vegan"], "business": "Jouis Nour", "location": "Adlershof", "date": "24.7.2017", "name": "Paprika-Mais Suppe mit Sonnenblumenkerne"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Türkische Linsensuppe Unsere vegetarischen Suppen können auch als vegane Speisen serviert werden"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Türkische Linsensuppe Unsere vegetarischen Suppen können auch als vegane Speisen serviert werden"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Türkische Linsensuppe Unsere vegetarischen Suppen können auch als vegane Speisen serviert werden"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Türkische Linsensuppe Unsere vegetarischen Suppen können auch als vegane Speisen serviert werden"},{"price": "4,30", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Türkische Linsensuppe Unsere vegetarischen Suppen können auch als vegane Speisen serviert werden"},{"price": "4,25", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Sommerlicher Gemüseeintopf mit Kartoffeln, Tomaten, Paprika, Möhren, Staudensellerie, Lauch, Minze, Crème fraiche und frischem Koriander"},{"price": "4,25", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Sommerlicher Gemüseeintopf mit Kartoffeln, Tomaten, Paprika, Möhren, Staudensellerie, Lauch, Minze, Crème fraiche und frischem Koriander"},{"price": "4,25", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Sommerlicher Gemüseeintopf mit Kartoffeln, Tomaten, Paprika, Möhren, Staudensellerie, Lauch, Minze, Crème fraiche und frischem Koriander"},{"price": "4,25", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Sommerlicher Gemüseeintopf mit Kartoffeln, Tomaten, Paprika, Möhren, Staudensellerie, Lauch, Minze, Crème fraiche und frischem Koriander"},{"price": "4,25", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Sommerlicher Gemüseeintopf mit Kartoffeln, Tomaten, Paprika, Möhren, Staudensellerie, Lauch, Minze, Crème fraiche und frischem Koriander"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Blumenkohlcrème mit gerösteten Blumenkohlstücken, Sahne und frischem Schnittlauch"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Blumenkohlcrème mit gerösteten Blumenkohlstücken, Sahne und frischem Schnittlauch"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Blumenkohlcrème mit gerösteten Blumenkohlstücken, Sahne und frischem Schnittlauch"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Blumenkohlcrème mit gerösteten Blumenkohlstücken, Sahne und frischem Schnittlauch"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Blumenkohlcrème mit gerösteten Blumenkohlstücken, Sahne und frischem Schnittlauch"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Gazpacho kalte andalusische Gemüsesuppe mit Gurken, Tomaten, Paprika, Croutons und frischer Petersilie"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Gazpacho kalte andalusische Gemüsesuppe mit Gurken, Tomaten, Paprika, Croutons und frischer Petersilie"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "19.07.2017", "name": "Klare Glasnudelsuppe mit Geflügelstreifen"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "20.07.2017", "name": "Klare Glasnudelsuppe mit Geflügelstreifen"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "21.07.2017", "name": "Klare Glasnudelsuppe mit Geflügelstreifen"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "17.07.2017", "name": "Vegane Karottensuppe"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "18.07.2017", "name": "Vegane Karottensuppe"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "19.07.2017", "name": "Vegane Karottensuppe"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "20.07.2017", "name": "Vegane Karottensuppe"},{"price": "", "type": [], "business": "Esswirtschaft", "location": "Adlershof", "date": "21.07.2017", "name": "Vegane Karottensuppe"},{"location": "Adlershof", "date": "17.07.2017", "name": "Hähnchen-Nudel-Pfanne indonesisch", "type": [], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "17.07.2017", "name": "Pilzragout “Stroganoff” mit Spinatspätzle und Crème fraîche", "type": ["vegetarian"], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "18.07.2017", "name": "Topf vom Kräuterschwein mit weißen und grünen Bohnen, dazu Salzkartoffeln", "type": [], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "18.07.2017", "name": "Pappardelle mit Mandel – Spinat – Sauce", "type": ["vegetarian"], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "19.07.2017", "name": "Tandoori Huhn mit Erdnuss, Kreuzkümmel dazu Basmatireis", "type": [], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "19.07.2017", "name": "Klassisches Ratatouille mit Kartoffelgnocchi", "type": ["vegan", "vegetarian"], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "20.07.2017", "name": "Geschmorte Rinderschulter mit Karotten und Kartoffelstampf", "type": [], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "20.07.2017", "name": "Penne Rigate mit Basilikumpesto, Parmesan und fritiertem Rucola", "type": ["vegetarian"], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "21.07.2017", "name": "Lachs im Cajun-Gewürzmantel mit Kräuter-Schmand, dazu Kartoffel-Gurkensalat", "type": [], "business": "Esswirtschaft"},{"location": "Adlershof", "date": "21.07.2017", "name": "Apfel-Bananen-Curry auf Schmorkartoffeln", "type": ["vegetarian"], "business": "Esswirtschaft"},{"price": "7", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "25.7.2017", "name": "Bratwurst auf Weinsauerkraut mit Petersilienkartoffeln und Kräutersenfsauce"},{"price": "5.9", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "25.7.2017", "name": "Indische Gemüsepfanne mit Kichererbsenpüre und Joguhrt-Minz-Dip"},{"price": "4", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "25.7.2017", "name": "Champignon-Cremesuppe mit frischen Kräutern"},{"price": "7.5", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "26.7.2017", "name": "Hausgemachtes Leber-Ragout mit Apfel an Kartoffelpüree und gerösteten Zwiebeln"},{"price": "5.9", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "26.7.2017", "name": "Bandnudeln an Pfifferlingsrahm und Krischtomaten"},{"price": "4", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "26.7.2017", "name": "Berliner Kartoffelsuppe mit Kräuterschmand"},{"price": "7.9", "type": ["fish"], "business": "Jouis Nour", "location": "Adlershof", "date": "27.7.2017", "name": "Schollenfilet gedünstet in Dillrahm mit Kartoffeln und Gurkensalat"},{"price": "5.9", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "27.7.2017", "name": "Mediterrane Gemüse-Lasagne mit einem Kräuter-Dip"},{"price": "4", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "27.7.2017", "name": "Tomatencremesuppe mit Käse-Croutons"},{"price": "7.5", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "28.7.2017", "name": "Brandenburger Schmorkohl mit Hackfleisch und Petersilienkartoffeln"},{"price": "6", "type": ["bio", "vegetarian", "vegan"], "business": "Jouis Nour", "location": "Adlershof", "date": "27.7.2017", "name": "Farfalle mit Tomaten-Oliven-Sauce und frischen Kräutern"},{"price": "4", "type": ["bio", "vegetarian"], "business": "Jouis Nour", "location": "Adlershof", "date": "27.7.2017", "name": "Lauch-Rahmsüppchen mit Karotttenraspeln"},{"price": "7.5", "type": ["bio"], "business": "Jouis Nour", "location": "Adlershof", "date": "31.7.2017", "name": "Schnitzel mit Pfifferlings-Waldpilz-Rahmsauce, Kartoffelstampf und Tomatensalat"},{"price": "5.5", "type": ["bio", "vegetarian", "vegan"], "business": "Jouis Nour", "location": "Adlershof", "date": "31.7.2017", "name": "Spaghettimit Gemüsebolognese und Sonnenblumenkernen"},{"price": "4.5", "type": ["bio", "vegetarian", "vegan"], "business": "Jouis Nour", "location": "Adlershof", "date": "31.7.2017", "name": "Feuriger Paprikatopf mit Tofustückchen"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Gazpacho kalte andalusische Gemüsesuppe mit Gurken, Tomaten, Paprika, Croutons und frischer Petersilie"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Gazpacho kalte andalusische Gemüsesuppe mit Gurken, Tomaten, Paprika, Croutons und frischer Petersilie"},{"price": "4,40", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Gazpacho kalte andalusische Gemüsesuppe mit Gurken, Tomaten, Paprika, Croutons und frischer Petersilie"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Kalter Milchreis mit Kirschen oder Apfelmus, zucker und Zimt"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Kalter Milchreis mit Kirschen oder Apfelmus, zucker und Zimt"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Kalter Milchreis mit Kirschen oder Apfelmus, zucker und Zimt"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Kalter Milchreis mit Kirschen oder Apfelmus, zucker und Zimt"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Kalter Milchreis mit Kirschen oder Apfelmus, zucker und Zimt"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "17.07.2017", "name": "Mascarpone Quarkcrème mit Himbeersoße"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "18.07.2017", "name": "Mascarpone Quarkcrème mit Himbeersoße"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "19.07.2017", "name": "Mascarpone Quarkcrème mit Himbeersoße"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "20.07.2017", "name": "Mascarpone Quarkcrème mit Himbeersoße"},{"price": "2,50/3,20", "type": [], "business": "Suppencult", "location": "Alexanderplatz", "date": "21.07.2017", "name": "Mascarpone Quarkcrème mit Himbeersoße"}]';
const products = JSON.parse(productsAux);
export default products;
