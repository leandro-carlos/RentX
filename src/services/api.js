import axios from 'axios'

export const baseUrl = 'http://192.168.15.34:3333';// ambiente de produção


const api = axios.create({
    baseURL: baseUrl
})

export default api