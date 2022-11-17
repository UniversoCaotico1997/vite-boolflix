<script>
import { store } from "./assets/js/store";

// import AppHeader from "./components/AppHeader.vue";
export default {
  name: 'App',
  components: {
    // AppHeader
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.callApi(this.store.API_url)
  }
}


</script>

<template>

  <header id="site_header">
    <div class="serchByMovies">
      <input type="text" placeholder="search" v-model="store.searchText">
      <button @click="searchMovie">Click Me!!!</button>
    </div>
  </header>
  <!-- /#site_header -->


  <main id="site_main">

    <ul>
      <li v-for="movie in store.movies">
        {{ movie.title }}
      </li>
    </ul>

  </main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->

</template>

<style lang="scss" scoped>

</style>
