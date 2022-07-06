import React from 'react';
import LoginStaticBackground from "../../components/Login/LoginStaticBackground";
import '../../css/login.css'
import '../../css/login_childPage.css'
import '../../css/Common.css'
import Hellologin from "../../asset/img/login/hello.png";
import {Input} from "antd";
import TextArea from "antd/es/input/TextArea";

const onChange = e => {
    console.log('Change:', e.target.value);
};

class LoginPageFeedBack extends React.Component{
    render() {
        return (
            <>
                <LoginStaticBackground/>
                <div className="login_register_bgpic">
                    <img src={Hellologin} id="login_register_hello" alt="Image can't display!"/>
                </div>
                <div className="MainContentsCard">
                    <h2>反馈</h2>
                    <p>请输入反馈的标题</p>
                    <Input showCount maxLength={20} onChange={onChange} placeholder="请填写反馈的主题"/>

                    <p>请输入反馈内容</p>
                    <TextArea
                        showCount maxLength={100} onChange={onChange}
                        placeholder="感谢您的反馈与支持,欢迎在这里留言" style={{height:'45vh'}}
                    />
                    <button className="CommonBottom" id="LoginFeedBackButtom">提交</button>
                </div>

                <div className="login_childfooter">
                    <p>CopyRight ©2022 All Rights Reserved.</p>
                </div>
            </>

        );
    }
}

export default LoginPageFeedBack;