import { Parameters, app } from '@storybook/vue3';


import '../src/assets/index.css';
import { plugin, defaultConfig, createInput } from '@formkit/vue';
import { generateClasses } from '@formkit/tailwindcss';

import pctTheme from '../src/assets/property-captain-theme.js';
import { de, fr, en, it } from '@formkit/i18n';
import FormInputCounter from '../src/components/FormInputCounter.vue';
// import InputAutocomplete from '../src/components/CustomInputs/InputAutocomplete/InputAutocomplete.vue';
// import InputTel from '../src/components/CustomInputs/InputTel/InputTel.vue';
// import InputRange from '../src/components/CustomInputs/InputRange/InputRange.vue';
import CustomButtonScheme from '../src/components/CustomButtonScheme';
import messages from '../src/formkit.config';

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
      customButton: CustomButtonScheme
    },
    messages: messages
  })
);

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#F9F9FF',
      },
      {
        name: 'dark',
        value: '#161627',
      },
    ],
  },
  themes: {
    default: 'dark',
    list: [
      { name: 'light', class: '', color: '#F9F9FF' },
      { name: 'dark', class: 'dark', color: '#161627' }
    ]
  },
}