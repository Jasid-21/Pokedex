<template>
  <div class="stats">
    <div class="stat" v-for="s of stats" :key="s">
      <div class="stat_name">
        {{ setName(s.stat.name) }}
      </div>
      <div class="stat_bar_container">
        <div 
        class="stat_bar" 
        :style="{width: (s.base_stat/255)*100 + '%'}"
        :class="setColor(s.base_stat)">
        <span>{{ s.base_stat }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
    name: 'PkmnStats',
    props: ['stats'],
    setup(props) {
        const stats = computed(() => props.stats);

        const setColor = (value) => {
          if (value < 70) {
            return 'red'
          }

          if (value > 69 && value < 100) {
            return 'yellow'
          }

          if (value > 99 && value < 121) {
            return 'green'
          }

          if (value > 120) {
            return 'aquamarine'
          }
        }

        const setName = (name) => {
          if (name == 'special-attack') {
            return 'sp. Atk'
          }

          if (name == 'special-defense') {
            return 'sp. Def'
          }

          name = name.charAt(0).toUpperCase() + name.slice(1);
          return name;
        }

        return {stats, setColor, setName}
    }
}
</script>

<style scoped>
.stats {
    width: calc(100% - 20px);
    height: calc(100% - 20px);

    padding: 10px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

    background-color: rgb(255, 243, 243);
    border-radius: 10px;
    grid-column: 1/4;
    grid-row: 4/5;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.stat {
  display: flex;
  justify-content: flex-start;
}

.stat_name {
  width: 20%;
  height: 100%;

  font-weight: 700;
}

.stat_bar_container {
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
}

.stat_bar {
  background-color: rgb(22, 22, 97);
  border-radius: 10px;
}

.stat_bar > span {
  margin-left: 10px;
}

.stat_bar.red {
  background-color: #FAAC58;
}

.stat_bar.yellow {
  background-color: #F4FA58;
}

.stat_bar.green {
  background-color: #82FA58;
}

.stat_bar.aquamarine {
  background-color: #58FAAC;
}
</style>