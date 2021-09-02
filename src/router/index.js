import Vue from 'vue'
import VueRouter from 'vue-router'
import Guard from './guards/AuthGuard'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            middleware: [Guard.auth]
        },
        component: () => import(/* webpackChunkName: "Login" */ '../views/LoginPage/LoginPage.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { keyGuard: true }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/HomePage.vue')
    },
    {
        path: '/shop-page',
        name: 'ShopPage',
        component: () => import(/* webpackChunkName: "Home" */ '../views/ShopPage/ShopPage.vue')
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import(/* webpackChunkName: "product" */ '../views/ShopPage/ShopItems/ShopItem.vue'),
        // redirect: { name: 'productItem' },
        children: [
            {
                path: '/product/:type',
                name: 'productItem',
                component: () => import(/* webpackChunkName: "product" */ '../views/ShopPage/ShopItems/ShopItem.vue')
            }
        ]
    },
    {
        path: '/cart-page',
        name: 'CartPage',
        component: () => import(/* webpackChunkName: "Cart" */ '../views/CartPage/CartPage.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        meta: {
            middleware: [Guard.authAdmin]
        },
        component: () => import(/* webpackChunkName: "Admin" */ './../views/AdminPage/AdminPage.vue'),
        redirect: { name: 'ProductAdmin' },
        children: [
            {
                path: '/admin/product-admin',
                name: 'ProductAdmin',
                component: () => import(/* webpackChunkName: "ProductAdmin" */ './../views/AdminPage/Components/ProductAdmin.vue')
            }
        ]
    },
    {
        path: '*',
        name: 'Error',
        component: () => import(/* webpackChunkName: "Error" */ '../views/ErrorPage.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
router.beforeEach((to, from, next) => {
    const middleware = to.matched.reduce((results, obj) => {
        if (obj.meta.middleware) return [...results, ...obj.meta.middleware]
        return results
    }, [])
    if (middleware.length === 0) return next()

    const context = {
        to,
        from,
        next
    }
    return middleware[0]({
        ...context,
        nextMiddleware: middlewarePipeline(context, middleware, 1)
    })
})
export default router

function middlewarePipeline (context, middleware, index) {
    const middlewareIndex = middleware[index]
    if (!middlewareIndex) context.next()
    else {
        return () => {
            const nextPipeline = middlewarePipeline(context, middleware, index + 1)
            middlewareIndex({ ...context, nextMiddleware: nextPipeline })
        }
    }
}
