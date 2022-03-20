


let postRequest_v2 = (url, data, callback) => {
    let formData = new FormData();

    for (let p in data){
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }

    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

let postRequest = (url, json, callback) => {

    let opts = {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {postRequest,postRequest_v2};




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // /**
// //  * 封装 fetch
// //  */
// //
// // import {history} from "../components/PublicHistory";
// // // import { hashHistory } from 'react-router';
// // //
// // // import { createHashHistory } from 'history';
// // // const hashHistory = createHashHistory();
// //
// // export default function ajax (method, url, body) {
// //     method = method.toUpperCase();
// //     if (method === 'GET') {
// //         // fetch的GET不允许有body，参数只能放在url中
// //         body = undefined;
// //     } else {
// //         body = body && JSON.stringify(body);
// //     }
// //
// //     return fetch(url, {
// //         method,
// //         headers: {
// //             'Content-Type': 'application/json',
// //             'Accept': 'application/json',
// //             'access-token': sessionStorage.getItem('access_token') || '' // 从sessionStorage中获取access token
// //         },
// //         body
// //     })
// //         .then((res) => {
// //             if (res.status === 401) {
// //                 // hashHistory.push('/login');
// //                 history.push('/login');
// //                 return Promise.reject('Unauthorized.');
// //             }
// //             else {
// //                 const token = res.headers.get('access-token');
// //                 if (token) {
// //                     sessionStorage.setItem('access_token', token);
// //                 }
// //                 return res.json();
// //             }
// //         });
// // }
// //
// //
// // // GET 请求
// // export const get = url => ajax('GET', url);
// // // POST 请求
// // export const post = (url, body) => ajax('POST', url, body);
// // // PUT 上传
// // export const put = (url, body) => ajax('PUT', url, body);
// // // DELETE 删除
// // export const del = (url, body) => ajax('DELETE', url, body);