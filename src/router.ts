import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SingIn from './views/SingIn.vue';
import Change from './views/Change.vue';
import Delete from './views/Delete.vue';
import Get from './views/Get.vue';
import PrivateHome from './views/PrivateHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/singIn',
      name: 'singIn',
      component: SingIn,
    },
    {
      path: '/change',
      name: 'change',
      component: Change,
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete,
    },
    {
      path: '/get',
      name: 'get',
      component: Get,
    },
    {
      path: '/private',
      name: 'private',
      component: PrivateHome,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
