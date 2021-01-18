<template>
  <header class="main-navigation__nav">
    <div class="main-navigation__nav__logo">
      <!--      <img alt="Sanctuary logo" src="@/assets/logo.png" />-->
      <h1>Sanctuary</h1>
    </div>
    <div class="main-navigation__items">
      <router-link to="/">Home</router-link> |
      <router-link to="/animals">Animals</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MainNavigation",
});
</script>

<style lang="scss" scoped>
.main-navigation__nav__logo {
  background-image: url(~@/assets/logo.png);
  background-size: contain;
  width: 100%;
  max-width: 250px;
  height: auto;
  display: block;
  margin: 15px auto;
}

.main-navigation__nav {
  margin-bottom: 20px;
}

@media only screen and (min-width: 386px) {
  .main-navigation__nav__logo {
    max-width: 375px;
  }
}
</style>
