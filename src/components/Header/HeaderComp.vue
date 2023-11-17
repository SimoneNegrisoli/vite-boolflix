<template>
    <header>
        <nav class="d-flex justify-content-between container ">
            <div class="mylogo">
                BOOLFLIX
            </div>
            <!-- input search -->
            <div class="input-group">
                <span class="input-group-text bg-transparent" id="basic-add1">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" class="form-control border-start-0" placeholder="Cerca film o serie tv.."
                    aria-describedby="basic-add1" v-model="store.params.query">
                <button class="btn" @click="search"> Cerca</button>
            </div>
        </nav>
    </header>
</template>

<script>

import { store } from '../../assets/data/store.js'
export default {
    name: 'HeaderComp',
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            if (this.store.params.query.trim() !== '') {
                this.$emit('search', this.store.params.query)
            }
            this.store.params.query = ''
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    padding: 20px;
    background-color: black;
    color: white;
}

.input-group {
    width: 300px;
    background-color: white;
}

.mylogo {
    font-size: 2.5rem;
    font-weight: bold;
    color: #E50914;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
    }
}
</style>