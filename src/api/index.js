import axios from "axios";
import endpoints from "./endpoints";

const apiRequest = {
    endpoints,
    get: async function (options) {
        const params = {
            ...options,
            url: this.decodeURL(options.url)
        };
        return new Promise((resolve, reject) => {
            axios.get(params.url)
                .then(res => {
                    resolve(res);
                })
                .catch(e => reject(e));
        });
    },

    post: async function (options) {
        const params = {
            ...options,
            url: this.decodeURL(options.url)
        };
        return new Promise((resolve, reject) => {
            axios.post(params.url, params.body)
                .then(res => resolve(res))
                .catch(e => reject(e));
        });
    },
    put: async function (options) {
        const params = {
            ...options,
            url: this.decodeURL(options.url)
        };
        return new Promise((resolve, reject) => {
            axios.put(params.url + "/" + params.body.id, params.body).then(res => resolve(res))
                .catch(e => reject(e));
        });
    },
    decodeURL (url) {
        let endpoint = endpoints[url[0]];
        console.log(endpoint);
        if (url.length > 1) {
            const params = url.filter((param, index) => index !== 0);
            console.log(params);
            const format = require("string-template");
            endpoint = format(endpoint, params);
        }
        return `${process.env.REACT_APP_URI_HOST}${endpoint}`;
    }
};

export default apiRequest;
