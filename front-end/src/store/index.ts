// @ts-nocheck

import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import graphqlClient from "../utils/graphql";
import { isAuthToken, saveTokenToLocalStorage } from "../helper-functions/auth";

Vue.use(Vuex);
//make sure all the state is in shim and typed correctly and gets warn when using wrong type!

//split later the store for smaller parts modules related.

const getters = {
  getLoadingStatus: (state: any) => {
    return state.loading;
  },
  getToken: (state: any) => {
    return state.token;
  },
  getAnimals: (state: any) => {
    return state.animals;
  },
  getAnimalById: (state: any) => (animalId: string) => {
    return state.animals.find((animal: any) => animal._id === animalId);
  },
};

const mutations = {
  toggleLoader(state: any, loadingNewStatus: boolean) {
    state.loading = loadingNewStatus;
  },
  initTokenState: (state: any, tokenState) => {
    state.token = tokenState ? localStorage.getItem("token") : null;
  },
  updateTokenState(state, token) {
    state.token = token;
  },
  setAnimal(state: any, animal: object) {
    state.animal = animal;
  },
  setAnimals(state: any, animals) {
    state.animals = animals;
  },
  createAnimalInStore(state: any, animalToCreate: object) {
    const animalsStateCopy = state.animals.slice();
    animalsStateCopy.push(animalToCreate);
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
  deleteAnimalFromStore(state: any, { _id }: object) {
    const animalsStateCopy = state.animals.slice();
    const animalIdx = animalsStateCopy.findIndex(
      (animal) => animal._id === _id
    );

    animalsStateCopy.splice(animalIdx, 1);
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

  async initTokenStateAction({ commit }: { commit: any }) {
    const tokenState = !localStorage.getItem("token")
      ? null
      : await isAuthToken(localStorage.getItem("token"));

    commit("initTokenState", tokenState);
  },

  async loginUser(
    { commit }: { commit: any },
    { userToAuthFields }: { userToAuthFields: object }
  ) {
    try {
      const response = await graphqlClient.query({
        query: gql`
          query login($userInput: UserInput!) {
            login(input: $userInput) {
              userId
              token
              tokenExpiration
            }
          }
        `,
        variables: {
          userInput: {
            email: userToAuthFields.userEmail,
            password: userToAuthFields.userPassword,
          },
        },
      });
      const token = response.data.login.token;

      saveTokenToLocalStorage(token);
      commit("updateTokenState", token);
      return "success";
    } catch (error) {
      throw new Error(error);
    }
  },

  async isAuthToken({ commit }: { commit: any }, token) {
    try {
      const response = await graphqlClient.query({
        query: gql`
          query validateToken($token: String!) {
            validateToken(token: $token)
          }
        `,
        variables: {
          token: token,
        },
      });

      const validateToken = response.data.validateToken;

      return validateToken;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createUser(
    { commit }: { commit: any },
    { userToAuthFields }: { userToAuthFields: object }
  ) {
    try {
      const response = await graphqlClient.mutate({
        mutation: gql`
          mutation createUser($userInput: UserInput!) {
            createUser(input: $userInput) {
              userId
              token
            }
          }
        `,
        variables: {
          userInput: {
            email: userToAuthFields.userEmail,
            password: userToAuthFields.userPassword,
          },
        },
      });

      const token = response.data.createUser.token;

      saveTokenToLocalStorage(token);

      commit("updateTokenState", token);
      return "success";
    } catch (error) {
      throw new Error(error);
    }
  },

  async signinOrSignupGoogle(
    { commit }: { commit: any },
    { token }: { token: string }
  ) {
    try {
      const response = await graphqlClient.query({
        query: gql`
          query signGoogle($token: String!) {
            signGoogle(token: $token) {
              token
              showToast
            }
          }
        `,
        variables: {
          token: token,
        },
      });

      const validatedToken = response.data.signGoogle.token;

      saveTokenToLocalStorage(validatedToken);
      commit("updateTokenState", token);

      return { isSuccess: true, showToast: response.data.signGoogle.showToast };
    } catch (error) {
      throw new Error(error);
    }
  },

  async linkPassword(
    { commit }: { commit: any },
    { tokenAndPassword }: { tokenAndPassword: object }
  ) {
    const { token, password } = tokenAndPassword;

    try {
      const response = await graphqlClient.query({
        query: gql`
          query linkPassword($tokenAndPassword: TokenAndPassword!) {
            linkPassword(tokenAndPassword: $tokenAndPassword) {
              token
            }
          }
        `,
        variables: {
          tokenAndPassword: {
            token,
            password,
          },
        },
      });
      const validatedToken = response.data.linkPassword.token;
      saveTokenToLocalStorage(validatedToken);
      commit("updateTokenState", validatedToken);
      return { isSuccess: true, showToast: false };
    } catch (error) {
      throw new Error(error);
    }
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
        context: {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      });

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
        context: {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
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
        context: {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      });

      // Trigger the `setAnimal` mutation
      // which is defined above.
      commit("updateAnimalInStore", response.data.updateAnimal);
      return response.data.updateAnimal;
    } catch (error) {
      throw new Error(error);
    }
  },

  async deleteAnimal(
    { commit }: { commit: any },
    { animalId }: { animalId: string }
  ) {
    try {
      const response = await graphqlClient.mutate({
        mutation: gql`
          mutation deleteAnimal($animalId: String!) {
            deleteAnimal(_id: $animalId) {
              _id
            }
          }
        `,
        variables: {
          animalId: animalId,
        },
        context: {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      });

      commit("deleteAnimalFromStore", response.data.deleteAnimal);
      return response.data.deleteAnimal;
    } catch (error) {
      throw new Error(error);
    }
  },
};

const state = {
  token: null,
  animals: [],
  loading: false,
};

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state,
});
