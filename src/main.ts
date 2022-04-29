import { createApp } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig, createInput } from "@formkit/vue";
import { generateClasses } from "@formkit/tailwindcss";
import "./assets/index.css";
import InputOneTimePassword from "./components/InputOneTimePassword/InputOneTimePassword.vue";
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
      otp: createInput(InputOneTimePassword, {
        props: ["digits"],
      }),
    },
  })
);

app.mount("#app");
