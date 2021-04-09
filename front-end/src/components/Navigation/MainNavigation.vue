<template>
  <header class="main-navigation__nav">
    <v-app-bar color="sixth" dark fixed app>
      <v-btn ref="backBtn" class="back-btn hide tenth" @click="backBtnHandler">
        Back
      </v-btn>
      <div class="logo-and-dots-container">
        <v-toolbar-title
          ><div class="main-navigation__nav__logo">
            Sanctuary
          </div></v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
          <v-btn v-if="$route.name !== 'Home'" text to="/">
            <span class="mr-2">
              <router-link to="/">About</router-link>
            </span>
          </v-btn>
          <v-btn
            class="animals-list-btn"
            v-if="token && hasAnimals && $route.name !== 'AnimalsList'"
            text
            to="/animals"
          >
            <span class="mr-2">
              <router-link to="/animals">View Animals</router-link>
            </span>
          </v-btn>
          <v-btn
            v-if="token && $route.name !== 'AddAnimal'"
            text
            to="/animals/add"
          >
            <span class="mr-2">
              <router-link to="/animals/add">Add Animal</router-link>
            </span>
          </v-btn>
          <v-btn v-if="token" @click="logoutHandler" text to="/auth">
            <span class="mr-2">
              <router-link to="/auth">Log out</router-link>
            </span>
          </v-btn>
          <v-btn v-if="!token && $route.name !== 'Auth'" text to="/auth">
            <span class="mr-2">
              <router-link to="/auth">Sign in</router-link>
            </span>
          </v-btn>
        </v-toolbar-items>

        <v-menu v-if="!$vuetify.breakpoint.mdAndUp">
          <template v-slot:activator="{ on }">
            <!--          <div class="btns-container">-->
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <!--          </div>-->
          </template>

          <v-list>
            <v-list-item v-if="$route.name !== 'Home'" to="/">
              <v-list-item-title>
                <router-link to="/">About</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="token && hasAnimals && $route.name !== 'AnimalsList'"
              to="/animals"
            >
              <v-list-item-title
                ><router-link to="/animals"
                  >View Animals</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item
              v-if="token && $route.name !== 'AddAnimal'"
              to="/animals/add"
            >
              <v-list-item-title
                ><router-link to="/animals/add"
                  >Add Animal</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item v-if="!token && $route.name !== 'Auth'" to="/auth">
              <v-list-item-title
                ><router-link to="/auth"
                  >Sign in</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item v-if="token" @click="logoutHandler" to="/auth">
              <v-list-item-title
                ><router-link to="/auth">Log out</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import { logout } from "../../helper-functions/auth";

export default defineComponent({
  name: "MainNavigation",
  setup(props, { root }) {
    const backBtn = ref();

    const token = computed(() => root.$store.getters.getToken);
    const hasAnimals = computed(() => root.$store.getters.getAnimals.length);

    watch(
      () => root.$route,
      (newParams) => {
        if (!backBtn.value) {
          return;
        }
        const elBackBtn = backBtn.value.$el;

        if (newParams.name === "Home") {
          elBackBtn.classList.add("hide");
        } else {
          elBackBtn.classList.remove("hide");
        }
      }
    );

    const logoutHandler = () => {
      logout(root);
    };
    const backBtnHandler = () => {
      if (
        root.$route.name === "Auth" ||
        root.$route.name === "Start" ||
        root.$route.name === "AnimalsList"
      ) {
        root.$router.push({
          path: "/",
        });
      } else if (
        root.$route.name === "AddAnimal" ||
        root.$route.name === "AnimalEdit" ||
        root.$route.name === "AnimalDetails"
      ) {
        root.$router.push({
          path: "/animals",
        });
      } else {
        root.$router.go(-1);
      }
    };
    return {
      root,
      backBtn,
      token,
      hasAnimals,
      logoutHandler,
      backBtnHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
#app {
  .hide {
    visibility: hidden;
  }

  .spacer {
    display: none;
  }

  .v-toolbar__items {
    a {
      color: var(--v-thirteenth-base) !important;
      //background-color: transparent;
      //&.v-btn--active {
      //  color: var(--v-secondary-base) !important;
      //}
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
  margin: auto;

  .main-navigation__nav__logo {
    width: 100%;
    height: auto;
    display: block;
    margin: 15px auto;
    font-size: 1.65rem;
  }
}

.main-navigation__items {
  ul {
    display: flex;
    justify-content: center;
  }
}

.logo-and-dots-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
//.btns-container {
//  width: 100%;
//  display: flex;

@media only screen and (min-width: 360px) {
  #app {
    .v-toolbar__title {
      .main-navigation__nav__logo {
        max-width: 375px;
      }
    }
  }
}

@media only screen and (min-width: 385px) {
  #app {
    .v-toolbar__title {
      .main-navigation__nav__logo {
        max-width: 375px;
        font-size: 2rem;
      }
    }
  }
}

@media only screen and (min-width: 960px) {
  #app {
    .v-toolbar__title {
      margin: initial;
    }

    .spacer {
      display: initial;
    }

    .back-btn {
      display: none;
    }
  }
}
</style>
