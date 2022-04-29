import { createApp } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig } from "@formkit/vue";
import "./assets/index.css";

const app = createApp(App);

app.use(plugin, defaultConfig);

app.mount("#app");
