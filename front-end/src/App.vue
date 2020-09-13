<template>
  <div id="app">
    <HomePage msg="Welcome to Your Sanctuary App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HomePage from "./components/HomePage.vue";

export default defineComponent({
  name: "App",
  components: {
    HomePage,
  },
});
</script>

<style lang="scss">
$bg-color: #f1f2f5;
$color: #050505;

body {
  background-color: $bg-color;
  color: $color;
  font-size: 1.2em;
  //font-family: cursive;
  font-family: Verdana, Avenir, Helvetica, Arial, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

@media only screen and (min-width: 386px) {
  body {
    font-size: 1.5em;
  }
}
</style>
