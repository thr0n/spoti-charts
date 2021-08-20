import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://localhost:3000"
})

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: ""
    }
    return axiosApi({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data)
    }).catch(err => {
        return Promise.reject(err)
    })
}

const get = (url) => apiRequest("get", url, null)

export const API = { get }
