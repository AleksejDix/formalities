import { createApp } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig, createInput } from "@formkit/vue";
import { generateClasses } from "@formkit/tailwindcss";
import "./assets/index.css";
import InputCode from "./components/InputCode/InputCode.vue";
import InputPassword from "./components/InputPassword/InputPassword.vue";

import { de, fr, en, it } from "@formkit/i18n";

import pctTheme from "./assets/property-captain-theme.js";

const app = createApp(App);

app.use(
  plugin,
  defaultConfig({
    locales: { de, fr, it, en },
    locale: "en",
    config: {
      classes: generateClasses(pctTheme),
    },
    inputs: {
      code: createInput(InputCode, {
        props: ["digits"],
      }),
      passwordToggle: createInput(InputPassword),
    },
  })
);

app.mount("#app");
