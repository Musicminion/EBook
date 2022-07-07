import React from "react";
import {userCheckSession, userLogin, userLogout} from "../../service/userService";

//  [组件用途介绍]：登录令牌，负责前端和LocalStorage打交道的组件
//  [组件使用场景]：登录的时候，登录成功后往本地写入基础的用户信息，便于页面的其他组件获取当前用户的用户名、权限信息
//  [功能详细介绍]：这个类不包括成员变量，所有的函数都是跟浏览器本地存储 LocalStorage 打交道的，功能包括
//               移除令牌、获取用户名、权限、昵称、退出登录、检查登录状态的功能

const LocalToken = {
    USERNAME : "ebookUser",
    NICKNAME : "ebookNickname",
    PRIVILEGE : "ebookPrivilege",
    Logintime : "ebookLogintime",
    TELEPHONE : "ebookTelephone",
    USERADDRESS : "ebookAddress",
}


class LoginPassport extends React.Component{
    // 令牌增删改查相关的函数 包括发放、更新、移除令牌、查询某一个的参数

    // 移除令牌
    static removeLocalPassport(){
        localStorage.removeItem(LocalToken.USERNAME);
        localStorage.removeItem(LocalToken.PRIVILEGE);
        localStorage.removeItem(LocalToken.NICKNAME);
        localStorage.removeItem(LocalToken.Logintime);
        localStorage.removeItem(LocalToken.TELEPHONE);
        localStorage.removeItem(LocalToken.USERADDRESS);
    }

    // ---------------查--------询--------数--------据----------------
    static getUserName(){
        return localStorage.getItem(LocalToken.USERNAME);
    }
    static getPrivilege(){
        return localStorage.getItem(LocalToken.PRIVILEGE);
    }

    static getNickName(){
        return localStorage.getItem(LocalToken.NICKNAME);
    }
    static getUserTelephone(){
        return localStorage.getItem(LocalToken.TELEPHONE);
    }

    static getUserAddress(){
        return localStorage.getItem(LocalToken.USERADDRESS);
    }

    // -------------------------------------------------------------

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