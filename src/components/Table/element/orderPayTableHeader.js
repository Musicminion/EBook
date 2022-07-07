import React from "react";
import {Col, Row} from "antd";

//  [组件用途介绍]：订单支付页面表格的顶部栏，指示商品信息、单价等，组件不包括功能性的函数
//  [组件使用场景]：订单支付页面，具体来说分为三种，一个是购物车的展示页面，一个是购物车订单支付，一个是单个订单直接购买的页面
//               为什么区分购物车和单笔订单？由于结算购物车的业务逻辑和单击直接购买有一定的差别，所以要做一个简要的区分
//  [功能详细介绍]：根据传入的属性，返回对应的表格头栏
//

class OrderPayTableHeader extends React.Component{
    render() {
        if(this.props.fromType === "directBuy" )
            return (
                <Row>
                    <Col span={9}><p className="PayComfirm_TableHeader">商品信息</p></Col>
                    <Col span={1}></Col>
                    <Col span={3}><p className="PayComfirm_TableHeader">单价</p></Col>
                    <Col span={11}>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={6}><p className="PayComfirm_TableHeader">数量</p></Col>
                            <Col span={1}></Col>
                            <Col span={6}><p className="PayComfirm_TableHeader">优惠</p></Col>
                            <Col span={1}></Col>
                            <Col span={7}><p className="PayComfirm_TableHeader">小计</p></Col>
                        </Row>
                    </Col>
                </Row>
            );
        else if(this.props.fromType === "shopCartBuy" || this.props.fromType === "shopCartDisplay")
            return (
                <Row>
                    <Col span={9}><p className="PayComfirm_TableHeader">商品信息</p></Col>
                    <Col span={1}></Col>
                    <Col span={3}><p className="PayComfirm_TableHeader">单价</p></Col>
                    <Col span={11}>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={6}><p className="PayComfirm_TableHeader">数量</p></Col>
                            <Col span={1}></Col>
                            <Col span={6}><p className="PayComfirm_TableHeader">小计</p></Col>
                            <Col span={1}></Col>
                            <Col span={7}><p className="PayComfirm_TableHeader">操作</p></Col>
                        </Row>
                    </Col>
                </Row>
            );
    }
}

export default OrderPayTableHeader;