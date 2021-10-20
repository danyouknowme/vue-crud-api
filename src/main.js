import Vue from 'vue'
import App from './App.vue'
import "semantic-ui-css/semantic.css";
import router from "./Routers";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
