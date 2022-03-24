import React from 'react';
import TopBar from "../components/TopBar";
import {Col, Form, Input, Row, Steps, Tabs} from "antd";
import "../css/PayComfirm.css"
import LogoEBook from "../asset/background/ebookLogo.svg";
import BookRow from "../components/Book/BookRow";
import {AppstoreOutlined} from "@ant-design/icons";
import LocationForm from "../components/locationForm";

const { Step } = Steps;
const { TabPane } = Tabs;

//

//



class PayComfirm extends React.Component{
    constructor() {
        super();
        this.state = {
            bookID: 0,
            bookNum: 0,
        }
    }

    componentDidMount() {
        let url = decodeURI(window.location.search);
        let theRequest = new Object();
        if ( url.indexOf( "?" ) != -1 ) {
            let str = url.substr( 1 );
            let strs = str.split( "&" );
            for ( let i = 0; i < strs.length; i++ ) {
                theRequest[strs[i].split("=" )[0]] = (strs[ i ].split("=" )[1]);
            }

            let BookIDnum = parseInt(theRequest['bookid']);
            let BookPurchasenum = parseInt(theRequest['bookbuynum']);

            // 立即提交，更新数据执行
            setTimeout(() => {
                this.setState({
                    bookID: BookIDnum,
                    bookNum: BookPurchasenum,
                });
            }, 0);

        }
    }

    render() {
        return (
            <div className="eBookPageContainer">
                <TopBar/>
                <div className="MainContentsCard_compact">
                    <div className="PayComfirm_TopArea">
                        <div className="PayComfirm_logoArea">
                            <img src={LogoEBook} className="PayComfirm_logo"></img>
                        </div>
                        <div className="PayComfirm_StepArea">
                            <Steps current={0} className="PayComfirm_Step">
                                <Step title="确认订单"/>
                                <Step title="付款"/>
                                <Step title="确认收货"/>
                                <Step title="评价"/>
                            </Steps>
                        </div>
                    </div>

                    <div className="PayComfirm_ContentArea">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<><AppstoreOutlined/>填写地址</>} key="1">
                                <Row>
                                    <Col span={2}>

                                    </Col>
                                    <Col span={22}>
                                        <LocationForm/>
                                    </Col>
                                </Row>

                            </TabPane>
                        </Tabs>

                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<><AppstoreOutlined/>确认订单信息</>} key="1">
                                <BookRow bookID="2"></BookRow>

                            </TabPane>
                        </Tabs>

                        <p>{this.state.bookID}</p>
                        <p>{this.state.bookNum}</p>

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

export default PayComfirm;