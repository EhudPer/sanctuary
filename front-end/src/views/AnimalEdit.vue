<template>
  <div>
    <h1 class="page-title">Animal Edit</h1>
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
      <v-form ref="myForm" v-model="valid" lazy-validation>
        <v-text-field
          v-model="newAnimalName"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-select
          v-model="newAnimalType"
          :items="items"
          :rules="[(v) => !!v || 'Type is required']"
          label="Type"
          required
        ></v-select>
        <v-btn
          :disabled="!valid"
          color="success"
          class="validate-btn"
          @click="validate"
          width="100%"
          max-width="130"
        >
          Edit
        </v-btn>
        <v-btn
          color="error"
          class="reset-form-btn"
          @click="reset"
          width="100%"
          max-width="130"
        >
          Reset Form
        </v-btn>
        <v-btn
          class="reset-validation-btn"
          color="warning"
          @click="resetValidation"
          width="100%"
          max-width="178"
        >
          Reset Validation
        </v-btn>
      </v-form>
      <v-card-actions>
        <v-btn @click="pushToAddAnimalPage" text color="info accent-4">
          Add Animal
        </v-btn>
        <v-btn @click="moveToAnimalDetails" text color="success accent-4">
          Details
        </v-btn>
        <v-btn @click="deleteAnimalClicked" text color="error accent-4">
          Delete
        </v-btn>
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
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
} from "@vue/composition-api";
import { deleteAnimal } from "@/helper-functions/animal-crud";

export default defineComponent({
  name: "AnimalEdit",
  setup(props, { root }) {
    //check if i can put the code of mount and before mount in some function and only call it in all the component instead duplicate code.
    if (document.readyState !== "complete") {
      root.$store.dispatch("togLoading", { loadingStatus: true });

      const isAnimals = root.$store.getters.getAnimals.length !== 0;
      if (!isAnimals) {
        root.$store.dispatch("fetchAnimals");
      }
    }

    onMounted(() => {
      window.onload = function () {
        root.$store.dispatch("togLoading", { loadingStatus: false });
      };
    });

    const animalId = root.$route.params.animalId;
    const animal = computed(() => root.$store.getters.getAnimalById(animalId));

    //Later try to set that when the edit page is loaded that the values of the controls will not be empty -
    // but with the current animal's details from the db - all the time, even on refresh or loading from url directly.
    const newAnimalName = animal.value ? ref(animal.value.name) : ref("");
    const newAnimalType = animal.value ? ref(animal.value.type) : ref("");

    const myForm = ref(null);
    const valid = ref(true);
    const name = ref("");
    const nameRules = reactive([
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ]);
    const select = ref(null);
    const items = reactive([
      "Cat",
      "Dog",
      "Pig",
      "Cow",
      "Horse",
      "Donkey",
      "Other",
    ]);

    const validate = () => {
      const valid = myForm.value.validate();
      if (valid) {
        updateAnimal();
      }
    };

    const reset = () => {
      myForm.value.reset();
    };

    const resetValidation = () => {
      myForm.value.resetValidation();
    };

    const updateAnimal = async () => {
      root.$store.dispatch("togLoading", { loadingStatus: true });
      const updatedAnimalFields = {
        _id: animalId,
        name: newAnimalName.value ? newAnimalName.value : newAnimalName,
        type: newAnimalType.value ? newAnimalType.value : newAnimalType,
        image_url: animal.value.image_url ? animal.value.image_url : null,
      };

      try {
        await root.$store.dispatch({
          type: "updateAnimal",
          updatedAnimalFields,
        });

        moveToAnimalDetails();
      } catch (error) {
        root.$swal.fire({
          title: "Error: animal not updated!",
          text: error.message.toString(),
          confirmButtonColor: "#D62E1F",
          icon: "error",
          width: 600,
          padding: "3em",
          background: "#fff",
        });
      }

      root.$store.dispatch("togLoading", { loadingStatus: false });
    };

    function pushToAddAnimalPage() {
      root.$router.push({
        path: "/animals/add",
      });
    }
    //use it from a global function later cause it's in more than one component.
    const moveToAnimalDetails = () => {
      root.$router.push({
        name: "AnimalDetails",
        params: { animalId },
      });
    };

    const deleteAnimalClicked = () => {
      deleteAnimal(root, animalId);
    };

    return {
      animal,
      newAnimalName,
      newAnimalType,
      myForm,
      valid,
      name,
      nameRules,
      select,
      items,
      validate,
      reset,
      resetValidation,
      pushToAddAnimalPage,
      moveToAnimalDetails,
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
}

.v-card__actions {
  flex-direction: column;
}

form {
  padding: 0 8px;

  .validate-btn,
  .reset-form-btn,
  .reset-validation-btn {
    margin-top: 10px;
  }
}

@media only screen and (min-width: 296px) {
  .validate-btn {
    margin-right: 3px;
  }

  .reset-form-btn {
    margin-left: 3px;
  }
}

@media only screen and (min-width: 395px) {
  .v-card__actions {
    flex-direction: row;
    //flex-wrap: wrap;
  }
}

@media only screen and (min-width: 480px) {
  .reset-form-btn {
    margin-right: 3px;
  }

  .reset-validation-btn {
    margin-left: 3px;
  }
}
</style>
