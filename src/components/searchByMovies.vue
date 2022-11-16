<script>
import { store } from "../assets/js/store";
export default {
    name: 'searchByMovies',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div class="serchByMovies">
        <input type="text" placeholder="seach" v-model="store.searchText">

        <button @click="$emit(`filterMovie`)">Click Me!!!</button>
    </div>

</template>

<style>

</style>