<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ props.animal.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img
      @click="moveToAnimalDetails"
      :src="
        props.animal.image_url
          ? props.animal.image_url
          : require(`@/assets/${props.animal.type.toLowerCase()}.jpg`)
      "
      alt="Avatar"
      height="194"
      :style="'cursor: pointer'"
    ></v-img>

    <v-card-text>
      {{ props.animal.type }}
    </v-card-text>

    <v-card-actions>
      <v-btn @click="moveToAnimalEdit"> Edit </v-btn>
      <v-btn @click="deleteAnimalClicked"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
// @ts-nocheck

import { defineComponent } from "@vue/composition-api";
import { deleteAnimal } from "../helper-functions/animal-crud";

export default defineComponent({
  name: "Animal",
  props: {
    animal: Object,
  },
  setup(props, { root }) {
    //check later to do this a global function to use here and in edit page and where it called also..
    function moveToAnimalDetails() {
      root.$router.push({
        name: "AnimalDetails",
        params: { animalId: props.animal._id },
      });
    }
    //check later to do this a global function to use here and in edit page and where it called also..
    function moveToAnimalEdit() {
      root.$router.push({
        name: "AnimalEdit",
        params: { animalId: props.animal._id },
      });
    }
    const deleteAnimalClicked = () => {
      deleteAnimal(root, props.animal._id, true);
    };
    return {
      props,
      moveToAnimalDetails,
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
  //problem to fix that need wrap to ocure before and not after only that there is no space and they are about to collid..
}

.v-img {
  width: 100%;
}

.v-card__text {
  font-size: 1.2rem;
}

.v-card__text,
.v-list-item__title {
  color: var(--v-thirteenth-base) !important;
}

.v-btn {
  //width: 100%;
  //max-width: 160px;
  background: var(--v-ninth-base) !important;
  color: var(--v-tenth-base) !important;
  flex-grow: 1;
  margin-bottom: 10px;
}

@media only screen and (min-width: 345px) {
  .v-card__actions {
    flex-direction: row;
  }
}
</style>
