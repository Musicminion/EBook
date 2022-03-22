import React from "react";
import * as userService from '../../service/user'
import {history} from "../PublicHistory";

class LoginPassport extends React.Component{
    static login(username, password, SuccessCallback, FailureCallback) {
        localStorage.removeItem('ebookUser');
        localStorage.removeItem('ebookPassword');
        localStorage.removeItem('ebookPrivilege');

        if(username === "admin" && password === "123")
        {
            localStorage.setItem('ebookUser',username);
            localStorage.setItem('ebookPassword',password);
            localStorage.setItem('ebookPrivilege',0);
            SuccessCallback();
        }
        else if(username === "shoperer" && password === "1234")
        {
            localStorage.setItem('ebookUser',username);
            localStorage.setItem('ebookPassword',password);
            localStorage.setItem('ebookPrivilege',1);
            SuccessCallback();
        }
        else if(username === "user" && password === "12345")
        {
            localStorage.setItem('ebookUser',username);
            localStorage.setItem('ebookPassword',password);
            localStorage.setItem('ebookPrivilege',2);
            SuccessCallback();
        }

        else{
            FailureCallback();
        }
    }

    static logout(SuccessCallBack){
        localStorage.removeItem('ebookUser');
        localStorage.removeItem('ebookPassword');
        localStorage.removeItem('ebookPrivilege');
        SuccessCallBack();
    }
}

export default LoginPassport;