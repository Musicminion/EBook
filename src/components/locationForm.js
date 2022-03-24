import React from "react";
import {Form, Input} from "antd";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 3,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
};

class LocationForm extends React.Component{
    render() {
        return (
            <div>
                <Form {...formItemLayout}>
                    <Form.Item
                        name="phonenumber"
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
            </div>
        );
    }
}

export default LocationForm;