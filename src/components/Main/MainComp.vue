<template>
    <main>
        <section id="movie">
            <h2>movies</h2>
            <ul>
                <li v-for="movie in this.store.moviesList">
                    <h4>{{ movie.title }}</h4>
                    <ul>
                        <li>{{ movie.original_title }}</li>
                        <li>{{ movie.original_language }}</li>
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
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>