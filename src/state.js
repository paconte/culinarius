import products from './test';

const moment = require('moment');


const currentDate = moment();
const momentFormat = 'dddd - DD.MM.YYYY';


function formatDate(date) { return date.format(momentFormat); }


function getAvailableDates() {
  const result = [];
  let day;
  const saturday = moment().day(6);
  const sunday = moment().day(0);
  // Sunday=0 and Saturday=6
  for (let i = 1; i < 6; i += 1) {
    day = moment().day(i);
    if (day.isSameOrAfter(currentDate, 'day')
      || currentDate.isSame(saturday, 'day') || currentDate.isSame(sunday, 'day')) {
      result.push(day);
    }
  }
  return result;
}


const ProductStore = {
  debug: true,
  state: {
    products: [],
    ingredientFilter: 'All',
    businessFilter: 'All',
    location: '',
    date: moment(),
    availableDates: getAvailableDates(),
    ingredients: [],
    businesses: [],
  },
  getIngredientFilter() { return this.state.ingredientFilter; },
  getBusinessFilter() { return this.state.businessFilter; },
  getLocation() { return this.state.location; },
  getDate() { return formatDate(this.state.date); },
  getAvailableDates() {
    const result = [];
    this.state.availableDates.forEach((x) => { result.push(formatDate(x)); });
    return result;
  },
  setLocation(location) {
    this.state.location = location;
    this.state.businessFilter = 'All';
    this.state.ingredientFilter = 'All';
    this.state.products = this.getCurrentProducts();
    this.state.ingredients = this.getIngredientFilters();
    this.state.businesses = this.getBusinessFilters();
  },
  setIngredientFilter(filter) {
    this.state.ingredientFilter = filter;
    this.state.products = this.getCurrentProducts();
  },
  setBusinessFilter(filter) {
    this.state.businessFilter = filter;
    this.state.products = this.getCurrentProducts();
    this.state.ingredients = this.getIngredientFilters();
  },
  setDate(filter) {
    this.state.date = moment(filter, momentFormat);
    this.state.products = this.getCurrentProducts();
    this.state.ingredients = this.getIngredientFilters();
    this.state.businesses = this.getBusinessFilters();
  },
  getCurrentProducts() {
    const result = [];
    products.forEach((x) => {
      const date = moment(x.date, momentFormat);
      if (x.location === this.state.location
         && this.state.date.isSame(date, 'day')) {
        if (this.state.ingredientFilter === 'All' && this.state.businessFilter === 'All') {
          result.push(x);
        } else if (this.state.ingredientFilter === 'All' && x.business === this.state.businessFilter) {
          result.push(x);
        } else if (this.state.businessFilter === 'All' && x.type.indexOf(this.state.ingredientFilter) > -1) {
          result.push(x);
        } else if (x.business === this.state.businessFilter
                  && x.type.indexOf(this.state.ingredientFilter) > -1) {
          result.push(x);
        }
      }
    });
    return result;
  },
  /**
  * Not used => delete?
  */
  getFilteredProducts(location, filterFood, filterBusiness) {
    this.state.ingredientFilter = filterFood;
    this.state.businessFilter = filterBusiness;
    const result = [];
    products.forEach((x) => {
      if (x.location === location) {
        if (filterFood === 'All' && filterBusiness === 'All') {
          result.push(x);
        } else if (filterFood === 'All' && x.business === filterBusiness) {
          result.push(x);
        } else if (filterBusiness === 'All' && x.type.indexOf(filterFood) > -1) {
          result.push(x);
        } else if (x.business === filterBusiness && x.type.indexOf(filterFood) > -1) {
          result.push(x);
        }
      }
    });
    return result;
  },
  /**
   * returns all ingredients of the current products list.
   */
  getIngredientFilters() {
    const auxSet = new Set();
    Object.keys(this.state.products).forEach((key) => {
      this.state.products[key].type.forEach((element) => { auxSet.add(element); });
    });
    let result = Array.from(auxSet).sort();
    result = result.sort();
    result.splice(0, 0, 'All');
    return result;
  },
  /**
   * returns all business of the current products list.
   */
  getBusinessFilters() {
    const auxSet = new Set();
    Object.keys(this.state.products).forEach((key) => {
      auxSet.add(this.state.products[key].business);
    });
    let result = Array.from(auxSet);
    result = result.sort();
    result.splice(0, 0, 'All');
    return result;
  },
  /**
  * returns all the filters of the given types for all availabe products
  * @param {string} type - the type of filter
  */
  getFilters(type) {
    const auxSet = new Set();
    products.forEach((x) => {
      switch (type) {
        case 'business':
          auxSet.add(x.business);
          break;
        case 'food':
          x.type.forEach((element) => { auxSet.add(element); });
          break;
        case 'location':
          auxSet.add(x.location);
          break;
        case 'date':
          auxSet.add(x.date);
          break;
        default:
      }
    });
    const result = Array.from(auxSet);
    if (type !== 'location') {
      result.splice(0, 0, 'All');
    }
    return result;
  },
  /**
  * returns all the available products with the given query. The query must has
  * a length bigger than two chars.
  * @param {string} query - the query to search in the products
  */
  searchQuery(query) {
    if (typeof query === 'string' && query.length > 2) {
      const newProducts = [];
      this.state.products.forEach((x) => {
        if (x.business.indexOf(query) !== -1 || x.name.indexOf(query) !== -1) {
          newProducts.push(x);
        }
      });
      this.state.products = newProducts;
    } else if (query.length <= 2 && this.state.products.length === 0) {
      this.state.products = this.getCurrentProducts();
    }
  },
};

export default ProductStore;
