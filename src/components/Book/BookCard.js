import React from "react";
import {Card, Image} from "antd";
import '../../css/mainPage.css'
import {Link} from "react-router-dom";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";

//  [组件用途介绍]：书籍卡片，类比淘宝网的每个商品展示的卡片，卡片上方是商品图片，下方是简介，单机卡片可以进入详情页
//  [组件使用场景]：主页的书籍展示，搜索结果的展示，使用卡片展示比使用单调的列表展示更加优雅
//  [功能详细介绍]：利用父亲组件传递的 props,作为数据的来源，体现React数据流的单向性。

class BookCard extends React.Component{
    render() {
        return (
            <>
                <Card className="BookCard">
                    <Link to={'bookdetail?bookid='+this.props.bookInfo.id}>
                        <Image className="BookCard_Image" src={this.props.bookInfo.imgtitle}/>
                        <p className="BookCard_bookPrice">
                            {"￥" +(this.props.bookInfo.price/100).toFixed(2)}
                        </p>
                        <div className="BookCard_TitleArea">
                            <p className="BookCard_TitleHref">{this.props.bookInfo.displaytitle}</p>
                        </div>
                        <div>
                            <p className="BookCard_Shoper">
                                <UnorderedListOutlined/>&nbsp;{this.props.bookInfo.publisher}
                            </p>
                            <p className="BookCard_Place">
                                <EnvironmentOutlined/>&nbsp;{this.props.bookInfo.departure}
                            </p>
                        </div>
                    </Link>
                </Card>
            </>
        );

    }
}

export default BookCard;