import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movies: 'search/movie',
        series: 'search/series'
    },
    // fare oggetto params dentro il quale devo mettere api key perche obbligatoria e una query ceh all'inizio metto vuota e poi l'utente
    params: {
        apiKey: '2b75ee9db9dabeba644693b28e420431',
        query: ''
    },



    error: '',
    loading: true,
    moviesList: [], // qui ritorno i dati delle api
    seriesList: []
})