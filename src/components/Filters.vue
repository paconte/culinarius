<template>
  <section class="section">
    <div class="container">
      <!--<navbar></navbar>-->
      <div class="columns">
        <!-- menu -->
        <div class="column is-2 is-hidden-mobile" id="menu-normal" >
          <aside class="menu">
            <p class="menu-label">Ingredients</p>
            <ul class="menu-list">
              <filtero v-for="ingredient in state.ingredients" :key="ingredient" :name="ingredient" filterType="ingredient" type="bulmaMenu" :isActive="isIngredientActive(ingredient)" v-on:applyfilter="applyFilter"></filtero>
            </ul>
            <p class="menu-label">Business</p>
            <ul class="menu-list">
              <filtero v-for="business in state.businesses" :key="business" :name="business" filterType="business" type="bulmaMenu" :isActive="isBusinessActive(business)" v-on:applyfilter="applyFilter"></filtero>
            </ul>
          </aside>
        </div>

        <div class="column is-hidden-tablet" id="menu-mobile">
          <div class="container">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Filters</p>
                <a class="card-header-icon"><span class="icon"><i class="fa fa-angle-up" id="collapseMenu" v-on:click="collapseMenu()"></i></span></a>
              </header>
              <div class="card-content disappear" id="menu-mobile-collapse">
                <div class="content">
                  <aside class="menu">
                    <p class="menu-label">Ingredients</p>
                    <ul class="menu-list" style="list-style-type: none;">
                      <filtero v-for="ingredient in state.ingredients" :key="ingredient" :name="ingredient" filterType="ingredient" type="bulmaMenu" :isActive="isIngredientActive(ingredient)" v-on:applyfilter="applyFilter"></filtero>
                    </ul>
                    <p class="menu-label">Business</p>
                    <ul class="menu-list" style="list-style-type: none;">
                      <filtero v-for="business in state.businesses" :key="business" :name="business" filterType="business" type="bulmaMenu" :isActive="isBusinessActive(business)" v-on:applyfilter="applyFilter"></filtero>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="column is-two-thirds">
          <!-- Location and Date combobox -->
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select v-model="location">
                      <option v-for="location in locations">{{location}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select v-model="date">
                      <option v-for="date in dates">{{date}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Search Field -->
          <div class="field has-addons">
            <p class="control is-expanded">
              <input v-model="query" class="input" type="text" placeholder="Find a lunch">
            </p>
            <p class="control">
              <a class="button is-info">Search</a>
            </p>
          </div>
          <!-- products -->
          <div >
          <div class="box custom-box" v-for="product in state.products">
            <!--
            <article class="media">
              <div class="media-left">
                <figure class="image is-32x32">
                  <img v-if="product.type.indexOf('vegan') > -1 && product.type.indexOf('vegetarian') > -1" src="./assets/apple.png" alt="Image">
                  <img v-else-if="product.type.indexOf('vegan') > -1" src="./assets/apple.png" alt="Image">
                  <img v-else-if="product.type.indexOf('vegetarian') > -1" src="./assets/carrot.png" alt="Image">
                  <img v-else-if="product.type.indexOf('fish') > -1" src="./assets/fish.png" alt="Image">
                  <img v-else src="./assets/tray.png" alt="Image">
                </figure>
              </div>
              <div v-if="product.type.indexOf('bio') > -1" class="media-left">
                <figure class="image is-32x32">
                  <img src="./assets/bio.png" alt="Image">
                </figure>
              </div>
            -->
              <div class="media-content">
                <div class="content">
                  <p>
                    <span class="is-small" style="font-size: small;">{{product.business}}</span>
                    <br>
                    {{product.name}}
                    <br>
                    <span v-if="product.price" class="tag is-warning">{{product.price}} &euro;</span>
                    <!--<span class="tag is-primary">{{product.business}}</span>-->
                    <span v-if="product.type.indexOf('Bio') > -1" class="tag is-primary">Bio</span>
                    <span v-if="product.type.indexOf('Vegan') > -1" class="tag is-primary">Vegan</span>
                    <span v-if="product.type.indexOf('Vegetarian') > -1 && product.type.indexOf('Vegan') < 0" class="tag is-primary">Veggie</span>
                    <span v-if="product.type.indexOf('Fish') > -1" class="tag is-primary ">Fish</span>
                    <span v-if="product.type.indexOf('Soup') > -1" class="tag is-primary ">Soup</span>
                    <!--<span v-else class="tag is-danger is-pulled-right">?? &euro;</span>-->
                  </p>
                </div>
              </div>
            </article>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'font-awesome/css/font-awesome.css';
// import Navbar from './Navbar';
import Filtero from './Filtero';
import ProductStore from '../state';

export default {
  name: 'filters',
  components: { Filtero },
  data() {
    return {
      compress: false,
      state: ProductStore.state,
      query: '',
      locations: ProductStore.getFilters('location'),
      location: this.$route.params.location,
      dates: ProductStore.getAvailableDates(),
      date: ProductStore.getDate(),
    };
  },
  watch: {
    query: 'searchQuery',
    location: 'changeLocation',
    date: 'changeDate',
  },
  methods: {
    onResize() {
      const clientWidth = document.documentElement.clientWidth;
      let menuWidth;

      if (this.compress) {
        menuWidth = document.getElementById('menu-mobile').offsetWidth;
      } else {
        menuWidth = document.getElementById('menu-normal').offsetWidth;
      }

      if (menuWidth * 2 > clientWidth) {
        this.compress = true;
      } else {
        this.compress = false;
      }
    },
    collapseMenu() {
      const icon = document.getElementById('collapseMenu');
      const content = document.getElementById('menu-mobile-collapse');
      if (icon.classList.contains('fa-angle-down')) {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
        content.classList.add('disappear');
      } else {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
        content.classList.remove('disappear');
      }
    },
    applyFilter(filter, type) {
      if (type === 'ingredient') {
        ProductStore.setIngredientFilter(filter);
      } else if (type === 'business') {
        ProductStore.setBusinessFilter(filter);
      }
    },
    isIngredientActive(ingredient) {
      return ingredient === this.state.ingredientFilter;
    },
    isBusinessActive(business) {
      return business === this.state.businessFilter;
    },
    searchQuery() { ProductStore.searchQuery(this.query); },
    changeLocation() { this.$router.push(this.location); },
    changeDate() { ProductStore.setDate(this.date); },
  },
  mounted() {
    this.onResize();
    if (this.state.products.length === 0) {
      ProductStore.setLocation(this.$route.params.location);
    }
  },
};
</script>

<style>
.custom-box {
  padding-top: 15px;
  padding-bottom: 15px;
  /*box-shadow: 0 1px 1px rgba(10, 10, 10, 0.1), 0 0  1px rgba(10, 10, 10, 0.1);*/
}
.disappear {
  display: none;
}
.testeando {
  position: fixed;
}
.disablescroll {
  overflow-y:hidden;
  overflow-x:hidden;
}
</style>
