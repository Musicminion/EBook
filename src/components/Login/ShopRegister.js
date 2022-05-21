import '../../css/login_childPage.css'
import '../../css/Common.css'
import React from "react";
import Hellologin from "../../asset/img/login/hello.png";
import LoginStaticBackground from "./LoginStaticBackground";
import {Button, Form, Input} from "antd";


class RegisterPage extends React.Component{

    render() {
        return(
            <div className="RegisterPageContainer">
                <LoginStaticBackground/>

                <div className="login_register_bgpic">
                    <img src={Hellologin} id="login_register_hello" alt="Image can't display!"/>
                </div>

                <div className="MainContentsCard">
                    <Form
                        name="basic"
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 2 }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );
    }
}



export default RegisterPage;