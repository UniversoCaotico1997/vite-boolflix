<script>
import { store } from "./assets/js/store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      store

    }

  }, methods: {
    callApi(url) {
      axios.get(url).then(response => {
        console.log(response.data);
        this.store.results = response.data
      })
    }

  },
  mounted() {
    this.callApi(this.store.API_url)
  }
}


</script>

<template>

  <AppHeader />
  <!-- /#site_header -->
  <main id="site_main"></main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->



  <div>
    <ul>
      <li>

      </li>
    </ul>

  </div>

</template>

<style lang="scss" scoped>

</style>
