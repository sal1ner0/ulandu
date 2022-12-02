import Vue from "vue";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  newestOnTop: true,
  timeout: 3000,
});
