<template>
  <v-dialog v-model="loading" fullscreen>
    <v-container
      fluid
      fill-height
      style="background-color: rgba(255, 255, 255, 0.5)"
    >
      <v-layout justify-center align-center>
        <v-progress-circular indeterminate color="primary">
        </v-progress-circular>
      </v-layout>
    </v-container>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";

export default defineComponent({
  name: "Loader",
  setup(props, { root }) {
    const loading = computed(() => root.$store.getters.getLoadingStatus);
    return {
      loading,
    };
  },
});
</script>

<style lang="scss" scoped></style>
