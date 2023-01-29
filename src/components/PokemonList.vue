<template>
  <div class="list-container">
    <PkmnFilter />
    <ul class="list">
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
import { computed } from '@vue/runtime-core';

export default {
    name: "PokemonList",
    components: {
        PkmnFilter,
        PkmnItem
    },

    setup() {
        async function fill_array() {
            try {
                console.log("Enter here");
                const url = 'https://pokeapi.co/api/v2/pokedex/1/';
                const entries = await fetch(url, {method: 'GET'});
                const j_entries = await entries.json();

                const array = [];
                for (var entrie of j_entries.pokemon_entries) {
                    console.log("Here");
                    const url = `https://pokeapi.co/api/v2/pokemon/${entrie.entry_number}`
                    const pokemon = await fetch(url, {method: 'GET'});
                    const j_pokemon = await pokemon.json();

                    array.push(j_pokemon);
                }

                return array;
            } catch(error) {
                console.error(error);
            }
        }
        
        const store = useStore();
        const entries = computed(() => store.state.filtered);

        fill_array().then(resp => {
            store.commit('set_entries', resp);
        }).catch(err => console.error(err));

        return {entries}
    }
}
</script>

<style scoped>
.list-container {
    width: min-content;
    height: calc(100% - 24px);
    min-width: 200px;

    padding: 10px;
    margin-left: 10px;

    border: 2px solid black;
    border-radius: 10px;
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