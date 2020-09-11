<template>
    <div class="animals-list">
        <p>Animals List!</p>
        <ul>
            <li v-for="animal in animals" :key="animal._id">
                <Animal :animal="animal" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import Animal from './Animal.vue';

export default defineComponent({
    name: 'AnimalsList',
    components: {
        Animal,
    },
    setup() {
      const store = useStore();
        const animals = ref(store.state.animals)
        return {
            animals,
        };
    },
});
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-wrap: wrap;

    li {
        margin: 0 auto;
    }
}
</style>
