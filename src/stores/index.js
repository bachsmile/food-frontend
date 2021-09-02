import Vue from 'vue'
import Vuex from 'vuex'
import jwt from 'jwt-decode'
import ProductsAPi from '../service/productApi'
import router from './../router'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        token: '',
        scrollY: 0,
        productList: [],
        sentPattents: false,
        paramRouter: ''
    },
    mutations: {
        setToken (state) {
            const token = window.localStorage.getItem('token')
            state.token = token !== null ? jwt(window.localStorage.getItem('token')) : null
        },
        setScroll (state) {
            state.scrollY = window.pageYOffset
        },
        setProductList (state, data) {
            state.productList = data
        },
        async getProductList (state) {
            await ProductsAPi.getListProduct({ page: 1, limit: process.env.VUE_APP_LIMIT, category: this.idRouterProduct })
                .then((res) => {
                    state.productList = res.data
                    console.log(state.productList)
                    return ''
                })
                .catch((error) => {
                    console.log(error)
                    return ''
                })
        },
        setParamsRouter (state) {
            state.paramRouter = router.currentRoute.params.type
        }
    }
})
