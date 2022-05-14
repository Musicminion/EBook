import React from "react";
import {Col, Row} from "antd";

class BookShopCartHead extends React.Component{


    render() {
        return (
            <Row>
                <Col span={9}>
                    <p className="PayComfirm_TableHeader">商品信息</p>
                </Col>

                <Col span={1}>
                </Col>

                <Col span={3}>
                    <p className="PayComfirm_TableHeader">单价</p>
                </Col>

                <Col span={11}>
                    {/*<p className="PayComfirm_TableHeader">小计</p>*/}
                    <Row>
                        <Col span={1}>
                        </Col>
                        <Col span={6}>
                            <p className="PayComfirm_TableHeader">数量</p>
                        </Col>

                        <Col span={1}>
                        </Col>

                        <Col span={6}>
                            <p className="PayComfirm_TableHeader">小计</p>
                        </Col>

                        <Col span={1}>
                        </Col>

                        <Col span={7}>
                            <p className="PayComfirm_TableHeader">操作</p>
                        </Col>


                    </Row>

                </Col>
            </Row>
        );
    }
}

export default BookShopCartHead;