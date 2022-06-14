import React from "react";
import {message} from "antd";
import {postRequest} from "../../utils/ajax";
import {apiURL} from "../../config/BaseConfig";
import {userCheckSession, userLogin, userLogout} from "../../service/userService";
// import config from "config";

const LocalToken = {
    USERNAME : "ebookUser",
    NICKNAME : "ebookNickname",
    PRIVILEGE : "ebookPrivilege",
    Logintime : "ebookLogintime"
}

class LoginPassport extends React.Component{
    // 令牌增删改查相关的函数 包括发放、更新、移除令牌、查询某一个的参数

    // 移除令牌
    static removeLocalPassport(){
        localStorage.removeItem(LocalToken.USERNAME);
        localStorage.removeItem(LocalToken.PRIVILEGE);
        localStorage.removeItem(LocalToken.NICKNAME);
        localStorage.removeItem(LocalToken.Logintime);
    }

    static getUserName(){
        return localStorage.getItem(LocalToken.USERNAME);
    }

    static getPrivilege(){
        return localStorage.getItem(LocalToken.PRIVILEGE);
    }

    static getNickName(){
        return localStorage.getItem(LocalToken.NICKNAME);
    }

    // 用户的业务逻辑层面
    // 令牌登录时候的操作
    static login(loginInfo, SuccessCallback, FailureCallback) {
        if(this.checkStatus() ===1){
            SuccessCallback();
        }
        else{
            userLogin(loginInfo,SuccessCallback,FailureCallback,LocalToken);
        }
    }

    static logout(SuccessCallBack) {
        userLogout(SuccessCallBack);
    }

    static checkSession(callBack){
        userCheckSession(callBack);
    }

    static checkLastLogin(successfulCallBack){
        if(this.checkStatus() === 1){
            successfulCallBack();
        }
    }

    static checkPrivilege(){
        if(this.checkStatus() === 1)
        {
            return localStorage.getItem(LocalToken.PRIVILEGE);
        }
        else {
            return 3;
        }
    }

    static checkStatus(){
        let lastLoginTime = localStorage.getItem(LocalToken.Logintime);
        let nowTime = Date.now();
        if(lastLoginTime != null)
        {
            let loginInterval = (nowTime - lastLoginTime) / 1000;

            if(loginInterval < 600){
                localStorage.setItem(LocalToken.Logintime,Date.now());
                // 再次设置过期时间
                return 1;
            }
            else{
                this.removeLocalPassport();
                return 0;
            }
        }
        return 0;
    }
}

export default LoginPassport;