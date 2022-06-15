import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import {Tabs, Form} from "antd";
import {ShopOutlined} from "@ant-design/icons";
import FileUploader from "../../components/Book/BookImgUploader";

const { TabPane } = Tabs;

class newBook extends React.Component{

    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><ShopOutlined />新品发布</>} key="1">

                            <Form
                                labelCol={{
                                    span: 0,
                                }}
                            >
                                <Form.Item label="Photos" name="书本封面上传">
                                    {/*<AliyunOSSUpload />*/}

                                    <FileUploader/>
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