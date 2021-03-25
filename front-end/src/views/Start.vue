<template>
  <div class="btns-container">
    <!--    <h1 class="page-title">Animals</h1>-->
    <v-btn
      @click="pushToAddAnimalPage"
      class="btn-add mt-3"
      x-large
      color="info accent-4"
    >
      Add Animal
    </v-btn>
    <v-btn
      v-if="hasAnimals"
      @click="pushToAnimalsList"
      class="btn-list mt-3"
      x-large
      color="info accent-4"
    >
      View Animals
    </v-btn>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
} from "@vue/composition-api";

export default defineComponent({
  name: "Start",
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

    // const animals = computed(() => root.$store.state.animals);
    //check later to do this a global function to use here and in edit page and where it called also..
    const hasAnimals = computed(() => root.$store.getters.getAnimals.length);

    function pushToAddAnimalPage() {
      root.$router.push({
        path: "/animals/add",
      });
    }
    function pushToAnimalsList() {
      root.$router.push({
        path: "/animals",
      });
    }
    return {
      hasAnimals,
      pushToAddAnimalPage,
      pushToAnimalsList,
    };
  },
});
</script>

<style lang="scss" scoped>
.btns-container {
  display: flex;
  flex-direction: column;
  //width: 100%;
  //max-width: 300px;
  //justify-content: center;
  //margin: 0 auto;
  align-items: center;
  button {
    //margin: 0 auto;
    //max-width: 300px;
  }
}

@media only screen and (min-width: 960px) {
  .btns-container {
    flex-direction: row;
    //width: 100%;
    justify-content: center;

    .btn-add {
      margin-right: 15px;
    }

    .btn-list {
      margin-left: 15px;
    }
  }
}
//.animals-list {
//  ul {
//    display: flex;
//    flex-wrap: wrap;
//
//    li {
//      margin: 15px auto;
//    }
//  }
//}
//
//@media only screen and (max-width: 385px) {
//  li {
//    width: 100%;
//  }
//}
</style>
