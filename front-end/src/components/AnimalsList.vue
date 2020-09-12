<template>
  <div class="animals-list">
    <p>Animals List!</p>
    <ul>
      <li v-for="animal in animals" :key="animal._id">
        <Animal :animal="animal" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
// import { useStore } from "vuex";x";
import Animal from "./Animal.vue";

export default defineComponent({
  name: "AnimalsList",
  components: {
    Animal,
  },
  setup(props, { root }) {
    //need to add check if dispatch is needed or not before dispatching.
    root.$store.dispatch("fetchAnimals");
    //add loader for wait time until dispatch is done.
    //add getter instead of directly accessing state.
    const animals = computed(() => root.$store.state.animals);
    return {
      animals,
    };
  },
});
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 0 auto;
  }
}
</style>
