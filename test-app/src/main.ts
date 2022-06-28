import { createApp } from 'vue'
import App from './App.vue'
import { install } from '@ascarix/formalities';
import '../index.css';

const app = createApp(App);

install(app);

app.mount('#app');