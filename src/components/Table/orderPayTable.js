import React from "react";
import {urlDecoder} from "../../utils/urlDecoder";
import {orderQueryUserShopCart} from "../../service/orderService";
import {getBookByID} from "../../service/bookservice";
import {Col, List, Row} from "antd";
import OrderPayTableRow from "./element/orderPayTableRow";
import OrderPayTableHeader from "./element/orderPayTableHeader";

//  [组件用途介绍]：下单页面的商品展示表格、购物车表。
//  -------------------------------------------------------------------------------------------------------
//  [组件使用场景]：单买商品的订单支付          特点说明：表格里面的每一行有计数器（不需要联动后端，联动组件的总价格）、
//               购物车结算的订单支付         特点说明：表格里面的每一行有计数器（联动后端，变了要更新购物车的数量信息，联动组件的总价格）
//                                                、要能够删除购物车项目
//               购物车的展示页面            特点说明：表格里面的每一行有计数器（联动后端，变了要更新购物车的数量信息、联动组件的总价格））
//                                                、要能够删除购物车项目
//  -------------------------------------------------------------------------------------------------------
//  [组件必备参数]：fromType(str)  directBuy           : 直接购买的下单页面
//                              shopCartDisplay     : 购物车的展示页面
//                              shopCartBuy         : 购物车的下单页面


class OrderPayTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orderData : [],
            totalPrice : 0,
        };
        // 通过URL解析参数,获取商品
        if(this.props.fromType === "directBuy"){
            // 解析url的参数
            let theRequest = urlDecoder(decodeURI(window.location.search));
            // 数据获取
            this.bookInfoGet(theRequest);
        }
        // 通过后端抓取购物车信息
        else{
            orderQueryUserShopCart(
                (data) => {
                    if(data.length ===0)
                        window.location.href="/eBook/noItemPage";

                    let sum = 0;
                    for(let i = 0; i < data.length; i++){
                        sum += data[i].bookinfo.price * data[i].buynum;
                    }
                    this.setState({
                        orderData : data,
                        totalPrice : sum / 100,
                    });
                }
            );
        }
    }

    // 通过url参数抓取书籍信息，生成订单
    bookInfoGet = (theRequest) => {
        let itemNum = (Object.keys(theRequest).length) / 2;
        if(itemNum ===0)
            window.location.href="/eBook/noItemPage";

        for(let i=1; i<=itemNum; i++){
            let bookID = parseInt(theRequest["book" + i + "id"]);
            let bookBuyNum = parseInt(theRequest["book" + i + "buynum"]);
            getBookByID(bookID,(data)=>{
                let info = {
                    buynum : bookBuyNum,
                    bookinfo : data,
                    bookID: bookID
                };
                this.setState({
                    orderData : [...this.state.orderData, info],
                    totalPrice : this.state.totalPrice + bookBuyNum * data.price / 100,
                });
            });
        }
    }

    tableHeadGet = () => {
        if(this.props.fromType === "shopCartDisplay")
            return <OrderPayTableHeader fromType={"shopCartDisplay"}/>
        else
            return <OrderPayTableHeader fromType={"directBuy"}/>
    }

    buyNumChangeCallBack = (key, changedNum) => {
        let tmpData = this.state.orderData;
        tmpData[key].buynum = changedNum;
        let sum = 0;
        for(let i = 0; i < tmpData.length; i++){
            sum += tmpData[i].bookinfo.price * tmpData[i].buynum;
        }
        this.setState({
            orderData: tmpData,
            totalPrice : sum / 100,
        });
    }

    render() {
        return (
            <>
                {this.tableHeadGet()}
                <List grid={{gutter: 10, column: 1}} dataSource={this.state.orderData}
                      renderItem={(item, key) => {

                          return (
                              <List.Item>
                                  <OrderPayTableRow
                                      bookInfo={item.bookinfo}
                                      fromType={this.props.fromType}
                                      defaultBuyNum={item.buynum}
                                      childKey={key}
                                      buyNumChangeCallBack={this.buyNumChangeCallBack}
                                  />
                              </List.Item>
                          );
                      }}
                />

                <Row>
                    <Col span={18}>
                    </Col>
                    <Col span={2}>
                        <p className="payComfirmPriceTotalLabel">总价格：</p>
                    </Col>
                    <Col span={4}>
                        <p className="payComfirmPriceTotalNum">
                            ￥{this.state.totalPrice.toFixed(2)}
                        </p>
                    </Col>
                </Row>
            </>
        );
    }
}


export default OrderPayTable;