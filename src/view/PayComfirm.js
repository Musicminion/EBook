import React from 'react';
import TopBar from "../components/TopBar/TopBar";
import {Button, Card, Col, Form, Input, Row, Steps, Tabs} from "antd";
import "../css/PayComfirm.css"
import LogoEBook from "../asset/background/ebookLogo.svg";
import BookRow from "../components/Book/BookRow";
import {AppstoreOutlined} from "@ant-design/icons";
import LocationForm from "../components/locationForm";
import { Radio } from 'antd';
import BookRowHeader from "../components/Book/BookRowHeader";
import BookOrderRow from "../components/Book/BookOrderRow";
import {AllBooks} from "../components/Book/tmpBookData";
import LoginPassport from "../components/Login/LoginPassport";
import {userInfoRequest} from "../service/userService";



const { Step } = Steps;
const { TabPane } = Tabs;

// 注意 这个页面只能下单单个商品！不能下单多个商品
class PayComfirm extends React.Component{
    constructor() {
        super();
        this.state = {
            bookID: '1',
            bookNum: 1,
            allBookPrice: 0,
            receivename: LoginPassport.getUserName(),
            phonenumber : "",
            postcode: "400000",
            receiveaddress: "",
        }

        // 解析url的参数
        let url = decodeURI(window.location.search);
        let theRequest = {};
        if ( url.indexOf( "?" ) !== -1 ) {
            let str = url.substr( 1 );
            let strs = str.split( "&" );
            for ( let i = 0; i < strs.length; i++ ) {
                theRequest[strs[i].split("=" )[0]] = (strs[ i ].split("=" )[1]);
            }

            let BookIDnum = theRequest['bookid'];
            let BookPurchasenum = Number(theRequest['bookbuynum']);

            let allBookPrice = Number(AllBooks[Number(BookIDnum)].bookPrice) * Number(BookPurchasenum);

            // 立即提交，更新数据执行
            setTimeout(() => {
                this.setState({
                    bookID: BookIDnum,
                    bookNum: BookPurchasenum,
                    allBookPrice:allBookPrice,
                });
            }, 0);
        }

        let that = this;
        // 请求用户的信息接口：
        userInfoRequest((respdata) => {
            console.log(respdata);
            that.setState({
                phonenumber : respdata.data.telephone,
                receiveaddress : respdata.data.useraddress
            });
        });
        // this.setSelfState =this.setSelfState.bind(this);
        this.infoChange = this.infoChange.bind(this);
    }

    componentDidMount() {

    }

    infoChange(receivename, phonenumber, postcode, receiveaddress){
        this.setState({
            receivename: receivename,
            phonenumber: phonenumber,
            postcode: postcode,
            receiveaddress: receiveaddress,
        });
    }

    render() {
        if(this.state.bookID!=null && this.state.bookNum!=null && this.state.allBookPrice!=null)
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
                                <TabPane tab={<><AppstoreOutlined/>订单确认</>} key="1">
                                    <h2>请确认订单信息</h2>
                                    <Card size={"small"} title={"收件人："+this.state.receivename} style={{ width: 400 }}>
                                        <p>联系方式：{this.state.phonenumber}</p>
                                        <p>邮政编码：{this.state.postcode}</p>
                                        <p>收件地址：{this.state.receiveaddress}</p>
                                    </Card>

                                    {/*<Card*/}
                                    {/*    title={<p className="userLocationTitle">上海(张子谦收货)</p>}*/}
                                    {/*    className="userLocationCard"*/}
                                    {/*    size={"small"}*/}
                                    {/*>*/}
                                    {/*    <p className="userLocationPlace">地址：上海交通大学闵行校区</p>*/}
                                    {/*    <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
                                    {/*</Card>*/}

                                    {/*<Radio.Group className="userLocationButtonGroup" defaultValue="a" size="large">*/}
                                    {/*    <Button value="a" className="userLocationButton">*/}
                                    {/*        <Card*/}
                                    {/*            title={<p className="userLocationTitle">上海(张子谦收货)</p>}*/}
                                    {/*            className="userLocationCard"*/}
                                    {/*            size={"small"}*/}
                                    {/*        >*/}
                                    {/*            <p className="userLocationPlace">地址：上海交通大学闵行校区</p>*/}
                                    {/*            <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
                                    {/*        </Card>*/}
                                    {/*    </Button>*/}

                                    {/*    <Button value="b" className="userLocationButton">*/}
                                    {/*        <Card*/}
                                    {/*            title={<p className="userLocationTitle">上海(小明收货)</p>}*/}
                                    {/*            className="userLocationCard"*/}
                                    {/*            size={"small"}*/}
                                    {/*        >*/}
                                    {/*            <p className="userLocationPlace">地址：上海</p>*/}
                                    {/*            <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
                                    {/*        </Card>*/}
                                    {/*    </Button>*/}

                                    {/*    <Button value="b" className="userLocationButton">*/}
                                    {/*        <Card*/}
                                    {/*            title={<p className="userLocationTitle">上海(小明收货)</p>}*/}
                                    {/*            className="userLocationCard"*/}
                                    {/*            size={"small"}*/}
                                    {/*        >*/}
                                    {/*            <p className="userLocationPlace">地址：上海</p>*/}
                                    {/*            <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
                                    {/*        </Card>*/}
                                    {/*    </Button>*/}

                                    {/*    <Button value="b" className="userLocationButton">*/}
                                    {/*        <Card*/}
                                    {/*            title={<p className="userLocationTitle">上海(小明收货)</p>}*/}
                                    {/*            className="userLocationCard"*/}
                                    {/*            size={"small"}*/}
                                    {/*        >*/}
                                    {/*            <p className="userLocationPlace">地址：上海</p>*/}
                                    {/*            <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
                                    {/*        </Card>*/}
                                    {/*    </Button>*/}
                                    {/*</Radio.Group>*/}

                                    <Row>
                                        <Col span={20}>

                                        </Col>
                                        <Col span={2}>
                                            <LocationForm confirmChange = {this.infoChange}/>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </Tabs>

                            <Tabs defaultActiveKey="1">
                                <TabPane tab={<><AppstoreOutlined/>确认订单信息</>} key="1">
                                    <BookRowHeader/>

                                    <BookOrderRow
                                        bookID={this.state.bookID}
                                        buynum={this.state.bookNum}
                                    />
                                </TabPane>
                            </Tabs>

                            {/*<Row>*/}
                            {/*    <Col span={18}>*/}

                            {/*    </Col>*/}
                            {/*    <Col span={2}>*/}
                            {/*        <p className="payComfirmPriceTotalLabel">总价格：</p>*/}
                            {/*    </Col>*/}
                            {/*    <Col span={4}>*/}
                            {/*        <p className="payComfirmPriceTotalNum">*/}
                            {/*            {this.state.allBookPrice.toFixed(2)}*/}
                            {/*        </p>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}

                            <Row>
                                <Col span={20}>

                                </Col>
                                <Col span={3}>
                                    <Button className="bookDetailAddToChart">立即购买</Button>
                                </Col>
                            </Row>


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