<template>
    <main>
        <section id="movie">
            <h2>movies</h2>

            <div v-for="movie in this.store.moviesList" :key="movie.id" class="mybox" @mouseover="flipCard(movie, true)"
                @mouseleave="flipCard(movie, false)">
                <div class=" box-inner" :class="['box-inner', { 'flipped': isFlipped }]">
                    <div class="box-front">
                        <img v-if="movie.poster_path" :src="getCoverMovie(movie.poster_path)" :alt="movie.original_title">
                    </div>
                    <div class="box-back">
                        <h4>{{ movie.title }}</h4>
                        <h6>{{ movie.original_title }}</h6>
                        <div>
                            <img v-if="hasFlag(movie.original_language)" :src="getFlag(movie.original_language)"
                                :alt="movie.original_language" class="myfleg">
                            <img v-else src="/public/images/fake.png" alt="no bandiera" class="myfleg">
                        </div>
                        <div>
                            <i v-for="n in 5" :key="n" class="fa-star"
                                :class="(n <= getVoted(movie.vote_average)) ? 'fa-solid' : 'fa-regular'"></i>
                        </div>
                    </div>
                </div>

            </div>

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

                        <li>
                            <img v-if="serie.poster_path" :src="getCoverSeries(serie.poster_path)"
                                :alt="serie.original_name">
                        </li>
                        <li>
                            <i v-for="n in 5" :key="n" class="fa-star"
                                :class="(n <= getVoted(serie.vote_average)) ? 'fa-solid' : 'fa-regular'"></i>
                        </li>
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
            imgPath: 'https://image.tmdb.org/t/p/w342/',
            isFlipped: false
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
        },
        getCoverMovie(posterPath) {
            let imgCover = `${this.imgPath}${posterPath}`;
            return imgCover
        },
        getCoverSeries(posterPathSeries) {
            let imgCover = `${this.imgPath}${posterPathSeries}`;
            return imgCover
        },
        getVoted(vote) {
            return Math.ceil(vote / 2)
        },
        flipCard(movie, value) {
            const index = this.store.moviesList.findIndex(movie => movie.id)
            this.movie = index
            this.isFlipped = value;
        },

    }
}
</script>

<style lang="scss" scoped>
.myfleg {
    width: 30px;
}

#serie {
    background-color: red;
}

.mybox {
    display: flex;
    flex-wrap: wrap;

    perspective: 1000px;
    width: 342px;
    height: 450px;


    .box-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform-style: preserve-3d;

        &.flipped {
            transform: rotateY(180deg);
        }


    }

    .box-front {
        background-color: #cccccc;
        color: #111111;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .box-front,
    .box-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .box-front {
        background-color: #cccccc;
        color: #111111;
    }

    .box-back {
        background-color: #8ebf42;
        color: #eeeeee;
        transform: rotateY(180deg);
    }
}
</style>