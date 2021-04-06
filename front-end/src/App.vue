<template>
  <v-app id="app" data-app>
    <MainNavigation />
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
import MainNavigation from "@/components/Navigation/MainNavigation.vue";

export default defineComponent({
  name: "App",
  components: {
    MainNavigation,
    Loader,
  },

  setup(props, { root }) {
    onBeforeMount(async () => {
      try {
        await root.$store.dispatch("initTokenStateAction");
      } catch (error) {
        console.log(error);
      }
    });
  },
});
</script>

//use separate global app scss file and import instead of using it in this
component. //order and make more organized all the scss code here. //scss use
vuetify color map to and then reuse colors in the app.
<style lang="scss">
// convert all px units to rem or em.

#app {
  text-align: center;
  font-family: Verdana, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  background-color: var(--v-eighth-base);
  color: var(--v-tenth-base);
  //margin-top: 60px;

  ul {
    list-style-type: none;
    padding: 0;
  }
  .router-link-exact-active {
    color: var(--v-third-base) !important;
  }

  a {
    color: var(--v-fourth-base) !important;
    text-decoration: none;
  }
}

.view {
  margin: 0 16px;
}

.page-title {
  font-size: 1.3em;
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

.swal-btn {
  background: var(--v-ninth-base) !important;
  color: var(--v-tenth-base) !important;
  flex-grow: 1;
  width: 100%;
  max-width: 160px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 15px;
}

.swal-toast {
  background: var(--v-ninth-base) !important;
  color: var(--v-tenth-base) !important;
}

.swal2-content,
.swal2-title {
  color: var(--v-tenth-base) !important;
}

@media only screen and (min-width: 386px) {
  #app {
    font-size: 1.25em;
  }

  .view {
    margin: 0 30px;
  }

  .logo {
    max-width: 200px;
  }

  .page-title {
    font-size: 1.4em;
  }
}

@media only screen and (min-width: 769px) {
  .view {
    margin: 0 50px;
  }

  .page-title {
    font-size: 1.45em;
  }
}

@media only screen and (min-width: 1025px) {
  .view {
    margin: 0 70px;
  }
}

@media only screen and (min-width: 2001px) {
  .view {
    margin: 0 90px;
  }
}
</style>
