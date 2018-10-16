/**
 * axios  
 */
import axios from 'axios'
axios.interceptors.response.use(res => {
    const result = res || {}
    const {
        data: {
            data,
            code = 200
        }
    } = result
    if (code === 200) {
        return data
    }
})
export default {
    async get(url: string, params: object = {}) {
        return await axios({
            method: 'get',
            url: url,
            params: params,
            withCredentials: true
        })
    },
    async post(url: string, params: object = {}) {
        return await axios({
            method: "post",
            url: url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            transformRequest: [
                function (data) {
                    let ret = '';
                    for (let it in data) {
                        ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
                    }
                    return ret;
                }
            ],
            data: params
        })
    },
    async post_json(url: string, params: object = {}) {
        /* request payload */
        return await axios({
            method: "post",
            url: url,
            headers: {
                "Content-Type": "application/json"
            },
            transformRequest: [
                function (data) {
                    return data;
                }
            ],
            data: JSON.stringify(params)
        })
    }
}