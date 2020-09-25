<template>
  <div class="animals-list">
    <h1 class="page-title">Animals</h1>
    <ul>
      <li v-for="animal in animals" :key="animal._id">
        <Animal :animal="animal" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onBeforeMount,
  onMounted,
} from "@vue/composition-api";
import Animal from "../components/Animal.vue";

export default defineComponent({
  name: "AnimalsList",
  components: {
    Animal,
  },
  setup(props, { root }) {
    //add getter instead of directly accessing state.

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

    const animals = computed(() => root.$store.state.animals);
    return {
      animals,
    };
  },
});
</script>

<style lang="scss" scoped>
.animals-list {
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 15px auto;
    }
  }
}

@media only screen and (max-width: 385px) {
  li {
    width: 100%;
  }
}
</style>
