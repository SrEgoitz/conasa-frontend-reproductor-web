import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue';
import { BToast } from 'bootstrap-vue';
import { BNavbar } from 'bootstrap-vue';
import { BForm } from 'bootstrap-vue';
import { BContainer } from 'bootstrap-vue';
import { BCard } from 'bootstrap-vue';

Vue.component('b-toast', BToast);
Vue.component('b-navbar', BNavbar);
Vue.component('b-form', BForm);
Vue.component('b-container', BContainer);
Vue.component('b-card', BCard);


// import axios from 'axios';

// const instanceUserApi  = axios.create({
//   baseURL: process.env.VUE_APP_URL_API,
// });

// instanceUserApi.defaults.headers.common['Authorization'] =
//   'Basic' + process.env.VUE_APP_USER_TOKEN,

// Vue.prototype.$http = instanceUserApi;

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
export default Vue;
