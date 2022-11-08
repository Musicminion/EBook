import React from "react";
import {Button, Col, Divider, Image, Row} from "antd";
import '../../css/BookRow.css';
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


class BookRow extends React.Component{
    constructor(props) {
        super(props);
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
                        <p className="BookRow_bookPrice">
                            {"￥" +(this.props.bookInfo.price/100).toFixed(2)}
                        </p>
                        <p className="BookRow_bookStorageStatus">库存：{this.props.bookInfo.inventory}</p>
                        <p className="BookRow_bookSellnum">&nbsp;销量：{this.props.bookInfo.sellnumber}</p>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={4}></Col>
                            <Col span={8}>
                                <Link to={'/eBook/makeOrder/directBuy?book1id=' + this.props.bookInfo.id
                                    +"&book1buynum="+1}>
                                    <Button className="BookRow_functionButton" type="primary" danger>立即购买</Button>
                                </Link>
                            </Col>
                            <Col span={4}></Col>
                            <Col span={8}>
                                <Link to={'bookdetail?bookid='+this.props.bookInfo.id}>
                                    <Button className="BookRow_functionButton" type="primary">查看详情</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <span>
                        <span style={{color:'deeppink'}}>作者信息：</span><>{this.props.bookInfo.author} </>
                        {/*<span>{this.props.bookInfo.description}</span>*/}
                        <br/>
                        <>
                            <span style={{color:'deeppink'}}>简介信息：</span>
                            <span dangerouslySetInnerHTML={{__html:this.props.bookInfo.description}} ></span>
                        </>

                    </span>

                </Row>
                <Divider></Divider>
            </>

        );
    }


}

export default BookRow;