// @ts-nocheck

import graphqlClient from "../utils/graphql";
import store from "@/store/index";

export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

export const isAuthToken = async (token) => {
  return await store.dispatch("isAuthToken", token);
};

export const logout = async (root) => {
  localStorage.removeItem("token");
  root.$store.commit("updateTokenState", null);
  root.$store.commit("setAnimals", []);
  graphqlClient.resetStore();
  root.$router.push("/auth");
};
