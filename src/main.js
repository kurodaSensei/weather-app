import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment';
import './assets/flexboxgrid.min.css'
import './scss/main.scss'

Vue.config.productionTip = false
Vue.use(moment)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')