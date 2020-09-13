<template>
  <div class="home-page">
    <h1 class="page-title">Welcome to Sanctuary</h1>
    <img src="../assets/home.jpeg" alt="Home" />
    <p>
      Mange your sanctuary and keep track of all your animals related
      information
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "HomePage",
});
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 650px;
  margin: 15px 0;
}

p {
  margin-bottom: 10px;
}
</style>
