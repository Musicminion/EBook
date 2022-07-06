import LoginPassport from "../components/Login/LoginPassport";

// post请求需要传入json对象
export const postRequest = (url, json, callback) => {

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


// 特别提醒，写get请求的时候请把url写完整
export const getRequest = (url,callback) => {
    fetch(url,{
        method: 'GET',
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        })
}


// post请求返回回调函数而不是直接的调用回调函数
export const postRequestReturnCallback = (url, json, callback) => {

    let opts = {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };


    return fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //return callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


