import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#9652ff",
        error: "#f83e70",
        info: "#ffaa2c",
        success: "#3cd1c2",
      }
    }
  },
  icons: {iconfont: "mdi"}
};

export default new Vuetify(opts);
