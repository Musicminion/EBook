import React from "react";
import {Col, Divider, Image, InputNumber, Row} from "antd";
import {Link} from "react-router-dom";
import {AllBooks} from "./tmpBookData";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import BookOperation from "./BookOperation";
import BookPriceDisplay from "./BookPriceDisplay";
import {getBookByID} from "../../service/bookservice";

// 这一部分的代码需要优化，有很多冗余

class BookOrderRow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            bookID: 0,
            buynum: this.props.buynum,
            allPrice: 0,
        };

        let url = decodeURI(window.location.search);
        let theRequest = {};
        if ( url.indexOf( "?" ) !== -1 ) {
            let str = url.substr( 1 );
            let strs = str.split( "&" );
            for ( let i = 0; i < strs.length; i++ ) {
                theRequest[strs[i].split("=" )[0]] = (strs[ i ].split("=" )[1]);
            }

            let that = this;
            let id = parseInt(theRequest['bookid']);
            setTimeout(() => {
                this.setState({
                    bookID : id,
                });
            }, 0);

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

            // let BookPurchasenum = Number(theRequest['bookbuynum']);
            // let BookEachPrice = Number(AllBooks[Number(theRequest['bookid'])].bookPrice);
            // let initTotalPrice = BookPurchasenum * BookEachPrice;
            //
            // setTimeout(() => {
            //     this.setState({
            //         allPrice: initTotalPrice,
            //     });
            // }, 0);
        }
    }

    componentDidMount() {
        let BookPurchasenum = this.state.buynum;
        let BookEachPrice = this.state.bookPrice;
        let initTotalPrice = BookPurchasenum * BookEachPrice;
        setTimeout(() => {
            this.setState({
                allPrice: initTotalPrice,
            });
        }, 0);

    }

    buynumInit(){
        let url = decodeURI(window.location.search);
        let theRequest = new Object();
        if ( url.indexOf( "?" ) != -1 ) {
            let str = url.substr( 1 );
            let strs = str.split( "&" );
            for ( let i = 0; i < strs.length; i++ ) {
                theRequest[strs[i].split("=" )[0]] = (strs[ i ].split("=" )[1]);
            }
            let BookPurchasenum = Number(theRequest['bookbuynum']);
            return BookPurchasenum;
        }
    }

    buyNumChange(e){
        let ID = parseInt(this.props.bookID);
        let refreshedPrice = e * Number(this.state.bookPrice);
        this.setState({allPrice: refreshedPrice});
    }

    render() {
        let ID = parseInt(this.props.bookID);
        let num = this.buynumInit();

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
                        <Col span={8}>

                            <Row>
                                <Col span={8}>
                                    <InputNumber
                                        size="large" min={1} max={this.state.bookremainNum} defaultValue={num}
                                        onChange={e => this.buyNumChange(e)}
                                    />
                                </Col>
                                <Col span={12}>
                                    <p>无特殊优惠</p>
                                </Col>
                                <Col span={4}>
                                    <p className="payComfirmPriceAll">￥{this.state.allPrice.toFixed(2)}</p>
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

export default BookOrderRow;