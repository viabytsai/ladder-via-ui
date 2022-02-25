import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Tsai from './components/Tsai.vue'
import {createRouter,createWebHashHistory} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
    history:history,
    routes :[
        {path:'/', component:Tsai}
    ]
});
const app = createApp(App)
app.use(router)
app.mount('#app')
