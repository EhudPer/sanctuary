<template>
    <div class="home-page">
        <img alt="Vue logo" src="../assets/logo.png" class="logo" />
        <h1 class="page-title">{{ msg }}</h1>
        <AnimalsList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AnimalsList from './AnimalsList.vue';

export default defineComponent({
  name: 'HomePage',
  props: {
    msg: String,
  },
  components: {
    AnimalsList
  }
});

</script>

<style lang="scss" scoped>
.logo {
    width: 100%;
    max-width: 150px;
    height: auto;
}

.page-title {
    font-size: 1.2em;
}

@media only screen and (min-width: 386px) {
    .logo {
        max-width: 200px;
    }

    .page-title {
        font-size: 1.5em;
    }
}
</style>
