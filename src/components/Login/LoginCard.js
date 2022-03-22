import React from "react";
import {message, Button, Space, Input, Form, Checkbox} from 'antd';
import {UserRegister} from "./UserRegister";
import LoginPassport from "./LoginPassport";
import {history} from "../PublicHistory";
import {Icon} from "@fluentui/react";
import * as userService from '../../service/user'

const MesgBlankError = () => {
    message.error('用户名或密码不能空白哦，请检查一下~');
};

const MesgloginSucceed = () => {
    message.success('登录成功！')
}

const MesgUserInfoError = () => {
    message.error('用户名或密码错误有错误哦，请检查一下~');
}


class LoginCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loginUserName: '',
            loginPassword: ''
        }
    }

    //绑定表单的元素，实现用户输入与setState的同步
    userInfoSet(event,key){
        let userInfoObj = {};
        userInfoObj[key] = event.target.value;
        this.setState(userInfoObj);
    }

    //检查空表单，拒绝提交空表单，返回一个顶部通知信息
    //表单非空，则提交给loginPassport
    loginInputCheck(){
        //
        let userID=document.getElementById("userIDInput").value;
        let userPwd=document.getElementById("userPwdInput").value;
        if(userID===""||userPwd===""||userID==null||userPwd==null)
            MesgBlankError();
        else{
            LoginPassport.login(
                this.state.loginUserName,
                this.state.loginPassword,
                () => {
                // 登录成功时，跳转页面
                    MesgloginSucceed();
                    setTimeout("window.location.href=\"/\";",800);
                },
                () => {
                    // 登录成功时，跳转页面
                    // this.props.history.push('/');
                    MesgUserInfoError();
                },
            )
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                userService.login(values);
            }
        });
    };


    render() {
        return (
            <div className="loginCard_login">
                <p className="login_title">Login</p>
                <form>
                    <div className="inputBox">
                        <label>账号:</label>
                        <input
                            type="text"
                            id="userIDInput"
                            placeholder="用户名"
                            className="loginInput"
                            onInput={(event) => {
                                this.userInfoSet(event,'loginUserName')
                            }}
                        />
                    </div>
                    <div className="inputBox">
                        <label>密码:</label>
                        <input
                            type="password"
                            id="userPwdInput"
                            placeholder="密码"
                            className="loginInput"
                            // 响应用户的输入操作 用户名
                            onInput={(event) => {
                                this.userInfoSet(event,'loginPassword')
                            }}
                        />
                    </div>
                    <div className="loginFunction">
                        <button
                            className="loginFunction_button"
                            type="button"
                            onClick={()=>{
                                this.loginInputCheck();
                            }}
                        >
                            登录
                        </button>
                        <UserRegister/>
                    </div>
                    <p className="forget">忘记密码?
                        <a href="#" className="login_a">点击这里</a>
                    </p>
                </form>

            </div>
        );
    }
}

export default LoginCard;







//
//
// <Form>
//     <div className="inputBox">
//         <label>账号:</label>
//         <input type="text" placeholder="用户名" className="loginInput"/>
//     </div>
//     <div className="inputBox">
//         <label>密码:</label>
//         <input type="password" placeholder="密码" className="loginInput"/>
//     </div>
//     <div className="loginFunction">
//         <button className="loginFunction_button" type="button">登录</button>
//         <UserRegister/>
//     </div>
//     <p className="forget">忘记密码?
//         <a href="#" className="login_a">点击这里</a>
//     </p>
// </Form>