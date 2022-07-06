// 注意本页面负责登录界面的背景渲染 Login子站点使用的时候一定要将标签：
// <LoginStaticBackground/> 放在这个页面容器的第一个位置 完成渲染
// 否则CSS选择器可能不能识别！ 导致元素错位！
// 注意！ Login的子站点使用LoginChildPage.css 使Hello元素居中！
// 警告！ LoginChildPage.css必须在Login.css后面引入！
// By Zhang Ziqian

import React from 'react';
import Logologin from '../../asset/img/login/logo.svg'
import {Link} from "react-router-dom";

class LoginStaticBackground extends React.Component{
    render() {
        return(
            <>
                <div className="colorElem"></div>
                <div className="colorElem"></div>
                <div className="colorElem"></div>

                <div className="login_logo">
                    <img src={Logologin} id="login_logoPic" alt="Image can't display!"/>
                </div>

                <div className="topBar">
                    <Link
                        to={{pathname:'/'}}>
                        <button className="topBarButton">eBook</button>
                    </Link>
                    <Link
                        to={{pathname:'/login/feedback'}}>
                        <button className="topBarButton">反馈</button>
                    </Link>
                    <Link
                        to={{pathname:'/login/rules'}}>
                        <button className="topBarButton">条款</button>
                    </Link>

                    <Link
                        to={{pathname:'/login/about'}}>
                        <button className="topBarButton">关于</button>
                    </Link>
                </div>

            </>
        );
    }
}

export default LoginStaticBackground;