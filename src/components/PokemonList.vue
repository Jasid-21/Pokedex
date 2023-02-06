<template>
  <div class="list-container">
    <PkmnFilter />
    <span class="counter" v-if="curr_entries < total">
        {{ curr_entries}} / <strong>{{ total }}</strong>
    </span>
    <ul v-else class="list">
        <li v-for="e of entries" :key="e">
            <PkmnItem :sprite="e.sprites.front_default" :name="e.name" :types="e.types" :id="e.id" />
        </li>
    </ul>
  </div>
</template>

<script>
import PkmnItem from './PkmnItem.vue';
import PkmnFilter from './PkmnFilter.vue';

import { useStore } from 'vuex';
import { computed, ref } from '@vue/runtime-core';

export default {
    name: "PokemonList",
    components: {
        PkmnFilter,
        PkmnItem
    },

    setup() {
        async function fill_array() {
            try {
                const url = 'https://pokeapi.co/api/v2/pokedex/1/';
                const entries = await fetch(url, {method: 'GET'});
                const j_entries = await entries.json();
                total.value = j_entries.pokemon_entries.length;

                const array = [];
                for (var entrie of j_entries.pokemon_entries) {
                    const url = `https://pokeapi.co/api/v2/pokemon/${entrie.entry_number}`
                    const pokemon = await fetch(url, {method: 'GET'});
                    const j_pokemon = await pokemon.json();

                    curr_entries.value++;
                    array.push(j_pokemon);
                }

                return array;
            } catch(error) {
                console.error(error);
            }
        }
        
        const store = useStore();
        const entries = computed(() => store.state.filtered);
        const curr_entries = ref(0);
        const total = ref(0);

        fill_array().then(resp => {
            store.commit('set_entries', resp);
        }).catch(err => console.error(err));

        return {entries, total, curr_entries}
    }
}
</script>

<style scoped>
.counter {
    width: 100px;
    height: 50px;

    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
}
.list-container {
    width: min-content;
    height: calc(100% - 24px);
    min-width: 200px;

    padding: 10px;
    margin-left: 10px;

    border: 2px solid black;
    border-radius: 10px;

    position: relative;
}

.list {
    height: calc(100% - 70px);

    border-radius: 10px;
    list-style: none;
    padding-left: 0px;
    padding-top: 5px;
    padding-right: 10px;

    overflow-y: scroll;
}

.list::-webkit-scrollbar {
    width: 20px;
    background-color: rgb(192, 192, 192);
    border-radius: 15px;
}

.list::-webkit-scrollbar-track {
    width: 20px;
    background-color: rgb(192, 192, 192);
    border-radius: 15px;
}

.list::-webkit-scrollbar-thumb {
    background-color: rgb(94, 6, 6);
    border-radius: 20px;
}
</style>