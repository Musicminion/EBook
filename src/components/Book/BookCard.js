import React from "react";
import {Card, Image} from "antd";
import {Switch} from "react-router-dom";
import '../../css/mainPage.css'
import {type} from "@testing-library/user-event/dist/type";
import {Link} from "react-router-dom";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";


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