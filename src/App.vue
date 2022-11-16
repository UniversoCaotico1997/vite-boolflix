<script>
import { store } from "./assets/js/store";
import axios from "axios";
export default {
  name: 'App',
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

</template>

<style lang="scss" scoped>

</style>
