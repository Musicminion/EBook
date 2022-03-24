import React from 'react';
import TopBar from "../components/TopBar";
import {Button, Card, Col, Form, Input, Row, Steps, Tabs} from "antd";
import "../css/PayComfirm.css"
import LogoEBook from "../asset/background/ebookLogo.svg";
import BookRow from "../components/Book/BookRow";
import {AppstoreOutlined} from "@ant-design/icons";
import LocationForm from "../components/locationForm";
import { Radio } from 'antd';



const { Step } = Steps;
const { TabPane } = Tabs;

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
                            <img src={LogoEBook} className="PayComfirm_logo"/>
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
                                <Radio.Group className="userLocationButtonGroup" defaultValue="a" size="large">
                                    <Button value="a" className="userLocationButton">
                                        <Card
                                            title={<p className="userLocationTitle">上海(张子谦收货)</p>}
                                            className="userLocationCard"
                                            size={"small"}
                                        >
                                            <p className="userLocationPlace">地址：上海交通大学闵行校区</p>
                                            <p className="userPhoneNumber">联系电话：180-0000-0000</p>
                                        </Card>
                                    </Button>

                                    <Button value="b" className="userLocationButton">
                                        <Card
                                            title={<p className="userLocationTitle">上海(小明收货)</p>}
                                            className="userLocationCard"
                                            size={"small"}
                                        >
                                            <p className="userLocationPlace">地址：上海</p>
                                            <p className="userPhoneNumber">联系电话：180-0000-0000</p>
                                        </Card>
                                    </Button>

                                    <Button value="b" className="userLocationButton">
                                        <Card
                                            title={<p className="userLocationTitle">上海(小明收货)</p>}
                                            className="userLocationCard"
                                            size={"small"}
                                        >
                                            <p className="userLocationPlace">地址：上海</p>
                                            <p className="userPhoneNumber">联系电话：180-0000-0000</p>
                                        </Card>
                                    </Button>

                                    <Button value="b" className="userLocationButton">
                                        <Card
                                            title={<p className="userLocationTitle">上海(小明收货)</p>}
                                            className="userLocationCard"
                                            size={"small"}
                                        >
                                            <p className="userLocationPlace">地址：上海</p>
                                            <p className="userPhoneNumber">联系电话：180-0000-0000</p>
                                        </Card>
                                    </Button>
                                </Radio.Group>

                                <Row>
                                    <Col span={20}>

                                    </Col>
                                    <Col span={2}>
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