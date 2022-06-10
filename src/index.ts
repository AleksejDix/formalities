import type { App } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue';
import formkitConfig from '../src/formkit.config';

export function install(app: App) {
  app.use(plugin, defaultConfig(formkitConfig));
}
