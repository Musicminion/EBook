import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import {Tabs, Form, Input, InputNumber, Button} from "antd";
import {ShopOutlined} from "@ant-design/icons";
import FileUploader from "../../components/Book/BookImgUploader";
import TextArea from "antd/es/input/TextArea";

const { TabPane } = Tabs;

class newBook extends React.Component{
    onFinish = (values: any) => {
        console.log('Success:', values);
    };

    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><ShopOutlined />新品发布</>} key="1">
                            <Form labelCol={{span: 2, offset: 1}} wrapperCol={{span: 10, offset: 0}}
                                  onFinish={this.onFinish}
                            >
                                <Form.Item label="书本封面上传" name="img" required>
                                    <FileUploader/>
                                </Form.Item>

                                <Form.Item label="书籍价格"  required >
                                    <InputNumber prefix="￥" step="0.01" min="0"
                                                 style={{width: 130,}} precision={2} defaultValue={0}
                                    />
                                </Form.Item>

                                <Form.Item label="书籍库存"  required >
                                    <InputNumber step="1" min="0" style={{width: 130,}} defaultValue={0}
                                    />
                                </Form.Item>

                                <Form.Item label="书本标题" name="displaytitle" required >
                                    <Input placeholder="用于关键词搜索，宣传展示的标题，尽可能丰富"/>
                                </Form.Item>
                                <Form.Item label="书本名称" name="bookname" required >
                                    <Input placeholder="用于归档备案，尽可能简洁，如:西游记"/>
                                </Form.Item>
                                <Form.Item label="书本ISBN" name="ISBN" required >
                                    <Input placeholder="样例:978-7-000-00000-0"/>
                                </Form.Item>

                                <Form.Item label="发货地点" name="departure" required >
                                    <Input placeholder="填写发货地点，尽可能简洁，如:上海"/>
                                </Form.Item>

                                <Form.Item label="作者" name="author" required >
                                    <Input placeholder="填写书本作者"/>
                                </Form.Item>

                                <Form.Item label="出版社" name="publisher" required >
                                    <Input placeholder="填写出版社名称，如:人民教育出版社"/>
                                </Form.Item>

                                <Form.Item label="详情描述" name="description" required >
                                    <TextArea rows={5} placeholder="填写书籍的详情介绍，内容目录等"/>
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        发布商品
                                    </Button>
                                </Form.Item>



                            </Form>

                        </TabPane>

                    </Tabs>


                </div>

                <div className="clearOnly_compact">

                </div>
                <div className="Pagefooter">
                    <p>CopyRight © 2022 AllRights Reserved.ALL Developed By ZhangZiqian.</p>
                </div>
            </div>
        );
    }
}

export default newBook;