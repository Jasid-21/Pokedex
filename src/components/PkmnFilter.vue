<template>
  <form class="filter" @submit.prevent="setFilter">
    <input type="text" :value="name" @input="e => name = e.target.value" placeholder="Type a name or word...">
    <input type="submit" value="Go!">
  </form>
</template>

<script>
import { ref } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
    name: "PkmnFilter",
    setup() {
      const setFilter = () => {
        console.log(name.value);
        store.commit('set_filter', {name: name.value});
      }

      const store = useStore();
      const name = ref('');

      return {name, setFilter}
    }
}
</script>

<style scoped>
.filter {
    width: calc(100% - 30px);
    height: 50px;

    border: 2px solid violet;
    border-radius: 20px;

    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.filter > input[type="text"] {
    height: 26px;
    border: 1px solid gray;
    border-radius: 10px;
    color: rgb(68, 68, 68);

    padding-left: 10px;
    margin-right: 10px;
}

.filter > input[type="submit"] {
    width: 50px;
    height: 30px;

    border: 1px solid black;
    border-radius: 10px;
}
</style>
