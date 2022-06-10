import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig, createInput } from '@formkit/vue';
import { generateClasses } from '@formkit/tailwindcss';
import './assets/index.css';
// import InputCounter from './components/CustomInputs/InputCounter/InputCounter.vue';
// import InputAutocomplete from './components/CustomInputs/InputAutocomplete/InputAutocomplete.vue';
// import InputTel from './components/CustomInputs/InputTel/InputTel.vue';
// import InputRange from './components/CustomInputs/InputRange/InputRange.vue';
import messages from './formkit.config';

import { de, fr, en, it } from '@formkit/i18n';

import pctTheme from './assets/property-captain-theme.js';
import CustomButton from '../src/components/CustomButton.vue';

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
      // counter: createInput(FormInputCounter),
      // autocomplete: createInput(InputAutocomplete),
      // tel: createInput(InputTel),
      // range: createInput(InputRange),
      button: createInput(CustomButton)
    },
    messages: messages
  })
);

app.mount('#app');
