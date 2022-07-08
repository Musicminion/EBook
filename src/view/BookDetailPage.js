// 本页面是书籍的详情界面
import React from 'react';
import {Button, Card, Col, Descriptions, Image, InputNumber, notification,
    Row, Tabs, Typography} from "antd";
import TopBar from "../components/TopBar/TopBar";
import "../css/BookDetail.css"
import {BookOutlined, CommentOutlined} from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import {Link} from "react-router-dom";
import {getBookByID} from "../service/bookservice";
import {urlDecoder} from "../utils/urlDecoder";
import {addOneBookToShopCart} from "../service/orderService";
import Comment from "../components/Book/BookComment";

const { TabPane } = Tabs;


const AddToCartSuccess = (info) => {
    notification["success"]({
        message: '提示',
        description:
            info,
    });
};

const AddToCartFail = (info) => {
    notification["error"]({
        message: '提示',
        description:
            info,
    });
};


// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

class BookDetailPage extends React.Component{

    constructor() {
        super();
        this.state = {
            bookID: 0,          // 书本的ID
            bookNum: 1,         // 书本买了多少，默认是1,初始化1，价格也初始化显示一本的价格
            bookTitle: "",
            bookName: "",
            bookAuthor: "",
            bookISBN: "",
            bookremainNum: 0,
            bookPublisher: "",
            bookPlace: "",
            bookSellnum: 0,
            bookPrice: 0,
            bookDescription: "",
            allPrice: 0,
        };
        let url = decodeURI(window.location.search); //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        let theRequest = urlDecoder(url);
        if ( Object.keys(theRequest).length > 0) {

            let BookIDnum = parseInt(theRequest['bookid']);
            let that = this;
            getBookByID(BookIDnum,(data) => {
                    /// console.log(data);
                    let actualPrice = parseInt(data.price) / 100;

                    that.setState({
                        bookID: BookIDnum,
                        bookTitle: data.displaytitle,
                        bookName:  data.bookname,
                        bookAuthor: data.author,
                        bookremainNum: data.inventory,
                        bookPublisher: data.publisher,
                        bookPlace: data.departure,
                        bookSellnum: data.sellnumber,
                        bookPrice: actualPrice,
                        bookISBN: data.isbn,
                        bookDescription: data.description,
                        allPrice: actualPrice,
                        imageUrl:data.imgtitle
                    });
                }
                );
        }
        this.addToShopCart = this.addToShopCart.bind(this);
    }

    addToShopCart() {


        addOneBookToShopCart(this.state.bookID,this.state.bookNum,
            (data) => {
                console.log(data);
                if(data.status >= 0)
                    AddToCartSuccess(data.msg);
                else
                    AddToCartFail(data.msg);
            }
            );
    }

    componentDidMount() {

    }

    buyNumChange(e){
        if(e!=null)
            this.setState({bookNum: e, allPrice: this.state.bookPrice * e})
    }

    render() {
        if(this.state.bookID > 0){
            return (
                <div>
                    <div className="eBookPageContainer">
                        <TopBar/>
                        <div className="MainContentsCard">

                            <div className="BookDetailTop">
                                <div className="BookDetailImg">
                                    <Image src={this.state.imageUrl} width={"100%"}/>
                                </div>

                                <div className="BookDescription">
                                    <Descriptions title={this.state.bookTitle}>
                                        <Descriptions.Item label="书籍名称">{this.state.bookName}</Descriptions.Item>
                                        <Descriptions.Item label="书籍ISBN">{this.state.bookISBN}</Descriptions.Item>
                                        <Descriptions.Item label="作者">{this.state.bookAuthor}</Descriptions.Item>
                                        <Descriptions.Item label="库存量">{this.state.bookremainNum}</Descriptions.Item>
                                        <Descriptions.Item label="出版社">{this.state.bookPublisher}</Descriptions.Item>
                                        <Descriptions.Item label="发货地点">{this.state.bookPlace}</Descriptions.Item>
                                        <Descriptions.Item label="月销量">{this.state.bookSellnum}</Descriptions.Item>
                                        <Descriptions.Item label="其他备注">无</Descriptions.Item>
                                    </Descriptions>

                                    <Card title="购买信息" size={"small"}>
                                        <Row>
                                            <Col span={3}>
                                                <p>商品单价：</p>
                                            </Col>
                                            <Col span={5}>
                                                <p className="bookDetailPrice">￥{this.state.bookPrice.toFixed(2)}</p>
                                            </Col>

                                            <Col span={3}>
                                                <p>商品总价：</p>
                                            </Col>
                                            <Col span={13}>
                                                <p className="bookDetailPrice">￥{this.state.allPrice.toFixed(2)}</p>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={3}>
                                                <p>购买数量：</p>
                                            </Col>
                                            <Col span={5}>
                                                <InputNumber min={1} max={this.state.bookremainNum}
                                                             onChange={e => this.buyNumChange(e)} defaultValue={1}/>
                                            </Col>
                                        </Row>
                                    </Card>

                                    <div className="bookDetailFunctionArea">
                                        <Row>
                                            <Col span={4}>
                                            </Col>
                                            <Col span={7}>
                                                <Link to={'/eBook/makeOrder/directBuy?book1id=' + this.state.bookID
                                                    +"&book1buynum="+this.state.bookNum}>
                                                    <Button className="bookDetailBuyNow">立即购买</Button>
                                                </Link>
                                            </Col>
                                            <Col span={2}>
                                            </Col>
                                            <Col span={7}>
                                                <Button className="bookDetailAddToChart" onClick={this.addToShopCart}>加入购物车</Button>
                                            </Col>
                                            <Col span={4}>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="clearBoth">
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div className="BookDetailContent">
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab={<><BookOutlined/>商品描述</>} key="1">
                                        <Typography>
                                            <Paragraph>
                                                {this.state.bookDescription}
                                            </Paragraph>
                                        </Typography>
                                    </TabPane>
                                    <TabPane tab={<><CommentOutlined/>用户评价</>} key="2">
                                        <Comment/>
                                    </TabPane>

                                </Tabs>

                            </div>


                        </div>


                        <div className="clearOnly"></div>

                        <div className="Pagefooter">
                            <p>CopyRight ©2022 All Rights Reserved.Developed By Zhang Ziqian.</p>
                        </div>
                    </div>
                </div>

            );
        }

        else{
            return (<></>);
        }
    }

}

export default BookDetailPage;




