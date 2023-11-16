import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movies: 'search/movie',
        series: 'search/tv'
    },

    params: {
        query: '',
        api_key: '2b75ee9db9dabeba644693b28e420431'
    },



    error: '',

    moviesList: [], // qui mi ritorno i dati delle api
    seriesList: []
})