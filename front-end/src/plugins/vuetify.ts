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
        primary: "#616852",
        // secondary: "#424242",
        secondary: "#b9baba",
        third: "#1a285a",
        fourth: "#69718c",
        fifth: "#798f6f",
        sixth: "#a99041",
        seventh: "#3b5842",
        eighth: "#ececeb",
        // error: "#FF5252",
        ninth: "#a89f6d",
        // info: "#2196F3",
        tenth: "#0f182f",
        // success: "#4CAF50",
        eleventh: "#8c8b93",
        // warning: "#FFC107",
        twelvth: "#333529",
        // background: "#eff2f5",
        thirteenth: "#fffffff",
      },
    },
  },
});
