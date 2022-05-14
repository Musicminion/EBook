import React from "react";
import {Col, Divider, Image, InputNumber, Row} from "antd";
import {Link} from "react-router-dom";
import {AllBooks} from "./tmpBookData";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import BookOperation from "./BookOperation";
import BookPriceDisplay from "./BookPriceDisplay";
import {getBookByID} from "../../service/bookservice";
import {refreshShopCartItem} from "../../service/orderService";


class BookShopCartRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bookID: this.props.bookID,
            buynum: this.props.buynum,
            pageItemID: this.props.pageItemID,
            itemPrice: 0,
            DBItemID:this.props.DBitemID,
        };

        let that = this;
        let id = parseInt(this.state.bookID);

        if(id > 0){
            getBookByID(id, (data) => {
                console.log(data);
                // alert(data.price);
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
                    itemPrice:data.price * (this.props.buynum),
                });
            });
        }
    }

    componentDidMount() {
    }

    buyNumChange = (e) => {
        let ID = parseInt(this.props.bookID);
        let refreshedPrice = e * Number(this.state.bookPrice);
        this.setState({itemPrice: refreshedPrice});

        this.props.parent.bookNum[this.props.pageItemID] = e;

        let tmpsum = 0;


        // console.log(this.props.parent.bookNum);

        for(let i=0;i<this.props.parent.bookNum.length;i++){
            if(this.props.parent.bookPrice[i] != null)
                tmpsum += this.props.parent.bookPrice[i] * this.props.parent.bookNum[i];
        }

        this.props.parent.setState({
            allBookPrice: tmpsum,
        });

        refreshShopCartItem(ID,e,
            (data)=>{
                console.log(data);
            });
    }

    render() {
        let ID = parseInt(this.props.bookID);

        if(ID != null && ID > 0)
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
                                <p className="BookRow_bookTitle">{this.state.bookTitle}</p>
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
                            <p className="BookRow_bookSellnum">&nbsp;销量 {this.state.bookSellnum}</p>
                        </Col>
                        <Col span={10}>

                            <Row>
                                <Col span={7}>
                                    <InputNumber
                                        size="large" min={1} max={this.state.bookremainNum}
                                        defaultValue={this.state.buynum}
                                        onChange={this.buyNumChange}
                                    />
                                </Col>
                                <Col span={7}>
                                    <p className="payComfirmPriceAll">￥{this.state.itemPrice.toFixed(2)}</p>
                                </Col>
                                <Col span={10}>
                                    <p>无操作可用</p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Divider></Divider>
                </>

            );
        else
            return (<></>);
    }
}

export default BookShopCartRow;