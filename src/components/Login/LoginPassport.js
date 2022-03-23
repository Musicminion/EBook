import React from "react";


class LoginPassport extends React.Component{
    static removeLocalPassport(){
        localStorage.removeItem('ebookUser');
        localStorage.removeItem('ebookPassword');
        localStorage.removeItem('ebookPrivilege');
        localStorage.removeItem('ebookLogintime');
    }

    static checkLastLogin(successfulCallBack){
        if(this.checkStatus() === 1){
            successfulCallBack();
        }
    }

    static checkStatus(){
        let lastLoginTime = localStorage.getItem('ebookLogintime');
        let nowTime = Date.now();
        if(lastLoginTime != null)
        {
            let loginInterval = (nowTime - lastLoginTime)/1000;

            if(loginInterval < 600){
                return 1;
            }
            else{
                this.removeLocalPassport();
                return 0;
            }
        }
        return 0;
    }

    static login(username, password, SuccessCallback, FailureCallback) {


        this.checkStatus();
        if(username === "admin" && password === "123")
        {
            localStorage.setItem('ebookUser',username);
            localStorage.setItem('ebookPassword',password);
            localStorage.setItem('ebookPrivilege',0);
            localStorage.setItem('ebookLogintime',Date.now());
            SuccessCallback();
        }
        else if(username === "shoperer" && password === "1234")
        {
            localStorage.setItem('ebookUser',username);
            localStorage.setItem('ebookPassword',password);
            localStorage.setItem('ebookPrivilege',1);
            localStorage.setItem('ebookLogintime',Date.now());
            SuccessCallback();
        }
        else if(username === "user" && password === "12345")
        {
            localStorage.setItem('ebookUser',username);
            localStorage.setItem('ebookPassword',password);
            localStorage.setItem('ebookPrivilege',2);
            localStorage.setItem('ebookLogintime',Date.now());
            SuccessCallback();
        }

        else{
            FailureCallback();
        }
    }

    static logout(SuccessCallBack){
        this.removeLocalPassport();
        SuccessCallBack();
    }




}

export default LoginPassport;