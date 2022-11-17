<script>
import { store } from "./assets/js/store";
import axios from "axios";
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
  methods: {
    callApi(url) {
      axios.get(url).then(response => {
        console.log(response.data.results);
        this.store.movies = response.data.results
      })
    },
    searchMovie() {
      console.log(store.searchText);
      const searchMovieName = this.store.searchText
      const url = `${this.store.API_url}?name${searchMovieName}`
      console.log(url);
    }
  },
  mounted() {
    this.callApi(this.store.API_url)
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
