import Vue from 'vue'

const money = Vue.filter('vnd', function (value) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency', currency: 'VND'
    }).format(value)
})
const uppercase = Vue.filter('uppercase', function (value) {
    return value.toUpperCase()
})
const lowercase = Vue.filter('lowercase', function (value) {
    return value.toLowerCase()
})
export default { money, uppercase, lowercase }
