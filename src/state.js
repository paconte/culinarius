import products from './test';


const ProductStore = {
  debug: true,
  state: {
    products: [],
    ingredientFilter: 'All',
    businessFilter: 'All',
    location: '',
    ingredients: [],
    businesses: [],
  },
  getIngredientFilter() { return this.state.ingredientFilter; },
  getBusinessFilter() { return this.state.businessFilter; },
  getLocation() { return this.state.location; },
  getProducts(location) {
    this.state.location = location;
    const result = [];
    products.forEach((x) => { if (x.location === location) { result.push(x); } });
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
  },
  getCurrentProducts() {
    const result = [];
    products.forEach((x) => {
      if (x.location === this.state.location) {
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
  getIngredientFilters() {
    const auxSet = new Set();
    Object.keys(this.state.products).forEach((key) => {
      this.state.products[key].type.forEach((element) => { auxSet.add(element); });
    });
    const result = Array.from(auxSet);
    result.splice(0, 0, 'All');
    return result;
  },
  getBusinessFilters() {
    const auxSet = new Set();
    Object.keys(this.state.products).forEach((key) => {
      auxSet.add(this.state.products[key].business);
    });
    const result = Array.from(auxSet);
    result.splice(0, 0, 'All');
    return result;
  },
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
        default:
      }
    });
    const result = Array.from(auxSet);
    if (type !== 'location') {
      result.splice(0, 0, 'All');
    }
    return result;
  },
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
