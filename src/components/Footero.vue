<template>
  <section>
    <footer class="footer" style="background-color: #6b7781;">
      <div class="container">
        <div class="content has-text-centered">
          <router-link to="/">Home</router-link>
          <router-link class="margin" to="/faq">FAQ</router-link>
          <router-link class="margin" to="/legal-and-privacy">Legal & Privacy</router-link>
          <router-link class="margin" to="/impressum">Impressum</router-link>
          <!--
          <router-link class="margin" to="/map">Map</router-link>
          <!--
          <div class="content pull-right text-muted">© 2017 FJRL</div>
          -->
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'footero',
};
</script>

<style>
.margin {
  margin: 0 10px;
}
</style>
