import React from "react";
import {Button, Form, Input, Modal} from "antd";

//  [对话框]
//  [组件用途介绍]：用户支付订单前的，如果修改地址将会打开的对话框，对话框需要与父组件交互
//  [组件使用场景]：用户支付订单的页面
//  [功能详细介绍]：对话框常态是隐藏的，单机按钮打开对话框

const formItemLayout = {
    labelCol: {xs: {span: 24,}, sm: {span: 6,},},
    wrapperCol: {xs: {span: 24,}, sm: {span: 12,},},
};

class UserLocation extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            receivename: this.props.receivename,
            phonenumber: this.props.phonenumber,
            postcode: this.props.postcode,
            receiveaddress: this.props.receiveaddress,
            loading: false,
            visible: false,
        };
    }

    showModal = () => {
        this.setState({
            loading: false,
            visible: true,
        });
    };

    // showModal = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // };

    handleOk = () => {
        this.props.confirmChange(
            this.state.receivename,
            this.state.phonenumber,
            this.state.postcode,
            this.state.receiveaddress,
        );
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 0);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    nameChange = ({ target: { value } },typeNum) => {
        switch (typeNum) {
            case 1:
                this.setState({ receivename: value});break;
            case 2:
                this.setState({ phonenumber: value});break;
            case 3:
                this.setState({ postcode: value}); break;
            case 4:
                this.setState({receiveaddress: value});break;
            default:
                break;
        }
    }

    render() {
        return (
            <>
                <Button type="primary" onClick={this.showModal}>修改信息</Button>

                <Modal
                    visible={this.state.visible}
                    title="增加地址信息"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            确认
                        </Button>,
                    ]}
                >
                    <Form {...formItemLayout}>
                        <Form.Item
                            name="receivername"
                            label="收货人姓名"
                            rules={[{required: true,},]}
                            onChange={(data) => this.nameChange(data,1)}
                        >
                            <Input defaultValue={this.state.receivename}/>
                        </Form.Item>
                        <Form.Item
                            name="phonenumber"
                            label="电话号码"
                            rules={[{required: true,},]}
                            onChange={(data) => this.nameChange(data,2)}
                        >
                            <Input defaultValue={this.state.phonenumber}/>
                        </Form.Item>

                        <Form.Item
                            name="postcode"
                            label="邮政编码"
                            rules={[{required: true,},]}
                            onChange={(data) => this.nameChange(data,3)}
                        >
                            <Input maxLength={6} defaultValue={this.state.postcode}/>
                        </Form.Item>

                        <Form.Item
                            name="place"
                            label="详细地址"
                            rules={[{required: true,},]}
                            onChange={(data) => this.nameChange(data,4)}
                        >
                            <Input.TextArea
                                allowClear
                                showCount
                                maxLength={80}
                                defaultValue = {this.state.receiveaddress}
                            />
                        </Form.Item>
                    </Form>

                </Modal>

            </>
        );
    }
}

export default UserLocation;