import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index.js'
import Element from 'element-ui';
import './style/style.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { locale })

Vue.use(Element);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
