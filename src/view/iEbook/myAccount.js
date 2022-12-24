import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../asset/background/eBooklogo.svg";
import {Button, Checkbox, Col, Form, Image, Input, Row, Tabs, Upload} from "antd";
import {InboxOutlined, ShoppingCartOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import OrderPayTable from "../../components/Table/orderPayTable";
import TabPane from "@ant-design/pro-card/es/components/TabPane";

import ImgCrop from 'antd-img-crop';
import {userInfoRequest} from "../../service/userService";


class MyAccount extends React.Component{
    constructor() {
        super();

        this.state = {
            tableInfo : {
                avatarBase64: "",
                username: "",
                passwordOriginal: "",
                passwordNew: "",
                passwordNewConfirm: "",
                name: "",
                email: "",
                useraddress: "",
                telephone: "",
            }
        }
        userInfoRequest((resp)=>{
            console.log(resp);
            let tmp = this.state.tableInfo;
            tmp.avatarBase64 = resp.data.userIcon.iconBase64;
            tmp.username = resp.data.username;
            tmp.telephone = resp.data.telephone;
            tmp.email = resp.data.email;
            this.setState({tableInfo: tmp})
        });
    }


    render() {

        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <div className="PayComfirm_logoArea">
                        <img src={LogoEBook} className="PayComfirm_logo" alt={"logo"}/>
                    </div>

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UserOutlined/>我的账户信息</>} key="1">

                            <Form>
                                <Form.Item label="原始头像">
                                    <Image src={this.state.tableInfo.avatarBase64} width={100} preview={false}/>
                                </Form.Item>
                                <Form.Item label="更换头像">
                                    <ImgCrop rotate>
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            // beforeUpload={beforeUpload}
                                            // onChange={handleChange}
                                        >{'+ Upload'}
                                        </Upload>
                                    </ImgCrop>
                                </Form.Item>
                                <Form.Item label="用户名">
                                    {this.state.tableInfo.username}
                                </Form.Item>
                                <Form.Item label="电话号码">
                                    {this.state.tableInfo.telephone}
                                </Form.Item>
                                <Form.Item label="电子邮件">
                                    {this.state.tableInfo.email}
                                </Form.Item>

                            </Form>

                        </TabPane>
                    </Tabs>
                </div>
                <div className="clearOnly_compact"></div>
                <div className="Pagefooter">
                    <p>CopyRight © 2022 AllRights Reserved.ALL Developed By ZhangZiqian.</p>
                </div>
            </div>

        );

    }
}

export default MyAccount;
