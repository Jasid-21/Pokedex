<template>
    <div class="moves-container">
        <MoveItem v-for="(m, idx) of current.moves" :key="idx" :move="m.move" />
    </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';

import MoveItem from './MoveItem.vue';

export default {
    name: 'MovesList',
    components: {
        MoveItem
    },
    setup() {
        const store = useStore();
        const current = computed(() => store.state.current);

        return {current}
    }
}
</script>

<style scoped>
.moves-container {
    width: 170px;
    height: calc(100% - 14px);

    border: 2px solid blue;
    border-radius: 10px;
    background-color: rgb(180, 180, 255);

    margin: 0px;
    padding: 5px;

    overflow: auto;
}

.moves-container::-webkit-scrollbar {
    width: 10px;
    background-color: rgb(192, 192, 192);
    border-radius: 15px;
}

.moves-container::-webkit-scrollbar-track {
    width: 10px;
    background-color: rgb(192, 192, 192);
    border-radius: 15px;
}

.moves-container::-webkit-scrollbar-thumb {
    background-color: rgb(4, 5, 68);
    border-radius: 10px;
}
</style>
