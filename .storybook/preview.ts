import { Parameters, app } from '@storybook/vue3';


import '../src/assets/index.css';
import { plugin, defaultConfig } from '@formkit/vue';
import { generateClasses } from '@formkit/tailwindcss';

import pctTheme from '../src/assets/property-captain-theme.js';

app.use(
  plugin,
  defaultConfig({
    config: {
      classes: generateClasses(pctTheme)
    },
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
}