import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movies: 'search/movie',
        series: 'search/series'
    },

    params: {
        api_Key: '2b75ee9db9dabeba644693b28e420431',
        query: ''
    },



    error: '',

    moviesList: [], // qui ritorno i dati delle api
    seriesList: []
})