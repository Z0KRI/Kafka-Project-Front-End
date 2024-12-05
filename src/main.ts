import { createApp } from "vue";
import "./style.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.vue";
import router from "./common/router/main";
import { GenerateFactoryProvider } from "./data/common/providers/generate-factory.provider";
import { DataModule } from "./data/data.module";

const app = createApp(App);

app.use(router);

GenerateFactoryProvider(app, DataModule);

app.mount("#app");
