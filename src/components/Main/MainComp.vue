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
                            <img v-else src="/public/images/fake.png" alt="no bandiera" class="myfleg">
                        </li>
                        <li>{{ movie.vote_average }}</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section id="serie">
            <h2>Serie tv</h2>
            <ul>
                <li>
                <li v-for="serie in this.store.seriesList">
                    <h4>{{ serie.name }}</h4>
                    <ul>
                        <li>{{ serie.original_name }}</li>
                        <li>
                            <img v-if="hasFlag(serie.original_language)" :src="getFlag(serie.original_language)"
                                :alt="serie.original_language" class="myfleg">
                            <img v-else src="/public/images/fake.png" alt="no bandiera" class="myfleg">
                        </li>
                        <li>{{ serie.vote_average }}</li>
                    </ul>
                </li>
                </li>
            </ul>
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
            let flag = `/public/images/${originalLanguage}.png`
            return flag
        }
    }
}
</script>

<style lang="scss" scoped>
.myfleg {
    width: 50px;
}

#serie {
    background-color: red;
}
</style>