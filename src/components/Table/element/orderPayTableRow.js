import React from "react";
import {Button, Col, Divider, Image, InputNumber, Popconfirm, Row} from "antd";
import {Link} from "react-router-dom";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {refreshShopCartItem} from "../../../service/orderService";

//  [组件用途介绍]：订单支付页面表格的一行，指示商品信息、单价、购买数量等，同时，用户变更购物车的数据后，要和后端联动
//  -------------------------------------------------------------------------------------------------------
//  [组件使用场景]：单买商品的订单支付                     特点说明：有计数器（不需要联动后端）、
//               购物车结算的订单支付                   特点说明：有计数器（联动后端，变了要更新购物车的数量信息）、删除购物车项目
//               购物车的展示页面                       特点说明：有计数器（联动后端，变了要更新购物车的数量信息）、删除购物车项目
//  -------------------------------------------------------------------------------------------------------
//  [组件必备参数]：bookInfo       类比之前BookCard里面的，必须要有书籍的完整信息
//               defaultBuyNum  默认购买的数量，由父组件下发过来
//               fromType(str)  directBuy           : 直接购买的下单页面
//                              shopCartDisplay     : 购物车的展示页面
//                              shopCartBuy         : 购物车的下单页面
//               buyNumChangeCallBack(key, changedNum) 来自父组件的函数，更新父组件里面对应的状态和数据
//                                                     key 是子组件行的唯一标识符，，changedNum是改变后的购买数量，
//               childKey       子组件在父组件那里的唯一标识符，不同于书的ID号码

class OrderPayTableRow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            rowSumPrice : (this.props.defaultBuyNum * this.props.bookInfo.price/100),
            rowCurBuyNum : this.props.defaultBuyNum
        };
    }

    // 订单子项目一旦发生变化，如果是购物车的项目，要回报后端
    // 但是无论如何，都要回掉父组件的函数，更新价格展示信息
    buyNumChange = (value) => {
        // 更新父组件里面的数据
        this.props.buyNumChangeCallBack(this.props.childKey,value);
        // 更新当前行的小计总价
        this.setState({
            rowSumPrice: (value * this.props.bookInfo.price/100),
        });

        // 如果是来自购物车的行 或者是购物车下单前的行，那么用户更新的数据要更改到后端
        if (this.props.fromType === "shopCartDisplay" || this.props.fromType === "shopCartBuy"){
            refreshShopCartItem(this.props.bookInfo.id, value,
                (data) => {
                    console.log(data);
                });
        }
    }

    // 删除掉这个项目
    deleteItemFromShopCart = () => {
        refreshShopCartItem(this.props.bookInfo.id,0,
            (data)=>{
                console.log(data);
                window.location.reload();
            });
    }

    render() {
        return (
            <>
                <Row>
                    <Col span={3}>
                        <Image className="BookRow_Image" src={this.props.bookInfo.imgtitle}/>
                    </Col>
                    <Col span={6}>
                        <Link
                            to={'bookdetail?bookid=' + this.props.bookInfo.id}
                        >
                            <p className="BookRow_bookTitle">{this.props.bookInfo.displaytitle}</p>
                        </Link>

                        <div className="BookRow_ButtonArea">
                            <p className="BookRow_Shoper"><UnorderedListOutlined/>&nbsp;{this.props.bookInfo.publisher}</p>
                            <p className="BookRow_Place"><EnvironmentOutlined/>&nbsp;{this.props.bookInfo.departure}</p>
                        </div>
                    </Col>
                    <Col span={2}>
                    </Col>
                    <Col span={3}>
                        <p className="BookRow_bookPrice">{"￥" +(this.props.bookInfo.price/100).toFixed(2)}</p>
                        <p className="BookRow_bookStorageStatus">库存：{this.props.bookInfo.inventory}</p>
                        <p className="BookRow_bookSellnum">&nbsp;销量 {this.props.bookInfo.sellnumber}</p>
                    </Col>
                    <Col span={10}>
                        <Row>
                            <Col span={7}>
                                <InputNumber
                                    size="large" min={1} max={this.props.bookInfo.inventory}
                                    defaultValue={this.state.rowCurBuyNum}
                                    onChange={this.buyNumChange}
                                />
                            </Col>
                            <Col span={7}>
                                <p className="payComfirmPriceAll">
                                    ￥{this.state.rowSumPrice.toFixed(2)}
                                </p>
                            </Col>
                            <Col span={2}>
                            </Col>
                            <Col span={8}>
                                <Popconfirm
                                    title="确认从购物车里面移除?" onConfirm={this.deleteItemFromShopCart}
                                    okText="删除" cancelText="取消"
                                >
                                    <Button danger>删除</Button>
                                </Popconfirm>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider></Divider>
            </>
        );
    }
}

export default OrderPayTableRow;