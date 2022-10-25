import Vue from 'vue'
import App from './App.vue'
import InfosCliente from '@/components/InfosCliente.vue'

Vue.config.productionTip = false;
Vue.component('infos-cliente', InfosCliente)

new Vue({
  render: h => h(App),
}).$mount('#app')
