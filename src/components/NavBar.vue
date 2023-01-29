<template>
  <nav>
    <div class="logo">
      <div class="pokeball">
        <div class="button"></div>
      </div>

      <h1>Pokedex App</h1>
    </div>
  </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
nav {
    width: calc(100% - 80px);
    height: 80px;

    margin-bottom: 10px;
    padding: 0px 40px;
    background-color: rgb(216, 72, 72);

    display: flex;
    align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.pokeball {
  width: 50px;
  height: 50px;
  background: white;
  border: 2px solid black;
  border-radius: 50%;

  box-shadow: 2px 2px 5px rgb(46, 0, 0);

  position: relative;
  overflow: hidden;

  transition-property: transform;
  transition-duration: 200ms;
}

.pokeball:hover {
  transform: rotate(-360deg);
}

.pokeball::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 50%;
  background: red;
}

.pokeball::after {
  content: "";
  position: absolute;
  top: 25px;
  width: 100%;
  height: 50%;

  background: white;
  border-top: 2px solid black;
}

.button {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 2px solid black;
  border-radius: 50%;

  top: 20px;
  left: 20px;
  z-index: 10;

  background: rgb(235, 235, 235);
}

h1 {
  margin: 0px;
  margin-left: 20px;
  font-size: 40px;

  color: white;
  text-shadow: 2px 2px 5px rgb(46, 0, 0);
}
</style>