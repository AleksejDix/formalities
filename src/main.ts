import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig, createInput } from '@formkit/vue';
import { generateClasses } from '@formkit/tailwindcss';
import './assets/index.css';
import InputCode from './components/InputCode/InputCode.vue';
import InputPassword from './components/InputPassword/InputPassword.vue';
import InputCounter from './components/CustomInputs/InputCounter/InputCounter.vue';
import GlobalAutocomplete from './components/GlobalAutocomplete/GlobalAutocomplete.vue';

import { de, fr, en, it } from '@formkit/i18n';

import pctTheme from './assets/property-captain-theme.js';

const app = createApp(App);

app.use(
  plugin,
  defaultConfig({
    locales: { de, fr, it, en },
    locale: 'en',
    config: {
      classes: generateClasses(pctTheme)
    },
    inputs: {
      code: createInput(InputCode, {
        props: ['digits']
      }),
      passwordToggle: createInput(InputPassword),
      counter: createInput(InputCounter),
      autocomplete: createInput(GlobalAutocomplete)
    }
  })
);

app.mount('#app');
