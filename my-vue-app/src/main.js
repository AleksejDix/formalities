import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Test from './pages/test/index.vue';
import { install } from '@ascarix/formalities';
import '../node_modules/@ascarix/formalities/dist/style.css';
import './assets/index.css';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Test
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
});

const app = createApp(App);

app.use(router);

install(app);

app.mount('#app');
