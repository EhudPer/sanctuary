import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#b5651d",
        secondary: "#424242",
        accent: "#82B1FF",
        // error: "#FF5252",
        error: "#D62E1F",
        // info: "#2196F3",
        info: "#0457E7",
        // success: "#4CAF50",
        success: "#018744",
        // warning: "#FFC107",
        warning: "#FFA700",
        background: "#eff2f5",
      },
    },
  },
});
