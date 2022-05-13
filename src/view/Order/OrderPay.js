import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../asset/background/ebookLogo.svg";
import {Steps, Tabs} from "antd";
import {AppstoreOutlined} from "@ant-design/icons";

const { Step } = Steps;
const { TabPane } = Tabs;

class OrderPay extends React.Component{



    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <div className="PayComfirm_TopArea">
                        <div className="PayComfirm_logoArea">
                            <img src={LogoEBook} className="PayComfirm_logo"/>
                        </div>
                        <div className="PayComfirm_StepArea">
                            <Steps current={1} className="PayComfirm_Step">
                                <Step title="确认订单"/>
                                <Step title="付款"/>
                                <Step title="确认收货"/>
                                <Step title="评价"/>
                            </Steps>
                        </div>
                    </div>
                    <div className="PayComfirm_ContentArea">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<><AppstoreOutlined/>确认订单并付款</>} key="1">

                            </TabPane>
                        </Tabs>
                    </div>

                </div>

                <div className="clearOnly_compact">

                </div>

                <div className="Pagefooter">
                    <p>CopyRight ©2022 All Rights Reserved.Developed By Zhang Ziqian.</p>
                </div>

            </div>

        );
    }
}

export default OrderPay;