<template>
  <div>
    <v-card v-if="animal" max-width="1032" class="mx-auto">
      <v-list-item>
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

      <v-card-text v-if="animal.medicineType">
        Treatment: {{ animal.medicineType }}
        <span v-if="animal.dosage && animal.frequency && animal.timeUnit">
          {{ animal.dosage }} units every {{ animal.frequency }}
          {{ animal.timeUnit }}<span v-if="animal.frequency > 1">s</span></span
        >
      </v-card-text>

      <v-card-actions>
        <v-btn @click="moveToAnimalEdit"> Edit </v-btn>
        <v-btn @click="deleteAnimalClicked"> Delete </v-btn>
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
import { deleteAnimal } from "@/helper-functions/animal-crud";

export default defineComponent({
  name: "AnimalDetails",
  setup(props, { root }) {
    //check if i can put the code of mount and before mount in some function and only call it in all the component instead duplicate code.
    onBeforeMount(async () => {
      if (document.readyState !== "complete") {
        root.$store.dispatch("togLoading", { loadingStatus: true });

        // const isAnimals = root.$store.getters.getAnimals.length !== 0;
        // if (!isAnimals) {
        //   root.$store.dispatch("fetchAnimals");
        // }
      }

      const isAnimals = root.$store.getters.getAnimals.length !== 0;
      if (!isAnimals) {
        try {
          await root.$store.dispatch("fetchAnimals");
        } catch (error) {
          root.$swal.fire({
            title: "Error: animal not fetched!",
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
    const deleteAnimalClicked = () => {
      deleteAnimal(root, animalId);
    };
    return {
      animal,
      pushToAddAnimalPage,
      moveToAnimalEdit,
      deleteAnimalClicked,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
  margin: 15px auto;
  overflow: scroll;
  background-color: var(--v-fourth-base) !important;
  color: var(--v-third-base) !important;
}

.v-card__text {
  font-size: 1.2rem;
}

.v-card__text,
.v-list-item__title {
  color: var(--v-thirteenth-base) !important;
}

.v-btn {
  background: var(--v-ninth-base) !important;
  color: var(--v-tenth-base) !important;
  flex-grow: 1;
  margin-bottom: 10px;
}
</style>
