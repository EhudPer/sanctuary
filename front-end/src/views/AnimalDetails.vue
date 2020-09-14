<template>
  <div>
    <h1 class="page-title">Animal Details</h1>
    <v-card max-width="1032" class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ animal.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-img :src="animal.image_url" alt="Avatar" height="194"></v-img>

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
        <v-btn text color="deep-purple accent-4"> Add Animal </v-btn>
        <v-btn text color="deep-purple accent-4"> Edit </v-btn>
        <v-btn text color="deep-purple accent-4"> Delete </v-btn>
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
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "AnimalDetails",
  setup(props, { root }) {
    const animalId = root.$route.params.animalId;
    //change to getter function later:
    const animal = root.$store.getters.getAnimalById(animalId);
    //animal is not defined on refresh - fix later.
    return {
      animal,
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

@media only screen and (min-width: 340px) {
  .v-card__actions {
    flex-direction: row;
  }
}

@media only screen and (min-width: 340px) {
  .v-img {
    height: calc(100vh - 640px);
  }
}
</style>
