import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppMain from './components/AppMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/projects',
                name: 'projects',
                component: AppMain
        },            {
            path: '/about',
            name: 'about',
            component: AppAbout
    }
    ]
});
export { router };