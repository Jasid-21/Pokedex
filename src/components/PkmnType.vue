<template>
  <div class="type" :class="type.type.name">{{ type.type.name.toUpperCase() }}</div>
</template>

<script>
export default {
    name: 'PkmnType',
    props: ['type']
}
</script>

<style scoped>
.type {
    width: 80px;
    height: 25px;
    border-radius: 20px;

    font-size: 15px;
    font-weight: bolder;
    color: white;
    -webkit-text-stroke: 1px black;

    display: flex;
    justify-content: center;
    align-items: center;
}

.type.normal {
    background-color: rgb(156, 141, 135);
}

.type.fire {
    background-color: rgb(236, 82, 21);
}

.type.grass {
    background-color: green;
}

.type.poison {
    background-color: purple;
}

.type.flying {
    background-color: rgb(114, 177, 236);
}

.type.water {
    background-color: rgb(33, 51, 214);
}

.type.bug {
    background-color: rgb(63, 158, 18);
}

.type.electric {
    font-size: 13px;
    background-color: rgb(216, 216, 9);
}

.type.ground {
    background-color: rgb(202, 145, 70);
}

.type.fairy {
    background-color: rgb(252, 166, 180);
}

.type.fighting {
    background-color: rgb(136, 49, 23);
}

.type.psychic {
    background-color: rgb(194, 41, 66);
}

.type.rock {
    background-color: rgb(104, 65, 15);
}

.type.steel {
    background-color: silver;
}

.type.ice {
    background-color: lightblue;
}

.type.ghost {
    background-color: rgb(45, 13, 97);
}

.type.dragon {
    background-color: rgb(67, 36, 155);
}

.type.dark {
    background-color: rgb(37, 23, 18);
}

</style>