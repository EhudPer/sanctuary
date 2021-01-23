<template>
  <div class="home-page">
    <h1 class="page-title">Welcome to Sanctuary</h1>
    <img src="../assets/home.jpeg" alt="Home" />
    <p>
      Mange your sanctuary and keep track of all your animals related
      information
    </p>
    <p>
      Mange your sanctuary and keep track of all your animals related
      information place holder.
    </p>
    <p>
      Mange your sanctuary and keep track of all your animals related
      information place holder.
    </p>
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

p {
  margin-bottom: 10px;
}

@media only screen and (min-width: 386px) {
  img {
    max-height: 280px;
  }
}
</style>
