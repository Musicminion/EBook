import React from "react";
import {Button, Col, Row} from "antd";




class BookOperation extends React.Component{

    render() {
        return (
            <>
                <Row>
                    <Col span={8}>
                        <Button className="BookRow_functionButton" type="primary" danger>立即购买</Button>
                    </Col>
                    <Col span={8}>
                        <Button className="BookRow_functionButton" type="primary">加入购物车</Button>
                    </Col>
                    <Col span={8}>
                        <Button className="BookRow_functionButton" type="primary">加入收藏</Button>
                    </Col>
                </Row>

                <Row>
                    <Col span={8}>
                        <Button className="BookRow_functionButton" type="primary">编辑商品信息</Button>
                    </Col>
                    <Col span={8}>
                        <Button className="BookRow_functionButton" type="primary">编辑内容详情</Button>
                    </Col>
                    <Col span={8}>
                        <Button className="BookRow_functionButton" type="primary" danger>删除书籍</Button>
                    </Col>
                </Row>

            </>
        );
    }
}

export default BookOperation;