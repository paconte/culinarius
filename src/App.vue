<template>
  <div id="app">
    <router-view></router-view>
    <footero></footero>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import Footero from './components/Footero';

export default {
  name: 'app',
  components: { Footero },
};
</script>
