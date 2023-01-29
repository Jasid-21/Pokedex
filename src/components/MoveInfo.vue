<template>
  <div class="moveInfo" :class="{active: active}" 
  :style="{top: coord[1]?coord[1] + 'px':'0px', left: coord[0]?coord[0] + 'px':'6px'}">
    <div class="border" style="top: 0px"></div>
    <div class="info">
        <div class="names">
            <div class="name">{{ info.name.charAt(0).toUpperCase() + info.name.slice(1) }}</div>
            <div class="type">
                <PkmnType :type="info.type" />
            </div>
            <div class="class"  :class="info.class">{{ info.class }}</div>
        </div>
        <div class="desc">{{ info.effect }}</div>
        <div class="details">
            <div class="power"><strong>Power:</strong>  {{ info.power }}</div>
            <div class="accure"><strong>Accuracy:</strong> {{ info.accure }}</div>
            <div class="pp"><strong>PP:</strong> {{ info.pp }}</div>
            <div class="prior"><strong>Priority:</strong> {{ info.priority }}</div>
            <div class="target"><strong>Target:</strong> {{ info.target }}</div>
        </div>
    </div>
    <div class="border" style="bottom: 0px"></div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

import PkmnType from './PkmnType.vue';

export default {
    name: 'MoveInfo',
    components: {PkmnType},
    setup() {
        const store = useStore();
        const info = computed(() => store.state.moveInfo);
        const active = computed(() => store.state.popUp);
        const coord = computed(() => store.state.infoCoords);

        return {info, active, coord}
    }
}
</script>

<style scoped>
.names {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name {
    font-weight: 700;
}

.class {
    font-style: italic;
    font-weight: 600;
}

.class.status {
    color: rgb(1, 90, 46);
}

.class.special {
    color: rgb(30, 0, 165);
}

.class.physical {
    color: rgb(122, 24, 0);
}

.desc {
    color: rgb(49, 49, 49);
}
.moveInfo {
    top: 0px;
    left: 6px;
    width: 250px;
    min-height: 100px;
    max-height: 250px;

    background-color: rgb(239, 239, 255);
    padding-top: 12px;
    padding-bottom: 12px;

    position: absolute;
    display: flex;
    justify-content: center;

    z-index: 50;
}

.border {
    width: 100%;
    background-color: rgb(0, 0, 44);
    border: 6px solid rgb(0, 0, 44);
    border-radius: 20px;

    position: absolute;
    left: -6px;
}

.info {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-top: 0px;
    border-bottom: 0px;

    padding: 5px;
}
</style>