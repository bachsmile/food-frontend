import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'
import store from './stores/index'
import VueCarousel from 'vue-owl-carousel'
import filters from './filters'

Vue.use(VueCarousel)
Vue.use(Vuelidate)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    filters,
    render: h => h(App)
}).$mount('#app')
