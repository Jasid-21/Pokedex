<template>
  <div class="item" :data-id="id" @click="setCurrent">
    <div class="sprite">
      <img :src="sprite" alt="Sprite">
    </div>
    <div class="name">
      {{ name.charAt(0).toUpperCase() + name.slice(1) }}
    </div>
    <div class="types">
      <PkmnType v-for="t of types" :key="t" :type="t"/>
    </div>
  </div>
</template>

<script>
import PkmnType from './PkmnType.vue';
import { useStore } from 'vuex';

export default {
    name: "PkmnItem",
    components: {
      PkmnType
    },
    props: ['id', 'sprite', 'name', 'types'],
    setup(props) {
      const store = useStore();
      const setCurrent = () => {
        store.commit('set_current', props.id);
      }

      return {setCurrent}
    }
}
</script>

<style scoped>
.item {
    height: 60px;
    box-shadow: 1px 1px 3px black;
    border-radius: 10px;

    padding: 10px;
    margin-bottom: 10px;

    display: grid;
    grid-template-columns: 60px 120px 100px;
}

.item:hover {
  box-shadow: 2px 2px 3px purple;
  cursor: pointer;
}

.sprite > img {
    width: 100%;
    height: 100%;
}

.name {
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
}

.types {
    display: flex;
    flex-direction: column;

    justify-content: space-around;
}
</style>