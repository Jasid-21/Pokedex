<template>
    <div class="moves">
        <select 
        @change="setMove($event, 0)" 
        :class="chosenmoves[0] == '###'?'wrong':''">
            <option value="---">--- Select a move ---</option>
            <option v-for="m of moves" :key="m" :value="m.move.name">
                {{ m.move.name }}
            </option>
        </select>
        <br>
        <select 
        @change="setMove($event, 1)" 
        v-if="chosenmoves[0] != ''" 
        :class="chosenmoves[1] == '###'?'wrong':''">
            <option value="---">--- Select a move ---</option>
            <option v-for="m of moves" :key="m" :value="m.move.name">
                {{ m.move.name }}
            </option>
        </select>
        <br>
        <select 
        @change="setMove($event, 2)" 
        v-if="chosenmoves[1] != ''" 
        :class="chosenmoves[2] == '###'?'wrong':''">
            <option value="---">--- Select a move ---</option>
            <option v-for="m of moves" :key="m" :value="m.move.name">
                {{ m.move.name }}
            </option>
        </select>
        <br>
        <select 
        @change="setMove($event, 3)" 
        v-if="chosenmoves[2] != ''" 
        :class="chosenmoves[3] == '###'?'wrong':''">
            <option value="---">--- Select a move ---</option>
            <option v-for="m of moves" :key="m" :value="m.move.name">
                {{ m.move.name }}
            </option>
        </select>
    </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core';

export default {
    name: 'PkmnMoves',
    props: ['moves'],
    setup(props, context) {
        const moves = computed(() => props.moves);
        const chosenmoves = ref(['', '', '', '']);

        const setMove = (e, idx) => {
            const move = e.target.value;
            const find = chosenmoves.value.some(m => m == move);

            if (find) {
                alert("This pokemon alredy knows this movement...");
                chosenmoves.value[idx] = '###';
                return;
            } else {
                chosenmoves.value[idx] = move;
            }
            console.log(chosenmoves.value);

            const ilegal = chosenmoves.value.some((move) => move == "###");
            if (!ilegal) {
                context.emit('saveMoves', chosenmoves);
            }
        }

        return {moves, setMove, chosenmoves}
    }
}
</script>

<style>
.moves {
    padding: 10px;
    padding-left: 0px;

    grid-column: 2/4;
    grid-row: 3/4;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.moves > select {
    width: 200px;
    height: 25px;

    border: 2px solid rgb(83, 83, 83);
    border-radius: 10px;
}

.moves > .wrong {
    background-color: rgb(255, 111, 111);
}
</style>