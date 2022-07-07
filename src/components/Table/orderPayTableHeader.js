import React from "react";
import {Col, Row} from "antd";

//  [组件用途介绍]：订单支付页面表格的顶部栏，指示商品信息、单价等
//  [组件使用场景]：订单支付页面，具体来说分为两种，一个是购物车的结算页面，一个是订单直接购买的页面
//  [功能详细介绍]：根据传入的属性，返回对应的表格头栏


class OrderPayTableHeader extends React.Component{
    render() {
        if(this.props.fromType === "directBuy")
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
        else if(this.props.fromType === "shopCartBuy")
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