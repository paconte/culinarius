<template>
  <div id="app">
    <filters></filters>
  </div>
</template>

<script>
import Filters from '../components/Filters';
import ProductStore from '../state';

export default {
  name: 'food-view',
  components: { Filters },
  beforeRouteUpdate(to, from, next) {
    ProductStore.setLocation(to.params.location);
    next();
  },
};
</script>
