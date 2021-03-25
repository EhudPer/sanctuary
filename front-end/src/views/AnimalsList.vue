<template>
  <div class="animals-list">
    <!--    <h1 class="page-title">Animals</h1>-->
    <!--    <v-btn-->
    <!--      @click="pushToAddAnimalPage"-->
    <!--      class="mt-3"-->
    <!--      x-large-->
    <!--      color="info accent-4"-->
    <!--    >-->
    <!--      Add Animal-->
    <!--    </v-btn>-->
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
    onBeforeMount(async () => {
      if (document.readyState !== "complete") {
        root.$store.dispatch("togLoading", { loadingStatus: true });
      }
      if (root.$store.state.animals.length === 0) {
        try {
          await root.$store.dispatch("fetchAnimals");
        } catch (error) {
          root.$swal.fire({
            title: "Error: animals not fetched!",
            text: error.message.toString(),
            confirmButtonColor: "#D62E1F",
            icon: "error",
            width: 600,
            padding: "3em",
            background: "#fff",
          });
        }
      }
    });

    onMounted(() => {
      window.onload = function () {
        root.$store.dispatch("togLoading", { loadingStatus: false });
      };
    });

    const animals = computed(() => root.$store.state.animals);
    //check later to do this a global function to use here and in edit page and where it called also..
    // function pushToAddAnimalPage() {
    //   root.$router.push({
    //     path: "/animals/add",
    //   });
    // }
    return {
      animals,
      /*pushToAddAnimalPage,*/
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
