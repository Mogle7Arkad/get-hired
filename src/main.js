import { createApp } from 'vue';
import 'primeicons/primeicons.css';
import router from './router';

import './assets/main.css';
import App from './App.vue';

const app = createApp(App)
app.use(router)
app.mount('#app')
