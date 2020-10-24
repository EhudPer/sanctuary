import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import graphqlClient from "../utils/graphql";

Vue.use(Vuex);
//make sure all the state is in shim and typed correctly and gets warn when using wrong type!

const getters = {
  getLoadingStatus: (state: any) => {
    return state.loading;
  },
  getAnimalById: (state: any) => (animalId: string) => {
    return state.animals.find((animal: any) => animal._id === animalId);
  },
};

const mutations = {
  toggleLoader(state: any, loadingNewStatus: boolean) {
    state.loading = loadingNewStatus;
  },
  setAnimal(state: any, animal: object) {
    state.animal = animal;
  },
  setAnimals(state: any, animals: Array<object>) {
    //temporary set animals array in reverse to show first the current added once for now untill
    //i'll add filters and sorting features.
    // state.animals = animals;
    state.animals = animals.reverse();
  },
  createAnimalInStore(state: any, animalToCreate: object) {
    const animalsStateCopy = state.animals.slice();
    animalsStateCopy.unshift(animalToCreate);
    const updatedAnimalsState = animalsStateCopy;

    state.animals = updatedAnimalsState;
  },
  updateAnimalInStore(state: any, animalToUpdate: object) {
    const animalToUpdateIdx = state.animals.findIndex(
      (animal) => animal._id === animalToUpdate._id
    );
    const animalsStateCopy = state.animals.slice();
    animalsStateCopy[animalToUpdateIdx] = animalToUpdate;
    const updatedAnimalsState = animalsStateCopy;
    state.animals = updatedAnimalsState;
  },
};

const actions = {
  async togLoading(
    { commit }: { commit: any },
    { loadingStatus }: { loadingStatus: boolean }
  ) {
    commit("toggleLoader", loadingStatus);
  },
  //consider removing the fetchAnimal if not used
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
    try {
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

      return response.data.animals;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createAnimal(
    { commit }: { commit: any },
    { animalToCreateFields }: { animalToCreateFields: object }
  ) {
    try {
      const response = await graphqlClient.mutate({
        mutation: gql`
          mutation createAnimal($animalInput: AnimalInput!) {
            createAnimal(input: $animalInput) {
              _id
              name
              type
              image_url
            }
          }
        `,
        variables: {
          animalInput: {
            name: animalToCreateFields.name,
            type: animalToCreateFields.type,
            image_url: animalToCreateFields.image_url,
          },
        },
      });

      commit("createAnimalInStore", response.data.createAnimal);
      return response.data.createAnimal;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateAnimal(
    { commit }: { commit: any },
    { updatedAnimalFields }: { updatedAnimalFields: object }
  ) {
    //change back to ID! instead of string all the way to graph schema and db... treat as id kind and not string all the way.
    try {
      const response = await graphqlClient.mutate({
        mutation: gql`
          mutation updateAnimal(
            $animalId: String!
            $animalInput: AnimalInput!
          ) {
            updateAnimal(_id: $animalId, input: $animalInput) {
              _id
              name
              type
              image_url
            }
          }
        `,
        variables: {
          animalId: updatedAnimalFields._id,
          animalInput: {
            name: updatedAnimalFields.name,
            type: updatedAnimalFields.type,
            image_url: updatedAnimalFields.image_url,
          },
        },
      });

      // Trigger the `setAnimal` mutation
      // which is defined above.
      commit("updateAnimalInStore", response.data.updateAnimal);
      // return response.data.updatedAnimal;
      return response.data.updateAnimal;
    } catch (error) {
      throw new Error(error);
    }
  },
};

//Add getters for state!
const state = {
  animal: null,
  animals: [],
  loading: false,
};

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state,
});
