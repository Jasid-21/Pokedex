<template>
    <div class="ability" :class="ability == chosen?'chosen':''">
        {{ ability.charAt(0).toUpperCase() + ability.slice(1) }}
    </div>
</template>

<script>
export default {
    name: 'Ability',
    props: ['ability', 'chosen']
}
</script>

<style>
.ability {
    height: 20px;
    background-color: rgb(161, 161, 161);
    border: 1px solid rgb(95, 95, 95);

    border-radius: 20px;
    padding: 6px 5px;
}

.ability:hover {
    background-color: rgb(131, 131, 131);
    cursor: pointer;
}

.ability.chosen {
    background-color: rgb(131, 131, 131);
    font-weight: 700;
}
</style>
