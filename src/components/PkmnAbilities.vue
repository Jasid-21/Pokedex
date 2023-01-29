<template>
    <div class="abilities">
        <div class="names">
            <Ability 
            :ability="h.name" 
            v-for="(h, idx) of abls" 
            :key="idx" 
            @click="setChosen(h.name)" 
            :chosen="chosen"/>
        </div>
        <div class="description"> {{ desc }} </div>
    </div>
</template>

<script>
import { computed, ref, watch } from '@vue/runtime-core'
import Ability from './Ability.vue';

export default {
    name: 'PkmnAbilities',
    components: {
        Ability
    },
    props: ['abilities'],
    setup(props) {
        const addDescriptions = async (abls) => {
            const descriptions = [];
            for (var a of abls) {
                const url = a.ability.url;

                try {
                    const resp = await fetch(url, {method: 'GET'});
                    if (resp.status != 200) {
                        console.log("Fetch status: ", resp.status);
                        return;
                    }

                    const json = await resp.json();
                    descriptions.push(json);
                } catch(err) {
                    console.error(err);
                    return;
                }
            }

            return descriptions;
        }

        const setChosen = (name) => {
            chosen.value = name;

            var found = false;
            for (var abl of abls.value) {
                if (abl.name == name) {
                    var found2 = false;
                    for (var lan of abl.effect_entries) {
                        if (lan.language.name == 'en') {
                            desc.value = lan.effect;
                            found2 = true;
                            break;
                        }
                    }

                    if (!found2) {
                        desc.value = "Ability description not found...";
                    }

                    found = true;
                    break;
                }
            }

            if (!found) {
                desc.value = "Ability not found...";
            }
        }

        const chosen = ref('');
        const desc = ref('');
        const abls = ref([]);
        const names = computed(() => props.abilities);
        addDescriptions(names.value).then(resp => abls.value = resp);

        watch(names, (names) => {
            addDescriptions(names).then(resp => abls.value = resp);
            desc.value = '';
            chosen.value = '';
        })

        return {abls, chosen, setChosen, desc}
    }
}
</script>

<style scoped>
.abilities {
    padding: 5px;

    grid-column: 2/4;
    grid-row: 2/4;
}

.names {
    width: 100%;
    height: min-content;

    margin-bottom: 5px;

    display: flex;
    justify-content: space-around;
}

.description {
    width: 100%;
    height: calc(100% - 45px);

    background-color: rgb(255, 228, 228);
    border-radius: 10px;
    padding: 5px;

    font-style: italic;
    color: rgb(56, 56, 56);

    overflow: auto;
}
</style>
