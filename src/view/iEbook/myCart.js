import React from 'react';
import TopBar from "../../components/TopBar/TopBar";
import LogoEBook from "../../asset/background/eBooklogo.svg";
import {Button, Col, Row, Tabs} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import OrderPayTable from "../../components/Table/orderPayTable";

const { TabPane } = Tabs;

// 注意 这个页面的item编号是 0-base
class myCart extends React.Component{
    cartCheckout = () => {
        window.location.href = "/eBook/makeOrder/shopCart";
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
                        <TabPane tab={<><ShoppingCartOutlined/>我的购物车</>} key="1">
                            <OrderPayTable fromType={"shopCartDisplay"}/>

                            <Row>
                                <Col span={20}></Col>
                                <Col span={4}>
                                    <Button className="bookDetailAddToChart" onClick={this.cartCheckout}>
                                        购物车结账
                                    </Button>
                                </Col>
                            </Row>
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

export default myCart;








// import React from 'react';
// import TopBar from "../../components/TopBar/TopBar";
// import LogoEBook from "../../asset/background/ebookLogo.svg";
// import {Button, Col, Empty, Result, Row, Tabs} from "antd";
// import {ShoppingCartOutlined} from "@ant-design/icons";
// import BookRowHeader from "../../components/Book/BookRowHeader";
// import {orderQueryUserShopCart} from "../../service/orderService";
// import {getBookByID} from "../../service/bookservice";
// import BookShopCartRow from "../../components/Book/BookShopCartRow";
// import BookShopCartHead from "../../components/Book/BookShopCartHead";
// import {Link} from "react-router-dom";
// import OrderPayTable from "../../components/Table/orderPayTable";
//
// const { TabPane } = Tabs;
//
// // 注意 这个页面的item编号是 0-base
// class myCart extends React.Component{
//     bookID = [];
//     bookNum = [];
//     bookPrice = [];
//
//     constructor() {
//         super();
//         this.state = {
//             respData: [],
//             cartItem: [],
//             allBookPrice: 0
//         }
//
//         orderQueryUserShopCart(
//             (resp) =>{
//                 console.log(resp);
//
//                 this.setState(
//                     { respData : resp}
//                 );
//                 for(let i=0; i<resp.length; i++){
//
//                     // 此步买的书籍
//                     this.bookNum[i] = resp[i].buynum;
//                     this.bookID[i] = resp[i].bookID;
//                     getBookByID(resp[i].bookID,(data)=>{
//                         let actualPrice = parseInt(data.price) / 100;
//                         this.bookPrice[i] = actualPrice.toFixed(2);
//                         this.setState({
//                             allBookPrice: this.state.allBookPrice +  this.bookNum[i] * this.bookPrice[i],
//                         });
//                     });
//
//                     this.setState(
//                         { cartItem :
//                                 [...this.state.cartItem,
//                                     <BookShopCartRow
//                                         parent={this}
//                                         bookID={resp[i].bookID}
//                                         buynum={resp[i].buynum}
//                                         pageItemID={i}
//                                         DBitemID={resp[i].itemID}
//                                     />
//                                 ]
//                         }
//                     );
//
//                 }
//             });
//
//         this.cartCheckout = this.cartCheckout.bind(this);
//     }
//
//     cartCheckout(){
//         let redirectURL = "/eBook/shopCartOrderComfirm?";
//
//         for(let i=0; i<this.bookID.length; i++){
//             let tmp = i+1
//             redirectURL += "book" + tmp +"id=" + this.bookID[i] + "&book" + tmp +"buynum=" + this.bookNum[i];
//             if(i !== this.bookID.length - 1)
//                 redirectURL += "&";
//         }
//         window.location.href = redirectURL;
//     }
//
//     render() {
//         if(this.state.cartItem != null && this.state.cartItem.length > 0)
//             return (
//                 <div className="eBookPageContainer">
//                     <TopBar/>
//                     <div className="MainContentsCard_compact">
//                         <div className="PayComfirm_logoArea">
//                             <img src={LogoEBook} className="PayComfirm_logo"/>
//                         </div>
//
//                         <Tabs defaultActiveKey="1">
//                             <TabPane tab={<><ShoppingCartOutlined/>我的购物车</>} key="1">
//                                 <OrderPayTable fromType={"shopCartDisplay"}/>
//
//                                 {/*<BookShopCartHead/>*/}
//                                 {/*{this.state.cartItem}*/}
//
//                                 {/*<Row>*/}
//                                 {/*    <Col span={18}>*/}
//                                 {/*    </Col>*/}
//                                 {/*    <Col span={2}>*/}
//                                 {/*        <p className="payComfirmPriceTotalLabel">总价格：</p>*/}
//                                 {/*    </Col>*/}
//                                 {/*    <Col span={4}>*/}
//                                 {/*        <p className="payComfirmPriceTotalNum">*/}
//                                 {/*            ￥{this.state.allBookPrice.toFixed(2)}*/}
//                                 {/*        </p>*/}
//                                 {/*    </Col>*/}
//                                 {/*</Row>*/}
//
//                                 {/*<Row>*/}
//                                 {/*    <Col span={20}>*/}
//                                 {/*    </Col>*/}
//                                 {/*    <Col span={3}>*/}
//                                 {/*        <Button className="bookDetailAddToChart" onClick={this.cartCheckout}>*/}
//                                 {/*            确认下单*/}
//                                 {/*        </Button>*/}
//
//                                 {/*    </Col>*/}
//                                 {/*</Row>*/}
//
//                             </TabPane>
//                         </Tabs>
//                     </div>
//                     <div className="clearOnly_compact">
//
//                     </div>
//                     <div className="Pagefooter">
//                         <p>CopyRight © 2022 AllRights Reserved.ALL Developed By ZhangZiqian.</p>
//                     </div>
//
//                 </div>
//             );
//         else{
//             return (
//                 <div className="eBookPageContainer">
//                     <TopBar/>
//                     <div className="MainContentsCard_compact">
//                         <div className="PayComfirm_logoArea">
//                             <img src={LogoEBook} className="PayComfirm_logo"/>
//                         </div>
//
//                         <Tabs defaultActiveKey="1">
//                             <TabPane tab={<><ShoppingCartOutlined/>我的购物车</>} key="1">
//
//                                 <Result
//                                     status="404"
//                                     title="您还没有添加商品到购物车呢~"
//                                     subTitle="赶紧去添加商品吧！"
//                                     extra={<Link to={"/eBook/MainPage"}><Button type="primary">回到首页</Button></Link>}
//                                 />
//                             </TabPane>
//                         </Tabs>
//                     </div>
//                     <div className="clearOnly_compact">
//
//                     </div>
//                     <div className="Pagefooter">
//                         <p>CopyRight © 2022 AllRights Reserved.ALL Developed By ZhangZiqian.</p>
//                     </div>
//
//                 </div>
//             );
//
//
//         }
//     }
//
//
// }
//
// export default myCart;