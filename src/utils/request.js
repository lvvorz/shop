import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
    timeout: 10000
})

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, params, {
            baseURL: '',
        }).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            baseURL: 'https://fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}