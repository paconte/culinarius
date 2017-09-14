<template>
  <section class="section">
    <div class="container">
      <h2>Hello World</h2>
      <gmap-map
        :center="center"
        :zoom="15"
        style="width: 1000px; height: 500px">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          :title="m.title"

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
// http://maps.google.com/mapfiles/ms/icons/green-dot.png
export default {
  data() {
    return {
      center: { lat: 52.431571, lng: 13.533930 },
      markers: [
        {
          position: { lat: 52.431487, lng: 13.536813 },
          title: 'Albert',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        },
        {
          position: { lat: 11.0, lng: 11.0 },
          title: 'Sonnenschein',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
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
