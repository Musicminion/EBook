import React from "react";
import {Button, Col, Divider, Image, Row} from "antd";
import '../../css/BookRow.css';
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {AllBooks} from "./tmpBookData";
import BookOperation from "./BookOperation";
import BookPriceDisplay from "./BookPriceDisplay";


class BookRow extends React.Component{

    render() {
        let ID = parseInt(this.props.bookID);
        if(ID != null)
            return (
                <>
                    <Row>
                        <Col span={3}>
                            <Image className="BookRow_Image" src={require('../../asset/img/book/'+ ID +'.jpg')}/>
                        </Col>
                        <Col span={6}>
                            <Link
                                to={'bookdetail?bookid='+ID}
                            >
                                <p className="BookRow_bookTitle">{AllBooks[ID].bookTitle}</p>
                            </Link>

                            <div className="BookRow_ButtonArea">
                                <p className="BookRow_Shoper"><UnorderedListOutlined/>&nbsp;{AllBooks[ID].bookShoper}</p>
                                <p className="BookRow_Place"><EnvironmentOutlined/>&nbsp;{AllBooks[ID].bookPlace}</p>
                            </div>
                        </Col>
                        <Col span={2}>
                        </Col>
                        <Col span={3}>
                            <p className="BookRow_bookPrice">{"￥" + AllBooks[ID].bookPrice}</p>
                            <p className="BookRow_bookStorageStatus">库存：充足</p>
                            <p className="BookRow_bookSellnum">&nbsp;月销量 {AllBooks[ID].bookSellnum}</p>
                        </Col>
                        <Col span={8}>
                            <BookOperation/>
                        </Col>
                    </Row>
                    <Divider></Divider>
                </>

            );
        else
            return (<></>);
    }
}

export default BookRow;