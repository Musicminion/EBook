import React from 'react';
import {Result, Button, notification} from 'antd';
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../asset/background/eBooklogo.svg";
import {Link} from "react-router-dom";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import {urlDecoder} from "../../utils/urlDecoder";
import {closeWebSocket, createWebSocket} from "../../utils/websocket";
import LoginPassport from "../../components/Login/LoginPassport";

const reminderInfoCheck = (type, content) => {
    notification[type]({
        message: '消息',
        description:
            content,
    });
};

class purchaseSuccess extends React.Component{
    orderUUID = "";
    socketURL = "";
    constructor() {
        super();
        let url = decodeURI(window.location.search); //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        let theRequest = urlDecoder(url);
        console.log(theRequest);
        if(theRequest["orderUUID"]!= null ){
            this.orderUUID = theRequest["orderUUID"];
            let SHA256 = require("crypto-js/sha256");
            this.socketURL = "ws://localhost:8080/websocket/transfer/" + SHA256(LoginPassport.getUserName());
            createWebSocket(this.socketURL,
                (info) => {
                    let jsonData = JSON.parse(info.data);

                    if(jsonData.websocketCode === 0){
                        reminderInfoCheck('success', jsonData.websocketMsgInfo);
                    }
                    else if(jsonData.websocketCode === 1){
                        reminderInfoCheck('warning', jsonData.websocketMsgInfo);
                    }
                    closeWebSocket();
                }
            );
        }
    }
    componentWillUnmount(){
        //closeWebSocket();
    }

    render() {
        return(
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <div className="PayComfirm_logoArea">
                        <img src={LogoEBook} className="PayComfirm_logo"/>
                    </div>

                    <Result
                        status="success"
                        title="收到订单"
                        subTitle={"我们已经收到了您的订单，如果已经处理，您将会在此页面收到通知！"}
                        extra={[
                            <Link
                                to={"/"}
                            >
                                <Button type="primary" key="console">
                                    回到首页
                                </Button>
                            </Link>,
                        ]}
                    />

                    <div className="desc">
                        <Paragraph>
                            <Text strong style={{fontSize: 16,}}>
                                注意：
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            <Text>您的订单的UUID是：</Text>
                            <Text style={{color: "hotpink"}}>{this.orderUUID}</Text>
                            <Text> 如果您长时间在此页面没有收到通知，那么请前往您的订单页面查询结果，如果仍然异常，
                                请提供此UUID，并立刻联系管理员处理您的订单！
                            </Text>
                        </Paragraph>

                    </div>

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



export default purchaseSuccess;

//
// export default () => (
//
// );


