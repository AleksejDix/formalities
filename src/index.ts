import type { App } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue';
import { generateClasses } from '@formkit/tailwindcss';
import messages from './formkit.config';
import { de, fr, en, it } from '@formkit/i18n';
import pctTheme from './assets/property-captain-theme.js';

export { default as pctFormkitTheme } from '@/assets/property-captain-theme';
export { default as FormButton } from '@/components/FormButton.vue';
import FormButton from '@/components/FormButton.vue'

export function install(app: App) {
  app.use(
    plugin,
    defaultConfig({
      locales: { de, fr, it, en },
      locale: 'en',
      config: {
        classes: generateClasses(pctTheme)
      },
      messages: messages
    })
  );
  app.component('FormButton', FormButton)
}
