import React from "react";
import TopBar from "../../../components/TopBar/TopBar";
import {DatePicker, Table, Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;


class UserConsumption extends React.Component{

    onChange = (date, dateString) => {
        console.log(date, dateString);
    };


    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />用户消费统计表</>} key="1">
                            <span>统计范围：</span><RangePicker onChange={this.onChange}/>


                        </TabPane>
                        <TabPane tab={<><UnorderedListOutlined />用户消费统计图</>} key="2">

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


export default UserConsumption;