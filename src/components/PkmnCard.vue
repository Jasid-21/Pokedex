<template>
  <div class="card">
    <div class="name">
        <span>
            {{ current.name.charAt(0).toUpperCase() + current.name.slice(1) }}
        </span>
    </div>
    <div class="types">
        <PkmnType v-for="t of current.types" :key="t" :type="t" />
    </div>
    <img :src="current.sprites.other.home.front_default" alt="">
    <PkmnAbilities :abilities="current.abilities" />
    <PkmnStats :stats="current.stats" />
  </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';

import PkmnType from './PkmnType.vue';
import PkmnMoves from './PkmnMoves.vue';
import PkmnStats from './PkmnStats.vue';
import PkmnAbilities from './PkmnAbilities.vue';

export default {
    name: 'PkmnCard',
    components: {
        PkmnType,
        PkmnMoves,
        PkmnStats,
        PkmnAbilities
    },
    setup() {
        const store = useStore();
        const current = computed(() => store.state.current); //{}

        return {current}
    }
}
</script>

<style scoped>
.card {
    width: 600px;
    height: min-content;

    border: 2px solid red;
    border-radius: 20px;
    background-color: rgb(255, 196, 196);

    padding: 10px;

    display: grid;
    grid-template-rows: 15% 15% 35% 35%;
    grid-template-columns: 40% 30% 30%;

    position: relative;
}

.name {
    border-bottom: 1px solid gray;

    grid-column: 1/3;
    grid-row: 1/2;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.name > span {
    margin-left: 40px;

    font-size: 22px;
    font-weight: bold;
}

.types {
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

img {
    grid-column: 1/2;
    grid-row: 2/4;

    width: 100%;
    height: 100%;
}
</style>