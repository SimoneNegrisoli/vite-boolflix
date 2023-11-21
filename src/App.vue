<template>
  <HeaderComp @search="handelSearch" />
  <Slider />
  <MainComp />
</template>

<script>
import HeaderComp from './components/Header/HeaderComp.vue';
import MainComp from './components/Main/MainComp.vue';
import Slider from './components/Main/Slider.vue';

import axios from 'axios';
import { store } from './assets/data/store.js';
export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    Slider
  },
  data() {
    return {
      store,
    }
  },
  methods: {

    handelSearch() {
      this.getMoviesandSeris()
    },
    getMoviesandSeris() {
      const movieUrl = store.apiUrl + this.store.endPoint.movies;

      axios.get(movieUrl, { params: this.store.params }).then((resp) => {
        this.store.moviesList = resp.data.results;
      })

      const seriesUrl = store.apiUrl + this.store.endPoint.series;

      axios.get(seriesUrl, { params: this.store.params }).then((resp) => {
        this.store.seriesList = resp.data.results;

      })
    }

  },
  created() {
    //this.getMoviesandSeris()
  }
}
</script>

<style lang="scss" scoped></style>