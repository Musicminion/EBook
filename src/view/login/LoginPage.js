import React from 'react';
import '../../css/login.css';

import LoginStaticBackground from "../../components/Login/LoginStaticBackground";
import Hellologin from "../../asset/img/login/hello.png";
import LoginCard from "../../components/Login/LoginCard";
import loginPassport from "../../components/Login/LoginPassport";


class LoginPage extends React.Component{
    componentDidMount() {
        loginPassport.checkLastLogin(() => {
            window.location.href = "/";
        })
    }

    render() {
        return (
            <div className="loginContainer">

                <LoginStaticBackground/>

                <div className="hello_logo">
                    <img src={Hellologin} id="login_hello" alt="Image can't display!"/>
                </div>

                <div className="BgCircle">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>

                <LoginCard/>

                <div className="footer">
                    <p>CopyRight ZhangZiqian,All Rights Reserved.</p>
                </div>

            </div>
        );
    }

}

export default LoginPage;