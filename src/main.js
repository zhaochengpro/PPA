import { createApp } from 'vue';
import '@/assets/styles/global.css';
import '@/assets/styles/mobile.css';
import App from './App.vue';
import router from './router';
import store from './store';
import { setupI18n } from './locales';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';

const app = createApp(App);

setupI18n(app);

app.use(ElementPlus, { size: 'small', zIndex: 3000 });

app.use(store).use(router).mount('#app');
