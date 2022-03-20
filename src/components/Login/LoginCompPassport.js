import React from "react";
import * as userService from '../../service/user'


class LoginCompPassport extends React.Component{

    static login(username, password, SuccessCallback,FailureCallback) {



            // let data = {
            //     USERNAME: username,
            //     PASSWORD: password
            // };
            // userService.login(data,SuccessCallback,FailureCallback);


        // post('http://localhost:8000/login', {
        //     account: username,
        //     password: password
        // })
        //     .then((res) => {
        //         if (res) {
        //             // this.context.router.push('/');
        //             // 登录成功
        //             // 将登录成功之后的操作给调用者处理
        //             SuccessCallback();
        //
        //             // sessionStorage.setItem('access_token',)
        //             window.location.href="/";
        //             //
        //
        //         } else {
        //             alert('登录失败，账号或密码错误');
        //             // 登录失败
        //             // 这里简单弹出一个消息
        //             FailureCallback();
        //         }
        //     })
    }
}

export default LoginCompPassport;