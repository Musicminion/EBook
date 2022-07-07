import React from "react";
import {Button, Col, Row} from "antd";

class BookOperation extends React.Component{

    render() {
        return (
            <>
                <Row>
                    <Col span={4}></Col>
                    <Col span={8}>
                        <Button className="BookRow_functionButton" type="primary" danger>立即购买</Button>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={8}>
                        <Button className="BookRow_functionButton" type="primary">加入购物车</Button>
                    </Col>
                </Row>
            </>
        );
    }
}

export default BookOperation;