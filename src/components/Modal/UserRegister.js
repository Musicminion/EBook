import React from 'react';
import {Modal, Button, Form, Input, Checkbox, message} from 'antd';
import {checkUserExit, userRegister} from "../../service/userService";


//  [对话框]
//  [组件用途介绍]：用户注册的对话框，里面内嵌一个表格，用户填写完成注册的信息，然后确认后可以向后端注册
//  [组件使用场景]：登录页面的注册按钮，对接本组件
//  [功能详细介绍]：对话框常态是隐藏的，单机按钮打开对话框


const registerResult = (result , info) => {
    if(result ===0){
        message.success('注册成功啦！请登录 ~')
    }
    else{
        message.error('出错了/(ㄒoㄒ)/~~ ~ 原因可能是：' + info)
    }
}

const layout = {labelCol: {span: 5,}, wrapperCol: {span: 16,},};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label}是必填的项目哦 (*^▽^*)~',
    types: {
        email: '${label} 不是有效的，请仔细检查哦!', number: '${label} 不是有效的数字!',
    },
    number: {range: '${label}must be between ${min} and ${max}',},
};

const tailFormItemLayout = {
    wrapperCol: {xs: {span: 24, offset: 0,},
        sm: {span: 20, offset: 4,},},
};

class UserRegister extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            usernameValidate: "",
            usernameHelp: "",
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    usernameVerify = (data) => {
        if(data.target.value.length >= 6){
            this.setState({usernameValidate:"validating"});

            checkUserExit(data.target.value, (resp) => {
                console.log(resp);
                if(resp.status >=0){
                    this.setState({usernameValidate:"success",usernameHelp: "恭喜！用户名可用，赶紧注册吧~"});
                }
                else {
                    this.setState({usernameValidate:"error",usernameHelp: "用户名重复啦，请重新选择"});
                }
                //
            });
        }
        else
            this.setState({usernameValidate:"error",usernameHelp: "用户名需要六位以上才可以！"});
    }

    submitFrom = (values) => {
        console.log(values);
        // Register 函数从这里开始写
        userRegister(values,(data) => {
            registerResult(data.status,data.msg);
            this.hideModal();
        });
    };

    render() {
        const { visible } = this.state;
        return (
            <>
                <button className="loginFunction_button" onClick={this.showModal} type="button">
                    注册
                </button>
                <Modal
                    title="欢迎注册 EBook"
                    onCancel={this.handleCancel}
                    visible={visible}
                    footer={null}
                >
                    <Form {...layout} name="" onFinish={this.submitFrom} validateMessages={validateMessages}>
                        <Form.Item
                            hasFeedback name="username" label="用户名" validateMessages={validateMessages}
                            validateStatus={this.state.usernameValidate} help={this.state.usernameHelp} rules={[{ required: true,},
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (value) {
                                        if(value.length <= 5)
                                            return Promise.reject(new Error('用户名长度至少6位，请重新输入'));
                                        else{
                                            return Promise.resolve();
                                        }
                                    }
                                    return Promise.reject(new Error('请输入长度六位以上的用户名'));
                                },
                            }),
                        ]}
                        >
                            <Input onChange={this.usernameVerify} placeholder={"请填写你的账户名称"} />
                        </Form.Item>

                        <Form.Item
                            hasFeedback name="password" label="密码" validateMessages={validateMessages}
                            rules={[{required: true,},
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (value) {
                                            if(value.length <= 5){
                                                return Promise.reject(new Error('您输入的密码太短，请输入六位以上密码'));
                                            }
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('密码没有输入!请输入长度六位以上的密码'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder={"请填写你的密码"} />
                        </Form.Item>

                        <Form.Item
                            hasFeedback name="confirm" label="确认密码" dependencies={['password']}
                            rules={[{required: true,},
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (value && getFieldValue('password') === value) {
                                            if(value.length <= 5){
                                                return Promise.reject(new Error('您输入的密码太短，请输入六位以上密码'));
                                            }
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('您输入的两次密码不一致，请检查'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder={"请再一次填写你的密码"} />
                        </Form.Item>

                        <Form.Item name="email" label="电子邮件" rules={[{ type: 'email',required: true,}]}>
                            <Input placeholder={"请填写你的常用电子邮件"} />
                        </Form.Item>

                        <Form.Item name="phone" label="电话号码" rules={[{required: true,},]}>
                            <Input style={{width: '100%',}} placeholder={"请填写你的常用电话"} />
                        </Form.Item>

                        <Form.Item name="location" label="收货地址" rules={[{required: true,},]}>
                            <Input style={{width: '100%',}} placeholder={"请填写你的常用收货地址"} />
                        </Form.Item>

                        <Form.Item name="agreement" valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('需要接受条款')),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                我已阅读并同意EBook购物平台
                                <a href="/login/rules">服务条款</a>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
                            <Button type="primary" htmlType="submit">注册账户</Button>
                            <span> &nbsp;&nbsp;</span>
                            <Button onClick={this.hideModal}>取消</Button>
                        </Form.Item>
                    </Form>

                </Modal>

            </>
        );
    }
}
export default UserRegister;

