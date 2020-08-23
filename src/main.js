import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from "./router/router.js"
import ViewUI from "view-design";
import 'view-design/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(ViewUI);

// const RouterConfig={
// 	routers:Routers
// };
// const router =new VueRouter(RouterConfig);

Vue.config.productionTip = false

new Vue({
	el:'#app',
	router,
  render: h => h(App),
}).$mount('#app')
