import axiosClient from './aixosClient'
const ProductsAPi = {
    getAll: () => {
        const url = '/products/get'
        return axiosClient.get(url)
    },
    getListProduct: (params) => {
        const url = `/products/list-product?page=${params.page}&limit=${params.limit}&category=${params.category}`
        console.log(
            url
        )
        return axiosClient.post(url, params)
    },
    postProduct: (params) => {
        const url = '/products/post'
        return axiosClient.post(url, params)
    },
    postRegister: (params) => {
        const url = '/users/register'
        return axiosClient.post(url, params)
    }
}
export default ProductsAPi
