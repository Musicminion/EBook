import {apiURL} from "../config/BaseConfig";
import {postRequest, postRequestReturnCallback} from "../utils/ajax";
import {message} from "antd";
import LoginPassport from "../components/Login/LoginPassport";
import loginPassport from "../components/Login/LoginPassport";

export const userLogin = (loginInfo, SuccessCallback, FailureCallback, LocalToken) => {
    const url = apiURL + "/login";
    postRequest(url, loginInfo,
        (respdata) => {
            if (respdata.status >= 0) {
                localStorage.setItem(LocalToken.USERNAME,respdata.data.username);
                localStorage.setItem(LocalToken.NICKNAME, respdata.data.name);
                localStorage.setItem(LocalToken.PRIVILEGE,respdata.data.privilege);
                localStorage.setItem(LocalToken.USERADDRESS,respdata.data.useraddress);
                localStorage.setItem(LocalToken.TELEPHONE,respdata.data.telephone);
                localStorage.setItem(LocalToken.Logintime,Date.now());
                SuccessCallback();
            } else {
                FailureCallback(respdata.msg);
            }
        }
    );
}

export const userLogout = (SuccessCallBack) => {
    const url = apiURL + "/logout";
    const callback = (respdata) => {
        if(respdata.status >= 0) {
            LoginPassport.removeLocalPassport();
            message.success("您已经安全退出！"+ respdata.data.timeInfo);
            setTimeout(SuccessCallBack,20000);
        }
        else{
            message.error(respdata.msg);
        }
    };
    postRequest(url, {}, callback);
}

export const userCheckSession = (callback) => {
    const url = apiURL +"/checkSession";
    postRequest(url, {}, callback);
};


export const userRegister = (registerInfo, callBack) => {
    const url = apiURL + "/user/register";

    postRequest(url, registerInfo, callBack);
}


export const userInfoRequest = (callBack) => {
    const url = apiURL + "/user/queryMeInfo";
    let user = loginPassport.getUserName();

    let obj = {
        username: user
    };

    postRequest(url, obj, callBack);
}

export const checkUserExit = (username,callBack) => {
    const url = apiURL + "/user/checkUserExit";
    let usernameInfo = {
        username: username,
    };

    postRequest(url,usernameInfo, callBack);
}