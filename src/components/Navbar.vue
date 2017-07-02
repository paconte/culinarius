<template>
    <div class="container">
      <div class="columns">
        <div class="column is-2 is-hidden-mobile">
          <nav class="nav">
            <div class="nav-left">
              <a class="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
              </a>
            </div>
          </nav>
        </div>
        <div class="column is-two-thirds">
          <nav class="nav">
            <div class="nav-right">
              <div class="nav-item">
                <div class="field">
                  <div class="control">
                    <div class="select">
                      <select v-model="location">
                        <option v-for="location in locations">{{location}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-right">
              <div class="nav-item">
                <div class="field">
                  <div class="control">
                    <div class="select is-disabled">
                      <select disabled>
                        <option>Friday - 19.05.2017</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
    </div>
  </div>

</template>

<script>
import Filtero from './Filtero';
import ProductStore from '../state';

export default {
  name: 'navbar',
  components: { Filtero },
  data() {
    return {
      locations: ProductStore.getFilters('location'),
      location: this.$route.params.location,
      query: '',
    };
  },
  watch: {
    location: 'changeLocation',
  },
  methods: {
    dropdown() {
      this.locations = Array.from(ProductStore.getFilters('location'));
      const index = this.locations.indexOf(this.$route.params.location);
      if (index > -1) { this.locations.splice(index, 1); }

      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.toggle('is-open');
    },
    prepareLocations(locations) {
      const index = locations.indexOf(this.$route.params.location);
      if (index > -1) { locations.splice(index, 1); }
      return locations;
    },
    changeLocation() {
      console.log('###changeLocation 1 ###');
      console.log(this.location);
      this.$router.push(this.location);
      console.log('###changeLocation 2 ###');
    },
  },
};
</script>

<style>
.dropdown {
  box-shadow: 0 0 8px #777;
  display: none;
  left: 0;
  position: absolute;
  top: 100%;
  z-index: 1000;
}

.dropdown.is-open {
  display: block;
}
</style>
