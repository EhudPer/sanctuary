<template>
  <div>
    <v-card max-width="1032" class="mx-auto">
      <v-list-item> </v-list-item>

      <v-img
        v-if="animalType"
        :src="require(`@/assets/${animalType.toLowerCase()}.jpg`)"
        alt="Avatar"
        max-height="500"
      ></v-img>

      <v-form ref="myForm" v-model="valid" class="mb-4" lazy-validation>
        <v-text-field
          v-model="animalName"
          :counter="30"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-select
          v-model="animalType"
          :items="items"
          :rules="[(v) => !!v || 'Category is required']"
          label="Category"
          required
        ></v-select>

        <v-select
          v-model="animalMedicineType"
          :items="medicineTypeItems"
          label="Medicine Type"
          clearable
        ></v-select>

        <v-text-field
          v-model="animalDosage"
          :rules="[
            (v) =>
              (v >= 1 && !isNaN(v)) ||
              v === '' ||
              'Dosage must be a NUMBER that is 1 or greater',
          ]"
          label="Dosage"
          type="number"
        ></v-text-field>

        <v-text-field
          v-model="animalFrequency"
          :rules="[
            (v) =>
              (v >= 1 && !isNaN(v) && Number.isInteger(+v)) ||
              v === '' ||
              // (v !== '' && Number.isInteger(+v)) ||
              'Frequency must be an integer NUMBER that is 1 or greater',
          ]"
          label="Frequency"
          type="number"
        ></v-text-field>

        <v-select
          v-model="animalTimeUnit"
          :items="timeUnitItems"
          label="Time Unit"
          clearable
        ></v-select>

        <div class="btn-container">
          <v-btn
            v-if="valid && animalName !== '' && animalType !== ''"
            class="validate-btn"
            @click="validate"
          >
            Add
          </v-btn>
          <v-btn class="cancel-btn" @click="cancelHandler"> Cancel </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
// @ts-nocheck

import {
  defineComponent,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
} from "@vue/composition-api";

export default defineComponent({
  name: "AddAnimal",
  setup(props, { root }) {
    //check if i can put the code of mount and before mount in some function and only call it in all the component instead duplicate code.

    onBeforeMount(async () => {
      if (document.readyState !== "complete") {
        root.$store.dispatch("togLoading", { loadingStatus: true });
      }
    });

    onMounted(() => {
      window.onload = function () {
        root.$store.dispatch("togLoading", { loadingStatus: false });
      };
    });

    //Later try to set that when the edit page is loaded that the values of the controls will not be empty -
    // but with the current animal's details from the db - all the time, even on refresh or loading from url directly.
    const animalName = ref("");
    const animalType = ref("");
    const animalMedicineType = ref("");
    const animalDosage = ref("");
    const animalFrequency = ref("");
    const animalTimeUnit = ref("");

    const myForm = ref(null);
    const valid = ref(true);
    const name = ref("");
    const nameRules = reactive([
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
    ]);

    //later move those types of animals to one file and read them from it for all
    //the places needed with the types list like the select box etc.
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
        addAnimal();
      }
    };

    const cancelHandler = () => {
      moveToAnimalsList();
    };

    const addAnimal = async () => {
      root.$store.dispatch("togLoading", { loadingStatus: true });
      const animalToCreateFields = {
        name: animalName.value,
        type: animalType.value,
        medicineType: animalMedicineType.value,
        dosage:
          animalDosage.value &&
          animalDosage.value !== 0 &&
          animalDosage.value !== ""
            ? +animalDosage.value
            : 0,

        frequency:
          animalFrequency.value &&
          animalFrequency.value !== 0 &&
          animalFrequency.value !== "" &&
          Number.isInteger(+animalFrequency.value)
            ? +animalFrequency.value
            : 0,

        timeUnit: animalTimeUnit.value,
        //For now it's always null and when loading animal it will check and see that it's null so it will load default
        // image by animal type
        //later will add option the upload image - and if so the image cloud url will be stored here, if not - then null.
        //Like that there will always be a pic or default or the user's uploaded picture.
        image_url: null,
      };

      try {
        await root.$store.dispatch({
          type: "createAnimal",
          animalToCreateFields,
        });

        moveToAnimalsList();
      } catch (error) {
        root.$swal.fire({
          title: "Error: animal not created!",
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

    //use it from a global function later cause it's in more than one component.

    const moveToAnimalsList = () => {
      root.$router.push({
        name: "AnimalsList",
      });
    };

    return {
      animalName,
      animalType,
      animalMedicineType,
      animalDosage,
      animalFrequency,
      animalTimeUnit,
      myForm,
      valid,
      name,
      nameRules,

      items,
      medicineTypeItems,
      timeUnitItems,
      validate,
      cancelHandler,

      moveToAnimalsList,
    };
  },
});
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}

.v-card {
  width: 100%;
  margin: 15px auto;
  overflow: scroll;
  background-color: var(--v-fourth-base) !important;
  color: var(--v-third-base) !important;
}

.btn-container {
  display: flex;

  align-items: center;
}

.v-card__text,
.v-list-item__title {
  color: var(--v-tenth-base) !important;
}

.v-card__actions {
  flex-direction: column;
}

form {
  padding: 0 8px;

  .validate-btn,
  .cancel-btn {
    margin-top: 10px;
  }
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
