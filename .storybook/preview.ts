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