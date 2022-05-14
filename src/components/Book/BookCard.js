import React from "react";
import {Card, Image} from "antd";
import {Switch} from "react-router-dom";
import '../../css/mainPage.css'
import {type} from "@testing-library/user-event/dist/type";
import {Link} from "react-router-dom";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {AllBooks} from "./tmpBookData";
import {getBookByID} from "../../service/bookservice";


class BookCard extends React.Component{
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
                <Card className="BookCard">
                    <Link to={'bookdetail?bookid='+ID}>
                        <Image className="BookCard_Image" src={require('../../asset/img/book/'+ ID +'.jpg')}/>
                        <p className="BookCard_bookPrice">{"￥" +this.state.bookPrice}</p>
                        <div className="BookCard_TitleArea">
                            <p className="BookCard_TitleHref">{AllBooks[ID].bookTitle}</p>
                        </div>
                        <div>
                            <p className="BookCard_Shoper"><UnorderedListOutlined/>&nbsp;{this.state.bookPublisher}</p>
                            <p className="BookCard_Place"><EnvironmentOutlined/>&nbsp;{this.state.bookPlace}</p>
                        </div>
                    </Link>
                </Card>
            );
        else
            return (<></>);
    }
}

export default BookCard;