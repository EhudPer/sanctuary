<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ props.animal.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="props.animal.image_url" alt="Avatar" height="194"></v-img>

    <v-card-text>
      {{ props.animal.type }}
    </v-card-text>

    <v-card-actions>
      <v-btn text color="deep-purple accent-4"> Details </v-btn>
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
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Animal",
  props: {
    animal: Object,
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
  //problem to fix that need wrap to ocure before and not after only that there is no space and they are about to collid..
}
</style>
