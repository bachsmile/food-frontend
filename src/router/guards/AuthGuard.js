const store = require('../../stores/index')

class Guard {
    auth ({ store, next, nextMiddleware }) {
        var token = window.localStorage.getItem('token') || false
        if (!token) {
            next()
        } else {
            next({ name: 'Home' })
        }
        return nextMiddleware
    }

    authAdmin ({ stores, next, nextMiddleware }) {
        console.log(store.default.state.token.userName)
        if (store.default.state.token.userName !== 'admin123') {
            next({ name: 'Home' })
        } else {
            next()
        }
        return nextMiddleware
    }
}
module.exports = new Guard()
