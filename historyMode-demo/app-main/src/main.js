import Vue from "vue"
import VueRouter from "vue-router"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

import App from "./App.vue"
import routes from "./router"
import startQiankun from "./micro"

Vue.use(VueRouter)
Vue.use(Antd)
Vue.config.productionTip = false

startQiankun()

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#main-app");
