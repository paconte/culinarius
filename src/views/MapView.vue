<template>
  <section class="section">
    <div class="container">
      <h2>Hello World</h2>
      <gmap-map
        :center="center"
        :zoom="7"
        style="width: 500px; height: 300px">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position">
        </gmap-marker>
      </gmap-map>
    </div>
  </section>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCowiYpsvUU-1G1IRWJtFiz1gAu5a_9U0o',
    // libraries: 'places', //// If you need to use place input
  },
});
// VueGoogleMaps.load('AIzaSyCowiYpsvUU-1G1IRWJtFiz1gAu5a_9U0o', '3.29');

export default {
  data() {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        {
          position: { lat: 10.0, lng: 10.0 },
        },
        {
          position: { lat: 11.0, lng: 11.0 },
        },
      ],
    };
  },
};
</script>

<style>
map {
  width:100%;
  height: 600px;
  display: block;
}
</style>
