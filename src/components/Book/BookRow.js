import React from "react";
import {Button, Col, Divider, Image, Row} from "antd";
import '../../css/BookRow.css';
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {AllBooks} from "./tmpBookData";
import BookOperation from "./BookOperation";
import BookPriceDisplay from "./BookPriceDisplay";
import {getBookByID} from "../../service/bookservice";


class BookRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bookID : this.props.bookID
        }

        let id = parseInt(this.props.bookID);
        let that = this;
        if(id > 0){
            getBookByID(id, (data) => {
                console.log(data);
                that.setState({
                    bookTitle: data.displaytitle,
                    bookName:  data.bookname,
                    bookAuthor: data.author,
                    bookremainNum: data.inventory,
                    bookPublisher: data.publisher,
                    bookPlace: data.departure,
                    bookSellnum: data.sellnumber,
                    bookPrice: data.price.toFixed(2),
                    bookISBN: data.isbn,
                    bookDescription: data.description,
                    allPrice:data.price,
                });
            });
        }

    }

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
                                <p className="BookRow_Shoper"><UnorderedListOutlined/>&nbsp;{this.state.bookPublisher}</p>
                                <p className="BookRow_Place"><EnvironmentOutlined/>&nbsp;{this.state.bookPlace}</p>
                            </div>
                        </Col>
                        <Col span={2}>
                        </Col>
                        <Col span={3}>
                            <p className="BookRow_bookPrice">{"￥" + this.state.bookPrice}</p>
                            <p className="BookRow_bookStorageStatus">库存：{this.state.bookremainNum}</p>
                            <p className="BookRow_bookSellnum">&nbsp;月销量 {this.state.bookSellnum}</p>
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