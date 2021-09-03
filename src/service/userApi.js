import axiosClient from './aixosClient'
const UserAPi = {
    getAll: () => {
        const url = '/users/list'
        return axiosClient.get(url)
    },
    postLogin: (params) => {
        const url = '/users/login'
        return axiosClient.post(url, params)
    },
    postRegister: (params) => {
        const url = '/users/register'
        console.log(process.env)
        return axiosClient.post(url, params)
    }
}
export default UserAPi
