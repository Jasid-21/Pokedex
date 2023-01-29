<template>
  <div class="masterContainer" @click="hidePopUp">
    <MoveInfo v-if="popUpActive" />
    <NavBar />
    <div class="body">
      <PokemonList />
      <PkmnCard v-if="current.id != undefined" />
      <MovesList />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

import NavBar from './components/NavBar.vue';
import PokemonList from './components/PokemonList.vue';
import PkmnCard from './components/PkmnCard.vue';
import MovesList from './components/MovesList.vue';
import MoveInfo from './components/MoveInfo.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    PokemonList,
    PkmnCard,
    MovesList,
    MoveInfo
  },
  setup() {
    const hidePopUp = () => {
      store.commit('setPopUp', {activate: false});
    }

    const store = useStore();
    const current = computed(() => store.state.current);
    const popUpActive = computed(() => store.state.popUp);

    return {current, hidePopUp, popUpActive}
  }
}
</script>

<style scoped>
.masterContainer {
  width: 100vw;
  height: 100vh;
}

.body {
  width: 100%;
  height: calc(100vh - 90px);

  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
