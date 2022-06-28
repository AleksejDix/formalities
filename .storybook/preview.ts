import { Parameters, app } from '@storybook/vue3';
import '../src/assets/index.css'
import { plugin, defaultConfig } from '@formkit/vue';
import formkitConfig from '../src/formkit.config';

app.use(
  plugin,
  defaultConfig(formkitConfig)
);

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}