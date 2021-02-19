<template>
  <header class="main-navigation__nav">
    <v-app-bar color="brown" dark fixed app>
      <v-toolbar-title
        ><div class="main-navigation__nav__logo">
          Sanctuary
        </div></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn text to="/">
          <span class="mr-2">
            <router-link to="/">Home</router-link>
          </span>
        </v-btn>
        <v-btn v-if="token" text to="/animals">
          <span class="mr-2">
            <router-link to="/animals">Animals</router-link>
          </span>
        </v-btn>
        <v-btn v-if="token" @click="logoutHandler" text to="/auth">
          <span class="mr-2">
            <router-link to="/auth">Log out</router-link>
          </span>
        </v-btn>
        <v-btn v-if="!token" text to="/auth">
          <span class="mr-2">
            <router-link to="/auth">Auth</router-link>
          </span>
        </v-btn>
      </v-toolbar-items>

      <v-menu v-if="!$vuetify.breakpoint.mdAndUp">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/">
            <v-list-item-title>
              <router-link to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="token" to="/animals">
            <v-list-item-title
              ><router-link to="/animals"
                >Animals</router-link
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="!token" to="/auth">
            <v-list-item-title
              ><router-link to="/auth">Auth</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-if="token" @click="logoutHandler" to="/auth">
            <v-list-item-title
              ><router-link to="/auth">Log out</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import { logout } from "../../helper-functions/auth";

export default defineComponent({
  name: "MainNavigation",
  setup(props, { root }) {
    const token = computed(() => root.$store.getters.getToken);
    const logoutHandler = () => {
      logout(root);
    };
    return { token, logoutHandler };
  },
});
</script>

<style lang="scss" scoped>
#app {
  .v-toolbar__items {
    a {
      color: white;
      &.v-btn--active {
        color: darkgrey;
      }
    }
  }

  .main-navigation__nav {
    margin-bottom: 20px;
    margin-top: 50px;
  }
}

.v-toolbar__title {
  font-size: 2rem;
  width: 100%;
  max-width: 250px;

  .main-navigation__nav__logo {
    background-image: url(~@/assets/logo.png);
    background-size: contain;
    width: 100%;
    max-width: 250px;
    height: auto;
    display: block;
    margin: 15px auto;
    font-size: 2rem;
  }
}

.main-navigation__items {
  ul {
    display: flex;
    justify-content: center;
  }
}

@media only screen and (min-width: 386px) {
  #app {
    .v-toolbar__title {
      .main-navigation__nav__logo {
        max-width: 375px;
      }
    }
  }
}
</style>
