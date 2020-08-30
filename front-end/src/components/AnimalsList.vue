<template>
    <div class="animals-list">
        <p>Animals List!</p>
        <ul>
            <li v-for="(animal, index) in animals" :key="index">
                <Animal :animal="animal" />
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import Animal from './Animal.vue';

export default {
    name: 'AnimalsList',
    components: {
        Animal,
    },
    setup() {
        const animals = ref([
            {
                name: 'Kidney',
                type: 'Cat',
                dateOfBirth: new Date('2005-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
            {
                name: 'Kfitz',
                type: 'Cat',
                dateOfBirth: new Date('2007-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
            {
                name: 'Peter',
                type: 'Cat',
                dateOfBirth: new Date('2010-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
            {
                name: 'Pizi',
                type: 'Cat',
                dateOfBirth: new Date('2012-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
            {
                name: 'Alona',
                type: 'Cat',
                dateOfBirth: new Date('2014-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
            {
                name: 'Andey',
                type: 'Cat',
                dateOfBirth: new Date('2016-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
            {
                name: 'Libi',
                type: 'Cat',
                dateOfBirth: new Date('2018-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
            {
                name: 'Pumi',
                type: 'Cat',
                dateOfBirth: new Date('2019-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
            {
                name: 'Haim',
                type: 'Cat',
                dateOfBirth: new Date('2020-05-05').toLocaleDateString(),
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
            },
        ]);
        return {
            animals,
        };
    },
};
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
