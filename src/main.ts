import { createApp } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig, createInput } from "@formkit/vue";
import { generateClasses } from "@formkit/tailwindcss";
import "./assets/index.css";
import InputOneTimePassword from "./components/InputOneTimePassword/InputOneTimePassword.vue";

import pctTheme from "./assets/property-captain-theme.js";

const app = createApp(App);

app.use(
  plugin,
  defaultConfig({
    config: {
      classes: generateClasses(pctTheme),
    },
    inputs: {
      otp: createInput(InputOneTimePassword, {
        props: ["digits"],
      }),
    },
  })
);

app.mount("#app");
