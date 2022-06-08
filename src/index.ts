import type { App } from 'vue'
export { default as pctFormkitTheme } from '@/assets/property-captain-theme';
export { default as FormButton } from '@/components/FormButton.vue';
import FormButton from '@/components/FormButton.vue'

export function install(app: App) {
  app.component('FormButton', FormButton)
}
