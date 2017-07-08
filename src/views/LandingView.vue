<template>
  <div>
  <section class="hero bg-img" style="height: 465px;">
    <div class="hero-body ">
      <div class="container center-select" style="position: static">
        <div class="field has-addons">
          <p class="control">
            <span class="select is-large">
              <select style="padding-right: 60px" v-model="location">
                <option disabled value="">Select your location</option>
                <option>Adlershof</option>
                <option>Alexanderplatz</option>
              </select>
            </span>
          </p>
          <p class="control"><a v-on:click="navigate()" class="button is-primary is-large">Go</a></p>
        </div>
      </div>
    </div>
  </section>
  <br><br>

  <div class="container is-fluid" style="margin: 0 150px;">
    <div class="content">
      <h1>Culinarius helps you to find your favorite working day lunch.</h1><br>
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child notification has-text-centered">
                  <figure class="image is-4by3">
                    <img src="../assets/location1.jpg">
                  </figure>
                  <br>
                  <p class="title">Pick location</p>
                  <span class="tag is-warning">1</span>
                </article>
              </div>

            <div class="tile is-parent">
              <article class="tile is-child notification has-text-centered">
                <figure class="image is-4by3">
                  <img src="../assets/search-meal3.jpeg">
                </figure>
                <br>
                <p class="title">Search meals</p>
                <span class="tag is-warning">2</span>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="tile is-child notification has-text-centered">
                <figure class="image is-4by3">
                  <img src="../assets/enjoy1.jpeg">
                </figure>
                <br>
                <p class="title">Enjoy</p>
                <span class="tag is-warning">3</span>
              </article>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br>
  </div>
</template>

<script>
import ProductStore from '../state';

export default {
  name: 'landing-view',
  data() {
    return {
      location: '',
    };
  },
  methods: {
    navigate() {
      if (this.location !== '') {
        const destination = `/meals/${this.location}`;
        ProductStore.setLocation(location);
        this.$router.push(destination);
      }
    },
  },
};
</script>

<style>
.bg-img {
     background-image: url(../assets/foodie1.jpg) ;
     background-position: center center;
     background-repeat:  no-repeat;
     background-attachment: fixed;
     background-size:  cover;
     background-color: #999;
}
.center-select {
  width: 30%;
  margin: 0 auto;
  top: 50%;
  transform: translateY(500%);
}
</style>
