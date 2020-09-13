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
import Animal from "./Animal.vue";

export default defineComponent({
  name: "AnimalsList",
  components: {
    Animal,
  },
  setup(props, { root }) {
    //need to add check if dispatch is needed or not before dispatching.
    //consider moving dispatch to app vue with check if the store is empty or not.

    //add loader for wait time until dispatch is done.
    //add getter instead of directly accessing state.

    root.$store.dispatch("fetchAnimals");
    const animals = computed(() => root.$store.state.animals);
    return {
      animals,
    };
  },
});
</script>

<style lang="scss" scoped>
.animals-list {
  margin-top: 30px;

  p {
    margin-top: 20px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 15px auto;
    }
  }
}
</style>
