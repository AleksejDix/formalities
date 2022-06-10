import type { App } from 'vue'
import { plugin, defaultConfig, createInput } from '@formkit/vue';
import { generateClasses } from '@formkit/tailwindcss';
import messages from './formkit.config';
import { de, fr, en, it } from '@formkit/i18n';
import pctTheme from './assets/property-captain-theme.js';
import CustomButton from '@/components/CustomButton.vue'

export { default as pctFormkitTheme } from '@/assets/property-captain-theme';

export function install(app: App) {
  app.use(
    plugin,
    defaultConfig({
      locales: { de, fr, it, en },
      locale: 'en',
      config: {
        classes: generateClasses(pctTheme)
      },
      inputs: {
        button: createInput(CustomButton)
      },
      messages: messages
    })
  );
}
