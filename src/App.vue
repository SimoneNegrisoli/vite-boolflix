<template>
  <main>
    <section id="movie">
      <h2>movies</h2>
    </section>
    <section id="serie">
      tv
    </section>
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './assets/data/store.js';
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
      const url = store.apiUrl + this.store.endPoint.movies;

      axios.get(url, { params: this.store.params }).then((resp) => {

      })
    },
    /* getMoviesandSeris (){
       const movieurl = store.apiUrl + this.store.endPoint.movies;

      axios.get(url, { params: this.store.params }).then((resp) => {
        this.store.movieList = resp.data.results;
      })

       const seriesurl = store.apiUrl + this.store.endPoint.series;

      axios.get(url, { params: this.store.params }).then((resp) => {
        this.store.movieList = resp.data.results;

      })
    }
    */
  },
  created() {
    //this.getMoviesandSeris()
  }
}
</script>

<style lang="scss" scoped></style>