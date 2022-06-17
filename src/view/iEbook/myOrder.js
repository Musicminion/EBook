import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import {Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import OrderTable from "../../components/Table/orderTable";
import OrderItemTable from "../../components/Table/orderItemTable";


const { TabPane } = Tabs;
class MyOrder extends React.Component{


    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />查看所有订单项</>} key="1">
                            <OrderTable idAdmin={0}/>
                        </TabPane>

                        <TabPane tab={<><UnorderedListOutlined />仅查看子项目</>} key="2">
                            <OrderItemTable idAdmin={0}/>
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

export default MyOrder