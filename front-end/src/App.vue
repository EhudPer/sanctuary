<template>
  <v-app
    id="app"
    :style="{ background: $vuetify.theme.themes.light.background }"
    data-app
  >
    <div id="nav">
      <img alt="Sanctuary logo" src="./assets/logo.png" class="logo" />
      <router-link to="/">Home</router-link> |
      <router-link to="/animals">Animals</router-link>
    </div>
    <div class="view">
      <router-view />
    </div>
    <div class="loader">
      <Loader></Loader>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "@vue/composition-api";
import Loader from "./components/Loader.vue";

export default defineComponent({
  name: "App",
  components: {
    Loader,
  },
  setup(props, { root }) {
    onBeforeMount(async () => {
      if (root.$store.state.animals.length === 0) {
        await root.$store.dispatch("fetchAnimals");
        //add error handling in server and client.
        //add loading in all app.
      }
    });
  },
});
</script>

//use separate global app scss file and import instead of using it in this
component. //order and make more organized all the scss code here. //scss use
vuetify color map to and then reuse colors in the app.
<style lang="scss">
//$bg-color: #eff2f5;
$color: #050505;

#app {
  text-align: center;
  //margin-top: 60px;

  body {
    //background-color: $bg-color;
    color: $color;
    font-size: 1.2em;
    //font-family: cursive;
    font-family: Verdana, Avenir, Helvetica, Arial, sans-serif;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .router-link-exact-active {
    color: brown;
  }

  a {
    color: black;
    text-decoration: none;
  }
}

.view {
  margin: 0 10px;
}

.page-title {
  font-size: 1.2em;
}

@media only screen and (min-width: 386px) {
  body {
    font-size: 1.5em;
  }

  .logo {
    max-width: 200px;
  }

  .page-title {
    font-size: 1.5em;
  }
}

//temp setting here until nav component is ready.
.logo {
  width: 100%;
  max-width: 150px;
  height: auto;
  display: block;
  margin: 15px auto;
}

#nav {
  margin-bottom: 20px;
}
</style>
