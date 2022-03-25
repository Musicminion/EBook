import React from "react";
import {Col, Divider, Image, InputNumber, Row} from "antd";
import {Link} from "react-router-dom";
import {AllBooks} from "./tmpBookData";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import BookOperation from "./BookOperation";
import BookPriceDisplay from "./BookPriceDisplay";

// 这一部分的代码需要优化，有很多冗余

class BookOrderRow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            bookID: this.props.bookID,
            buynum:this.props.buynum,
            allPrice: 0,
        }
    }

    componentDidMount() {
        let url = decodeURI(window.location.search);
        let theRequest = new Object();
        if ( url.indexOf( "?" ) != -1 ) {
            let str = url.substr( 1 );
            let strs = str.split( "&" );
            for ( let i = 0; i < strs.length; i++ ) {
                theRequest[strs[i].split("=" )[0]] = (strs[ i ].split("=" )[1]);
            }
            let BookPurchasenum = Number(theRequest['bookbuynum']);
            let BookEachPrice = Number(AllBooks[Number(theRequest['bookid'])].bookPrice);
            let initTotalPrice = BookPurchasenum * BookEachPrice;


            setTimeout(() => {
                this.setState({
                    allPrice: initTotalPrice,
                });
            }, 0);


        }
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
        let refreshedPrice = e * Number(AllBooks[ID].bookPrice);
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

                            <Row>
                                <Col span={8}>
                                    <InputNumber
                                        size="large" min={1} max={100000} defaultValue={num}
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