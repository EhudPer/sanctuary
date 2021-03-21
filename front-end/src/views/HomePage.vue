<template>
  <div class="home-page">
    <!--    <h1 class="page-title">Welcome to Sanctuary</h1>-->
    <p>
      <b
        >This is an alpha POC app for helping rescued animals sanctuary farms</b
      >
    </p>
    <p>Author: Ehud Perlman</p>
    <v-img src="../assets/profile.jpg" class="profile" max-height="150"></v-img>
    <p>Email: ehudperlman83@gmail.com</p>
    <p>I am a full stack web developer</p>
    <p>
      Project main technologies: Javascript, Nodejs, Express, Graphql, Mongodb,
      Mongoose, Apollo, Vue, Vuex, Scss
    </p>
    <img src="../assets/home.jpeg" alt="Home" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
} from "@vue/composition-api";

export default defineComponent({
  name: "HomePage",
  setup(props, { root }) {
    //check if i can put the code of mount and before mount in some function and only call it in all the component instead duplicate code.
    onBeforeMount(() => {
      if (document.readyState !== "complete") {
        root.$store.dispatch("togLoading", { loadingStatus: true });
      }
    });

    onMounted(() => {
      window.onload = function () {
        root.$store.dispatch("togLoading", { loadingStatus: false });
      };
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  //max-width: 650px;
  max-height: 230px;
  margin: 15px 0;
  object-fit: cover;
}

.profile {
  //background-image: url(~@/assets/logo.png);
  //background-size: contain;
  //width: 100%;
  max-width: 150px;
  margin: 15px auto;
  //height: auto;
  //display: block;
  //margin: 15px auto;
  //font-size: 2rem;
}

p {
  margin-bottom: 10px;
}

@media only screen and (min-width: 386px) {
  img {
    max-height: 280px;
  }
}
</style>
