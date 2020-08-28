<template>
    <div class="animals-list">
        <p>Animals List!</p>
        <ul>
            <li v-for="(animal, index) in animals" :key="index">
                {{ animal }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'AnimalsList',

    setup() {
        const animals = ref([
            'Kidney',
            'Kfitz',
            'Peter',
            'Pizi',
            'Alona',
            'Andy',
            'Libi',
            'Pumi',
            'Haim',
        ]);
        return {
            animals,
        };
    },
};
</script>

<style lang="scss" scoped></style>
