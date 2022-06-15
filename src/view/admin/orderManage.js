import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import {Table, Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import OrderItemTable from "../../components/Table/orderItemTable";

const { TabPane } = Tabs;

class OrderManage extends React.Component{

    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />查看订单内容</>} key="1">

                            {/*<OrderItemTable idAdmin={1}/>*/}
                        </TabPane>

                        <TabPane tab={<><UnorderedListOutlined />仅查看子项目</>} key="2">
                            <OrderItemTable idAdmin={1}/>
                        </TabPane>
                    </Tabs>
                </div>


            </div>
        );
    }
}

export default OrderManage;