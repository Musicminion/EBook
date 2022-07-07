import React from 'react';
import TopBar from "../../components/TopBar/TopBar";
import {Card, Col, Form, Input, notification, Row, Steps, Tabs} from "antd";
import "../../css/PayComfirm.css"
import LogoEBook from "../../asset/background/ebookLogo.svg";
import {AppstoreOutlined} from "@ant-design/icons";
import UserLocation from "../../components/Modal/UserLocation";
import LoginPassport from "../../components/Login/LoginPassport";
import {userInfoRequest} from "../../service/userService";
import {urlDecoder} from "../../utils/urlDecoder";
import {getBookByID} from "../../service/bookservice";
import UserOrderComfirm from "../../components/Modal/UserOrderComfirm";
import BookShopCartRow from "../../components/Book/BookShopCartRow";
import BookShopCartHead from "../../components/Book/BookShopCartHead";

const { Step } = Steps;
const { TabPane } = Tabs;

const reminderInfoCheck = type => {
    notification[type]({
        message: '提示',
        description:
            '请核对订单信息',
    });
};

//
class ShopCartOrderComfirm extends React.Component{
    constructor() {
        super();

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
                            <TabPane tab={<><AppstoreOutlined/>确认收件信息</>} key="1">
                                <h2>请确认您的收件信息</h2>
                                <Card size={"small"} title={"收件人："+this.state.receivename} style={{ width: 400 }}>
                                    <p>联系方式：{this.state.phonenumber}</p>
                                    <p>邮政编码：{this.state.postcode}</p>
                                    <p>收件地址：{this.state.receiveaddress}</p>
                                </Card>

                                <Row>
                                    <Col span={20}>

                                    </Col>
                                    <Col span={2}>
                                        <UserLocation
                                            confirmChange = {this.infoChange}
                                            receivename = {this.state.receivename}
                                            phonenumber = {this.state.phonenumber}
                                            postcode = {this.state.postcode}
                                            receiveaddress = {this.state.receiveaddress}
                                        />
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>

                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<><AppstoreOutlined/>确认订单信息</>} key="1">
                                <BookShopCartHead/>

                                <>{this.orderItem}</>
                            </TabPane>
                        </Tabs>

                        <Row>
                            <Col span={18}>

                            </Col>
                            <Col span={2}>
                                <p className="payComfirmPriceTotalLabel">总价格：</p>
                            </Col>
                            <Col span={4}>
                                <p className="payComfirmPriceTotalNum">
                                    ￥{this.state.allBookPrice.toFixed(2)}
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={20}>

