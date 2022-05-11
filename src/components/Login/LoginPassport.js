import React from "react";

import {postRequest} from "../../utils/ajax";
// import config from "config";


class LoginPassport extends React.Component{
    static removeLocalPassport(){
        localStorage.removeItem('ebookUser');
        localStorage.removeItem('ebookPrivilege');
        localStorage.removeItem('ebookLogintime');
        localStorage.removeItem('ebookNickname');
    }

    static checkLastLogin(successfulCallBack){
        if(this.checkStatus() === 1){
            successfulCallBack();
        }
    }

    static checkPrivilege(){
        if(this.checkStatus() === 1)
        {
            return localStorage.getItem('ebookPrivilege');
        }
        else {
            return 3;
        }
    }

    static checkStatus(){
        let lastLoginTime = localStorage.getItem('ebookLogintime');
        let nowTime = Date.now();
        if(lastLoginTime != null)
        {
            let loginInterval = (nowTime - lastLoginTime) / 1000;

            if(loginInterval < 600){
                localStorage.setItem('ebookLogintime',Date.now());
                // 再次颁发令牌
                return 1;
            }
            else{
                this.removeLocalPassport();
                return 0;
            }
        }
        return 0;
    }

    static login(loginInfo, SuccessCallback, FailureCallback) {


        // const url = `${config.apiUrl}/login`;
        const url = 'http://localhost:8080/login';

        postRequest(url, loginInfo,
            (respdata) => {
                if (respdata.status >= 0) {
                    localStorage.setItem('ebookUser',respdata.data.username);
                    localStorage.setItem('ebookNickname', respdata.data.name);
                    localStorage.setItem('ebookPrivilege',respdata.data.privilege);
                    localStorage.setItem('ebookLogintime',Date.now());
                    SuccessCallback();
                } else {
                    FailureCallback(respdata.msg);
                }
            }
            );
    }

    static logout(SuccessCallBack) {
        this.removeLocalPassport();
        SuccessCallBack();
    }
}

export default LoginPassport;