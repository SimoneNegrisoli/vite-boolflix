<template>
    <main>
        <section id="movie">
            <h2>movies</h2>
            <ul>
                <li v-for="movie in this.store.moviesList">
                    <h4>{{ movie.title }}</h4>
                    <ul>
                        <li>{{ movie.original_title }}</li>
                        <li>
                            <img v-if="hasFlag(movie.original_language)" :src="getFlag(movie.original_language)"
                                :alt="movie.original_language" class="myfleg">
                        </li>
                        <li>{{ movie.vote_average }}</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section id="serie">
            tv
        </section>
    </main>
</template>

<script>
import { store } from '../../assets/data/store.js';
export default {
    name: 'MainComp',
    data() {
        return {
            store,
            flags: ['de', 'fr', 'it', 'jp', 'kr', 'es', 'uk'],
            imgPath: 'https://image.tmdb.org/t/p/original/'
        }
    },
    methods: {
        hasFlag(originalLanguage) {
            if (this.flags.includes(originalLanguage)) {
                return true
            }
            return false
        },
        getFlag(originalLanguage) {
            let flag = `/public/images/${originalLanguage}`
            return flag
        }
    }
}
</script>

<style lang="scss" scoped>
.myfleg {
    width: 50px;
}
</style>