"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAnimals = () => animals;
const getAnimal = (obj, args, ctx) => {
    const { id } = args;
    return animals.find((animal) => animal.id === id);
};
const resolvers = {
    Query: {
        animals: getAnimals,
        animal: getAnimal,
    },
};
const animals = [
    {
        id: '1',
        name: 'Kidney',
        type: 'Cat',
        dateOfBirth: new Date('2005-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
    {
        id: '2',
        name: 'Kfitz',
        type: 'Cat',
        dateOfBirth: new Date('2007-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
    {
        id: '3',
        name: 'Peter',
        type: 'Cat',
        dateOfBirth: new Date('2010-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
    {
        id: '4',
        name: 'Pizi',
        type: 'Cat',
        dateOfBirth: new Date('2012-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
    {
        id: '5',
        name: 'Alona',
        type: 'Cat',
        dateOfBirth: new Date('2014-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
    {
        id: '6',
        name: 'Andey',
        type: 'Cat',
        dateOfBirth: new Date('2016-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
    {
        id: '7',
        name: 'Libi',
        type: 'Cat',
        dateOfBirth: new Date('2018-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
    {
        id: '8',
        name: 'Pumi',
        type: 'Cat',
        dateOfBirth: new Date('2019-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
    {
        id: '9',
        name: 'Haim',
        type: 'Cat',
        dateOfBirth: new Date('2020-05-05').toLocaleDateString(),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU',
    },
];
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map