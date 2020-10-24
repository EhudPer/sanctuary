<template>
  <div>
    <h1 class="page-title">Animal Details</h1>
    <v-card v-if="animal" max-width="1032" class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ animal.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-img
        :src="
          animal.image_url
            ? animal.image_url
            : require(`@/assets/${animal.type.toLowerCase()}.jpg`)
        "
        alt="Avatar"
        max-height="500"
      ></v-img>
      <v-card-text>
        {{ animal.type }}
      </v-card-text>

      <v-card-text>
        {{ animal.type }}
      </v-card-text>

      <v-card-text>
        {{ animal.type }}
      </v-card-text>

      <v-card-text>
        {{ animal.type }}
      </v-card-text>

      <v-card-text>
        {{ animal.type }}
      </v-card-text>

      <v-card-actions>
        <v-btn @click="pushToAddAnimalPage" text color="info accent-4">
          Add Animal
        </v-btn>
        <v-btn @click="moveToAnimalEdit" text color="warning accent-4">
          Edit
        </v-btn>
        <v-btn text color="error accent-4"> Delete </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  computed,
} from "@vue/composition-api";

export default defineComponent({
  name: "AnimalDetails",
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

    const animalId = root.$route.params.animalId;
    const animal = computed(() => root.$store.getters.getAnimalById(animalId));

    function pushToAddAnimalPage() {
      root.$router.push({
        path: "/animals/add",
      });
    }
    //check later to do this a global function to use here and in edit page and where it called also..
    function moveToAnimalEdit() {
      root.$router.push({
        name: "AnimalEdit",
        params: { animalId },
      });
    }
    return {
      animal,
      pushToAddAnimalPage,
      moveToAnimalEdit,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
  margin: 15px auto;
  overflow: scroll;
}

.v-card__actions {
  flex-direction: column;
}

@media only screen and (min-width: 375px) {
  .v-card__actions {
    flex-direction: row;
    //flex-wrap: wrap;
  }
}
</style>
