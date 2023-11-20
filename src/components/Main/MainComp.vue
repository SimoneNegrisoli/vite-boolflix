<template>
    <main>
        <section id="movie" class="container">
            <div class="row">
                <h2>movies</h2>

                <div v-for="movie in this.store.moviesList" :key="movie.id" class="mybox col-12 col-md-2 pt-3"
                    @mouseover="movie.isFlipped = true" @mouseleave="movie.isFlipped = false">
                    <div class=" box-inner" :class="['box-inner', { 'flipped': movie.isFlipped }]">
                        <div class="box-front">
                            <img v-if="movie.poster_path" :src="getCoverMovie(movie.poster_path)"
                                :alt="movie.original_title">
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
                                    :class="(n <= getVoted(movie.vote_average)) ? 'fa-solid' : 'fa-regular'">
                                </i>
                            </div>
                            <div class="overview pb-2 pt-2">
                                <strong>Plot</strong><br>
                                {{ movie.overview }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="serie" class="container">
            <div class="row">
                <h2>Serie tv</h2>

                <div v-for="serie in this.store.seriesList" :key="serie.id" class="mybox col-12 col-md-2"
                    @mouseover="serie.isFlipped = true" @mouseleave="serie.isFlipped = false">
                    <div class=" box-inner" :class="['box-inner', { 'flipped': serie.isFlipped }]">
                        <div class="box-front">
                            <img v-if="serie.poster_path" :src="getCoverMovie(serie.poster_path)"
                                :alt="serie.original_title">
                        </div>
                        <div class="box-back">
                            <h4>{{ serie.name }}</h4>
                            <h6>{{ serie.original_title }}</h6>
                            <div>
                                <img v-if="hasFlag(serie.original_language)" :src="getFlag(serie.original_language)"
                                    :alt="serie.original_language" class="myfleg">
                                <img v-else src="/public/images/fake.png" alt="no bandiera" class="myfleg">
                            </div>
                            <div>
                                <i v-for="n in 5" :key="n" class="fa-star"
                                    :class="(n <= getVoted(serie.vote_average)) ? 'fa-solid' : 'fa-regular'">
                                </i>
                            </div>
                            <div class="overview pb-2 pt-2">
                                <strong>Plot</strong><br>
                                {{ serie.overview }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
        }
    }
}
</script>

<style lang="scss" scoped>
#serie {
    background-color: red;
    ;
}

.mybox {
    display: flex;
    flex-wrap: wrap;

    perspective: 1000px;
    width: calc(100% / 4);
    height: 350px;


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

        h4 {
            color: black;
            font-weight: 800;
        }

        h6 {
            color: black;
            font-weight: 500;
        }
    }

    .box-back {
        background-color: rgb(204, 204, 204);
        color: white;
        transform: rotateY(180deg);
        overflow-y: auto;
        padding: 20px;
        line-height: 1.5rem;
    }
}

.myfleg {
    width: 20px;
}

.overview {
    height: 100%;
    overflow-y: auto;
}
</style>