import React from "react";
import {Button, Col, Divider, Image, Row} from "antd";
import '../../css/BookRow.css';
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import BookOperation from "./BookOperation";


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
                        <p className="BookRow_bookSellnum">&nbsp;销量 {this.props.bookInfo.sellnumber}</p>
                    </Col>
                    <Col span={8}>
                        <BookOperation/>
                    </Col>
                </Row>
                <Divider></Divider>
            </>

        );
    }


}

export default BookRow;