// import Vue from "vue";
// import VueCompositionAPI from "@vue/composition-api";
//
// import { createApp } from "@vue/composition-api";
// import App from "./App.vue";
// import store from "./store/index";
//
// Vue.use(VueCompositionAPI);
//
// const app = createApp(App);
// app.use(store);
// app.mount("#app");

import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

// import { createApp } from "@vue/composition-api";
import App from "./App.vue";
import store from "./store/index";

Vue.use(VueCompositionAPI);

new Vue({
  store,
  render: (h) => h(App),
  // created: () => {
  //     store.dispatch('getFiles')
  // }
}).$mount("#app");
