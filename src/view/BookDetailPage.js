// 本页面是书籍的详情界面
import React from 'react';
import {
    Button,
    Card, Col,
    Descriptions,
    Image,
    InputNumber,
    Menu,
    Modal,
    Row,
    Tabs,
    Typography
} from "antd";
import TopBar from "../components/TopBar/TopBar";
import "../css/BookDetail.css"
import { Radio } from 'antd';
import {AllBooks} from "../components/Book/tmpBookData";
import {BookOutlined, CommentOutlined} from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import Demo from "../components/bookComment";
import {Link} from "react-router-dom";
import {getBookByID} from "../service/bookservice";

const { TabPane } = Tabs;


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
        let theRequest = {};
        if ( url.indexOf( "?" ) !== -1 ) {
            let str = url.substr( 1 );          //substr()方法返回从参数值开始到结束的字符串；
            let strs = str.split( "&" );
            for ( let i = 0; i < strs.length; i++ ) {
                theRequest[strs[i].split("=" )[0]] = (strs[ i ].split("=" )[1]);
            }
            let BookIDnum = parseInt(theRequest['bookid']);

            let that = this;

            getBookByID(BookIDnum,(data) => {
                    console.log(data);
                    that.setState({
                        bookID: BookIDnum,
                        bookTitle: data.displaytitle,
                        bookName:  data.bookname,
                        bookAuthor: data.author,
                        bookremainNum: data.inventory,
                        bookPublisher: data.publisher,
                        bookPlace: data.departure,
                        bookSellnum: data.sellnumber,
                        bookPrice: data.price,
                        bookISBN: data.isbn,
                        bookDescription: data.description,
                        allPrice:data.price,
                    });
                }
                );
        }
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
                                    <Image src={require('../asset/img/book/'+ this.state.bookID +'.jpg')}/>
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
                                                <p className="bookDetailPrice">￥{this.state.allPrice.toFixed(2)}</p>
                                            </Col>

                                            <Col span={3}>
                                                <p>版本选择：</p>
                                            </Col>
                                            <Col span={13}>
                                                <Radio.Group buttonStyle="solid" defaultValue="1">
                                                    <Radio.Button value="1" className="bookVersonChoser">版本1</Radio.Button>
                                                    <Radio.Button value="2" className="bookVersonChoser">版本2</Radio.Button>
                                                    <Radio.Button value="3" className="bookVersonChoser">版本3</Radio.Button>
                                                    <Radio.Button value="4" className="bookVersonChoser">版本4</Radio.Button>
                                                </Radio.Group>
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
                                            {/*<Col span={3}>*/}
                                            {/*    <p>商品总价：</p>*/}
                                            {/*</Col>*/}
                                            {/*<Col span={10}>*/}
                                            {/*    <InputNumber readOnly defaultValue={AllBooks[BookID].bookPrice}/>*/}
                                            {/*</Col>*/}
                                        </Row>
                                    </Card>

                                    <div className="bookDetailFunctionArea">
                                        <Row>
                                            <Col span={4}>
                                            </Col>
                                            <Col span={7}>
                                                <Link to={'paycomfirm?bookid=' + this.state.bookID +"&bookbuynum="+this.state.bookNum}>
                                                    <Button className="bookDetailBuyNow">立即购买</Button>
                                                </Link>
                                            </Col>
                                            <Col span={2}>
                                            </Col>
                                            <Col span={7}>
                                                <Button className="bookDetailAddToChart">加入购物车</Button>
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
                                        <Demo/>
                                        <Demo/>
                                        <Demo/>
                                    </TabPane>

                                </Tabs>

                            </div>


                        </div>


                        <div className="clearOnly">

                        </div>

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




