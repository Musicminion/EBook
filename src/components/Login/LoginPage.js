import React from 'react';
import '../../css/login.css';

import LoginCompStaticBackground from "./LoginCompStaticBackground";
import Hellologin from "../../asset/img/login/hello.png";
import LoginCompLoginCard from "./LoginCompLoginCard";


class LoginPage extends React.Component{
    render() {
        return (
            <div className="loginContainer">

                <LoginCompStaticBackground/>

                <div className="hello_logo">
                    <img src={Hellologin} id="login_hello" alt="Image can't display!"/>
                </div>

                <div className="BgCircle">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>

                <LoginCompLoginCard/>

                <div className="footer">
                    <p>CopyRight ©2022 All Rights Reserved.</p>
                </div>

            </div>
        );
    }

}

export default LoginPage;