import { createApp } from "vue";
import "./style.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.vue";
import router from "./common/router/main";

const app = createApp(App);

app.use(router);

app.mount("#app");
