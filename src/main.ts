import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig } from '@formkit/vue';
import './assets/index.css';
import formkitConfig from '../src/formkit.config';

const app = createApp(App);

app.use(plugin, defaultConfig(formkitConfig));

app.mount('#app');
