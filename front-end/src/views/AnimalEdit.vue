<template>
  <div>
    <v-card v-if="animal" max-width="1032" class="mx-auto">
      <v-list-item> </v-list-item>

      <v-img
        v-if="newAnimalType"
        @click="moveToAnimalDetails"
        :src="require(`@/assets/${newAnimalType.toLowerCase()}.jpg`)"
        :style="'cursor: pointer'"
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
          :rules="[(v) => !!v || 'Category is required']"
          label="Category"
          required
        ></v-select>

        <v-select
          v-model="newAnimalMedicineType"
          :items="medicineTypeItems"
          label="Medicine Type"
          clearable
        ></v-select>

        <v-text-field
          v-model="newAnimalDosage"
          :rules="[
            (v) =>
              v >= 1 ||
              v === '' ||
              'Dosage must be a NUMBER that is 1 or greater',
          ]"
          label="Dosage"
          type="number"
        ></v-text-field>

        <v-text-field
          v-model="newAnimalFrequency"
          :rules="[
            (v) =>
              (v >= 1 && Number.isInteger(+v)) ||
              v === '' ||
              'Frequency must be an integer NUMBER that is 1 or greater',
          ]"
          label="Frequency"
          type="number"
        ></v-text-field>

        <v-select
          v-model="newAnimalTimeUnit"
          :items="timeUnitItems"
          label="Time Unit"
          clearable
        ></v-select>

        <div class="btns-container">
          <v-btn
            v-if="valid && newAnimalName !== '' && newAnimalType !== ''"
            class="validate-btn"
            @click="validate"
          >
            Save
          </v-btn>
          <v-btn @click="deleteAnimalClicked"> Delete </v-btn>
        </div>
        <div class="cancel-btn-container">
          <v-btn @click="cancelHandler"> Cancel </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
// @ts-nocheck

import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
} from "@vue/composition-api";
import { deleteAnimal } from "@/helper-functions/animal-crud";

export default defineComponent({
  name: "AnimalEdit",
  setup(props, { root }) {
    //check if i can put the code of mount and before mount in some function and only call it in all the component instead duplicate code.

    onBeforeMount(async () => {
      if (document.readyState !== "complete") {
        root.$store.dispatch("togLoading", { loadingStatus: true });
      }
      // try {
      // await root.$store.dispatch("fetchAnimals");
      const isAnimals = root.$store.getters.getAnimals.length !== 0;
      if (!isAnimals) {
        try {
          await root.$store.dispatch("fetchAnimals");
        } catch (error) {
          root.$swal.fire({
            title: "Error: animal not fetched!",
            text: error.message.toString(),
            // confirmButtonColor: "#D62E1F",
            icon: "error",
            width: 600,
            padding: "3em",
            // background: "#fff",
            buttonsStyling: false,
            customClass: {
              confirmButton:
                "swal-btn v-btn v-btn--contained theme--light v-size--default",
            },
          });
        }
      }
      // if (document.readyState !== "complete") {
      //   root.$store.dispatch("togLoading", { loadingStatus: true });
      // }
      // const isAnimals = root.$store.getters.getAnimals.length !== 0;
      // if (!isAnimals) {
      // await root.$store.dispatch("fetchAnimals");
      // }
      // }
      // } catch (error) {
      //   console.log(error);
      // }
    });

    onMounted(() => {
      window.onload = async () => {
        root.$store.dispatch("togLoading", { loadingStatus: false });
      };
    });

    const animalId = root.$route.params.animalId;
    const animal = computed(() => root.$store.getters.getAnimalById(animalId));

    if (!animal.value) {
      console.log("");
    }

    //Later try to set that when the edit page is loaded that the values of the controls will not be empty -
    // but with the current animal's details from the db - all the time, even on refresh or loading from url directly.

    const newAnimalName = animal.value ? ref(animal.value.name) : ref("");
    const newAnimalType = animal.value ? ref(animal.value.type) : ref("");
    const newAnimalMedicineType =
      animal.value && animal.value.medicineType
        ? ref(animal.value.medicineType)
        : ref("");
    const newAnimalDosage =
      animal.value && animal.value.dosage ? ref(animal.value.dosage) : ref("");
    const newAnimalFrequency =
      animal.value && animal.value.frequency
        ? ref(animal.value.frequency)
        : ref("");
    const newAnimalTimeUnit =
      animal.value && animal.value.timeUnit
        ? ref(animal.value.timeUnit)
        : ref("");

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

    const medicineTypeItems = reactive([
      "Convenia",
      "Superflex",
      "Tsistophan",
      "Cinolux",
      "Doxilin",
      "Activile",
      "Other",
    ]);

    const timeUnitItems = reactive(["Day", "Week", "Month", "Year"]);

    const validate = () => {
      const valid = myForm.value.validate();
      if (valid) {
        updateAnimal();
      }
    };

    const cancelHandler = () => {
      moveToAnimalsList();
    };

    const updateAnimal = async () => {
      root.$store.dispatch("togLoading", { loadingStatus: true });
      const updatedAnimalFields = {
        _id: animalId,
        name: newAnimalName.value ? newAnimalName.value : newAnimalName,
        type: newAnimalType.value ? newAnimalType.value : newAnimalType,
        medicineType: newAnimalMedicineType.value
          ? newAnimalMedicineType.value
          : "",
        dosage:
          newAnimalDosage.value &&
          newAnimalDosage.value !== 0 &&
          newAnimalDosage.value !== ""
            ? +newAnimalDosage.value
            : 0,
        frequency:
          newAnimalFrequency.value &&
          newAnimalFrequency.value !== 0 &&
          newAnimalFrequency.value !== ""
            ? +newAnimalFrequency.value
            : 0,
        timeUnit: newAnimalTimeUnit.value ? newAnimalTimeUnit.value : "",
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
          // confirmButtonColor: "#D62E1F",
          icon: "error",
          width: 600,
          padding: "3em",
          // background: "#fff",
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "swal-btn v-btn v-btn--contained theme--light v-size--default",
          },
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

    const moveToAnimalsList = () => {
      root.$router.push({
        name: "AnimalsList",
      });
    };

    const deleteAnimalClicked = () => {
      deleteAnimal(root, animalId);
    };

    return {
      animal,
      newAnimalName,
      newAnimalType,
      newAnimalMedicineType,
      newAnimalTimeUnit,
      newAnimalDosage,
      newAnimalFrequency,
      myForm,
      valid,
      name,
      nameRules,
      select,
      items,
      medicineTypeItems,
      timeUnitItems,
      validate,
      cancelHandler,
      pushToAddAnimalPage,
      moveToAnimalDetails,
      moveToAnimalsList,
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

  background-color: var(--v-thirteenth-base) !important;
  color: var(--v-third-base) !important;
}

form {
  padding: 0 8px;

  .btns-container {
    display: flex;
  }
}

.cancel-btn-container {
  display: flex;

  .v-btn {
    flex-grow: 1;
  }
}

.v-card__text,
.v-list-item__title {
  color: var(--v-tenth-base) !important;
}

.v-btn {
  background: var(--v-ninth-base) !important;
  color: var(--v-tenth-base) !important;
  flex-grow: 1;
  margin-bottom: 20px;
  margin-right: 5px;
  margin-left: 5px;
}
</style>
