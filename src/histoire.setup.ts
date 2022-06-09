import './assets/index.css';

import { plugin, defaultConfig } from '@formkit/vue';
import { generateClasses } from '@formkit/tailwindcss';
import messages from './formkit.config';

import { de, fr, en, it } from '@formkit/i18n';

import pctTheme from './assets/property-captain-theme.js';

import { createPinia } from 'pinia';
import { defineSetupVue3 } from 'histoire/client';

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  const pinia = createPinia();
  app.use(pinia); // Add Pinia store

  app.use(
    plugin,
    defaultConfig({
      locales: { de, fr, it, en },
      locale: 'en',
      config: {
        classes: generateClasses(pctTheme)
      },
      inputs: {
        // counter: createInput(InputCounter),
        // autocomplete: createInput(InputAutocomplete),
        // tel: createInput(InputTel),
        // range: createInput(InputRange)
      },
      messages: messages
    })
  );
});
