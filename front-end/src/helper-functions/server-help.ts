// @ts-nocheck

import store from "@/store";

export const getProductionPortAndHost = async () => {
  return await store.dispatch("getProductionPortAndHost");
};
