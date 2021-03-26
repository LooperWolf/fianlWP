import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'semantic-ui-css/semantic.min.css';
import SuiVue from 'semantic-ui-vue';
Vue.config.productionTip = false
Vue.use(SuiVue);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
