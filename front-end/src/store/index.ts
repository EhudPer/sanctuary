import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import graphqlClient from "../utils/graphql";

Vue.use(Vuex);
//make sure all the state is in shim and typed correctly and gets warn when using wrong type!

const getters = {
  getAnimalById: (state: any) => (animalId: string) => {
    return state.animals.find((animal: any) => animal._id === animalId);
  },
};

const mutations = {
  setAnimal(state: any, animal: object) {
    state.animal = animal;
  },
  setAnimals(state: any, animals: Array<object>) {
    state.animals = animals;
  },
};

const actions = {
  async fetchAnimal({ commit }: { commit: any }, _id: string) {
    const response = await graphqlClient.query({
      // It is important to not use the
      // ES6 template syntax for variables
      // directly inside the `gql` query,
      // because this would make it impossible
      // for Babel to optimize the code.
      query: gql`
        #        //change backto ID! instead of string all the way to graph schema and db... treat as id kind and not string all the way.
        query Animal($animalId: String!) {
          animal(_id: $animalId) {
            _id
            name
            type
            image_url
          }
        }
      `,
      variables: { animalId: _id },
    });

    // Trigger the `setAnimal` mutation
    // which is defined above.
    commit("setAnimal", response.data.animal);
  },
  async fetchAnimals({ commit }: { commit: any }) {
    const response = await graphqlClient.query({
      query: gql`
        query Animals {
          animals {
            _id
            name
            type
            image_url
          }
        }
      `,
    });

    // Trigger the `setAnimals` mutation
    // which is defined above.
    commit("setAnimals", response.data.animals);
  },
};

//Add getters for state!
const state = {
  animal: null,
  animals: [],
};

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state,
});
