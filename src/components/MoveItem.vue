<template>
    <div @click="mouse" class="move_item">
        {{ move_info.name.charAt(0).toUpperCase() + move_info.name.slice(1) }}
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from '@vue/runtime-core'

export default {
    name: 'MoveItem',
    props: ['move'],
    setup(props) {
        const mouse = (e) => {
            e.stopPropagation();
            const coords = [e.clientX, e.clientY];
            fetch(move_info.value.url, {method: 'GET'})
            .then(resp => resp.json())
            .then(data => {
                const info = {
                    name: data.name,
                    effect: data.effect_entries[0].short_effect,
                    chance: data.effect_chance,
                    type: {
                        type: {
                            name: data.type.name
                        }
                    },
                    class: data.damage_class.name,
                    accure: data.accuracy,
                    power: data.power,
                    pp: data.pp,
                    priority: data.priority,
                    target: data.target.name
                }

                store.commit('setPopUp', {info, coords, activate: true});
            });
        }

        const store = useStore();
        const move_info = computed(() => props.move);

        return {move_info, mouse};
    }
}
</script>

<style scoped>
.move_item {
    margin-bottom: 5px;
    border-bottom: 1px solid rgb(158, 158, 158);
}

.move_item:hover {
    font-weight: 700;
    cursor: pointer;
}
</style>