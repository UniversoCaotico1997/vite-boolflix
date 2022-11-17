import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    API_url: 'https://api.themoviedb.org/3/search/movie?api_key=d0e6b3eebd2667bf94bc6bd97ea73716&language=it-IT&query=Star%20Wars&page=1&include_adult=false',
    movies: null,
    searchText: '',
    callApi(url) {
        axios.get(url).then(response => {
            console.log(response.data.results);
            this.movies = response.data.results
        })
    }
})