                            </Col>
                            <Col span={3}>
                                <UserOrderComfirm
                                    bookIDGroup={this.bookID}
                                    bookNumGroup={this.bookNum}
                                    parentNode={this}
                                />
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

export default ShopCartOrderComfirm;































// import React from 'react';
// import TopBar from "../../components/TopBar/TopBar";
// import {Button, Card, Col, Form, Input, notification, Row, Steps, Tabs} from "antd";
// import "../../css/PayComfirm.css"
// import LogoEBook from "../../asset/background/ebookLogo.svg";
// import BookRow from "../../components/Book/BookRow";
// import {AppstoreOutlined} from "@ant-design/icons";
// import UserLocation from "../../components/locationForm";
// import LoginPassport from "../../components/Login/LoginPassport";
// import {userInfoRequest} from "../../service/userService";
// import {urlDecoder} from "../../utils/urlDecoder";
// import {getBookByID} from "../../service/bookservice";
// import UserOrderComfirm from "./UserOrderComfirm";
// import BookShopCartRow from "../../components/Book/BookShopCartRow";
// import BookShopCartHead from "../../components/Book/BookShopCartHead";
//
//
// const { Step } = Steps;
// const { TabPane } = Tabs;
//
// const reminderInfoCheck = type => {
//     notification[type]({
//         message: '提示',
//         description:
//             '请核对订单信息',
//     });
// };
//
// //
// class ShopCartOrderComfirm extends React.Component{
//     constructor() {
//         super();
//         this.bookPrice = [];
//         this.bookID = [];
//         this.bookNum = [];
//         this.orderItem = [];
//         this.state = {
//             allBookPrice: 0,
//             receivename: LoginPassport.getNickName(),
//             postcode: "400000",
//         }
//
//         let that = this;
//         // 请求用户的信息接口：
//         userInfoRequest((respdata) => {
//
//             setTimeout(()=>{
//                 that.setState({
//                     receivename : respdata.data.name,
//                     phonenumber : respdata.data.telephone,
//                     receiveaddress : respdata.data.useraddress
//                 });
//             }, 0);
//         });
//
//         // 解析url的参数
//         let url = decodeURI(window.location.search);
//         let theRequest = urlDecoder(url);
//         // 解析结果交付orderListGet处理，产生一组订单
//         this.orderListGet(theRequest);
//         // 绑定！
//         this.infoChange = this.infoChange.bind(this);
//     }
//
//     orderListGet(theRequest){
//         let itemNum = (Object.keys(theRequest).length) / 2;
//
//         for(let i=1; i<=itemNum; i++){
//             let bookidstr = "book" + i + "id";
//             let bookidbuynumstr = "book" + i + "buynum";
//             let bookid = parseInt(theRequest[bookidstr]);
//             let bookidbuynum = parseInt(theRequest[bookidbuynumstr]);
//
//             getBookByID(bookid,(data)=>{
//                 let actualPrice = parseInt(data.price) / 100;
//                 this.bookPrice[i] = actualPrice.toFixed(2);
//                 this.setState({
//                     allBookPrice: this.state.allBookPrice +  bookidbuynum * this.bookPrice[i],
//                 });
//             });
//
//             // 注意 我这里赋给了一个pageItemID，是用来识别子组件的编号
//             // 儿子组件的编号可以用来和父亲组件通讯，这样，父亲组件就能知道子的编号，写入到对应的价格状态
//
//             this.orderItem.push(
//                 <BookShopCartRow
//                     parent={this}
//                     bookID={bookid}
//                     buynum={bookidbuynum}
//                     pageItemID={i}
//                 />
//             );
//             this.bookID[i] = bookid;
//             this.bookNum[i] = bookidbuynum;
//         }
//     }
//
//     componentWillMount() {
//         reminderInfoCheck('warning');
//     }
//
//     // ！这个函数下发给子组件，子组件操作父亲组件的页面的 用户订单信息！
//     infoChange(receivename, phonenumber, postcode, receiveaddress){
//         this.setState({
//             receivename: receivename,
//             phonenumber: phonenumber,
//             postcode: postcode,
//             receiveaddress: receiveaddress,
//         });
//     }
//
//
//     render() {
//
//         if(this.state.allBookPrice != null)
//             return (
//                 <div className="eBookPageContainer">
//                     <TopBar/>
//                     <div className="MainContentsCard_compact">
//                         <div className="PayComfirm_TopArea">
//                             <div className="PayComfirm_logoArea">
//                                 <img src={LogoEBook} className="PayComfirm_logo"/>
//                             </div>
//                             <div className="PayComfirm_StepArea">
//                                 <Steps current={0} className="PayComfirm_Step">
//                                     <Step title="确认订单"/>
//                                     <Step title="付款"/>
//                                     <Step title="确认收货"/>
//                                     <Step title="评价"/>
//                                 </Steps>
//                             </div>
//                         </div>
//
//                         <div className="PayComfirm_ContentArea">
//                             <Tabs defaultActiveKey="1">
//                                 <TabPane tab={<><AppstoreOutlined/>确认收件信息</>} key="1">
//                                     <h2>请确认您的收件信息</h2>
//                                     <Card size={"small"} title={"收件人："+this.state.receivename} style={{ width: 400 }}>
//                                         <p>联系方式：{this.state.phonenumber}</p>
//                                         <p>邮政编码：{this.state.postcode}</p>
//                                         <p>收件地址：{this.state.receiveaddress}</p>
//                                     </Card>
//
//                                     <Row>
//                                         <Col span={20}>
//
//                                         </Col>
//                                         <Col span={2}>
//                                             <UserLocation
//                                                 confirmChange = {this.infoChange}
//                                                 receivename = {this.state.receivename}
//                                                 phonenumber = {this.state.phonenumber}
//                                                 postcode = {this.state.postcode}
//                                                 receiveaddress = {this.state.receiveaddress}
//                                             />
//                                         </Col>
//                                     </Row>
//                                 </TabPane>
//                             </Tabs>
//
//                             <Tabs defaultActiveKey="1">
//                                 <TabPane tab={<><AppstoreOutlined/>确认订单信息</>} key="1">
//                                     <BookShopCartHead/>
//
//                                     <>{this.orderItem}</>
//                                 </TabPane>
//                             </Tabs>
//
//                             <Row>
//                                 <Col span={18}>
//
//                                 </Col>
//                                 <Col span={2}>
//                                     <p className="payComfirmPriceTotalLabel">总价格：</p>
//                                 </Col>
//                                 <Col span={4}>
//                                     <p className="payComfirmPriceTotalNum">
//                                         ￥{this.state.allBookPrice.toFixed(2)}
//                                     </p>
//                                 </Col>
//                             </Row>
//
//                             <Row>
//                                 <Col span={20}>
//
//                                 </Col>
//                                 <Col span={3}>
//                                     <UserOrderComfirm
//                                         bookIDGroup={this.bookID}
//                                         bookNumGroup={this.bookNum}
//                                         parentNode={this}
//                                     />
//                                 </Col>
//                             </Row>
//
//                         </div>
//
//                     </div>
//                     <div className="clearOnly_compact">
//
//                     </div>
//
//                     <div className="Pagefooter">
//                         <p>CopyRight ©2022 All Rights Reserved.Developed By Zhang Ziqian.</p>
//                     </div>
//                 </div>
//             );
//     }
// }
//
// export default ShopCartOrderComfirm;
























// {/*<Card*/}
// {/*    title={<p className="userLocationTitle">上海(张子谦收货)</p>}*/}
// {/*    className="userLocationCard"*/}
// {/*    size={"small"}*/}
// {/*>*/}
// {/*    <p className="userLocationPlace">地址：上海交通大学闵行校区</p>*/}
// {/*    <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
// {/*</Card>*/}
//
// {/*<Radio.Group className="userLocationButtonGroup" defaultValue="a" size="large">*/}
// {/*    <Button value="a" className="userLocationButton">*/}
// {/*        <Card*/}
// {/*            title={<p className="userLocationTitle">上海(张子谦收货)</p>}*/}
// {/*            className="userLocationCard"*/}
// {/*            size={"small"}*/}
// {/*        >*/}
// {/*            <p className="userLocationPlace">地址：上海交通大学闵行校区</p>*/}
// {/*            <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
// {/*        </Card>*/}
// {/*    </Button>*/}
//
// {/*    <Button value="b" className="userLocationButton">*/}
// {/*        <Card*/}
// {/*            title={<p className="userLocationTitle">上海(小明收货)</p>}*/}
// {/*            className="userLocationCard"*/}
// {/*            size={"small"}*/}
// {/*        >*/}
// {/*            <p className="userLocationPlace">地址：上海</p>*/}
// {/*            <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
// {/*        </Card>*/}
// {/*    </Button>*/}
//
// {/*    <Button value="b" className="userLocationButton">*/}
// {/*        <Card*/}
// {/*            title={<p className="userLocationTitle">上海(小明收货)</p>}*/}
// {/*            className="userLocationCard"*/}
// {/*            size={"small"}*/}
// {/*        >*/}
// {/*            <p className="userLocationPlace">地址：上海</p>*/}
// {/*            <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
// {/*        </Card>*/}
// {/*    </Button>*/}
//
// {/*    <Button value="b" className="userLocationButton">*/}
// {/*        <Card*/}
// {/*            title={<p className="userLocationTitle">上海(小明收货)</p>}*/}
// {/*            className="userLocationCard"*/}
// {/*            size={"small"}*/}
// {/*        >*/}
// {/*            <p className="userLocationPlace">地址：上海</p>*/}
// {/*            <p className="userPhoneNumber">联系电话：180-0000-0000</p>*/}
// {/*        </Card>*/}
// {/*    </Button>*/}
// {/*</Radio.Group>*/}