import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(VueCompositionAPI);
Vue.use(VueSweetalert2);

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
