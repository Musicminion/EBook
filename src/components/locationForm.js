import React from "react";
import {Button, Form, Input, Modal} from "antd";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 12,
        },
    },
};

class LocationForm extends React.Component{
    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            loading: false,
            visible: true,
        });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };


    render() {
        return (
            <>
                <Button type="primary" onClick={this.showModal}>添加地址</Button>

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
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="phonenumber"
                            label="电话号码"
                            rules={[{required: true,},]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="postcode"
                            label="邮政编码"
                            rules={[{required: true,},]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="place"
                            label="详细地址"
                            rules={[{required: true,},]}
                        >
                            <Input.TextArea allowClear showCount/>
                        </Form.Item>
                    </Form>

                </Modal>

            </>
        );
    }
}

export default LocationForm;