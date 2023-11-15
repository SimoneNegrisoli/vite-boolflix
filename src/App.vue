<template>
  <HeaderComp @search="handelSearch" />
  <MainComp />
</template>

<script>
import HeaderComp from './components/Header/HeaderComp.vue';
import MainComp from './components/Main/MainComp.vue';

import axios from 'axios';
import { store } from './assets/data/store.js';
export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  },
  data() {
    return {
      store,
    }
  },
  methods: {

    handelSearch() {
      this.getMovies()
    },


    getMovies() {
      const url = store.apiUrl + this.store.endPoint.movies;

      axios.get(url, { params: this.store.params }).then((resp) => {
        store.moviesList = resp.data.results
        console.log(this.getMovies)
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