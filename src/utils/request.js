import axios from 'axios'

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            baseURL: 'https://www.fastmock.site/mock/ca54c97cdfb6783ee8c7d6664a6d93f4/jd',
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