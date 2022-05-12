import React from "react";
import {Card, Image} from "antd";
import {Switch} from "react-router-dom";
import '../../css/mainPage.css'
import {type} from "@testing-library/user-event/dist/type";
import {Link} from "react-router-dom";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {AllBooks} from "./tmpBookData";




class BookCard extends React.Component{
    // constructor() {
    //     super();
    //     this.states={
    //         bookCover:null,
    //         bookTitleStr:null,
    //         bookTagISBN:null,
    //         bookPrice:null,
    //         bookSellShop:null,
    //         bookStoragePlace:null,
    //         bookSellNum:null,
    //         bookInStorage:null,
    //         publisher:null,
    //     }
    // }

    state = {
        loading: true,
    };

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    componentDidMount() {

    }


    render() {
        const { loading } = this.state;
        let ID = parseInt(this.props.bookID);

        return (
            <>
                <Switch checked={!loading} onChange={this.onChange} />

                <Link to={'bookdetail?bookid='+ID}>
                    <Card className="BookCard">
                        <Image className="BookCard_Image" src={require('../../asset/img/book/'+ ID +'.jpg')}/>
                        <p className="BookCard_bookPrice">{"￥" + AllBooks[ID].bookPrice}</p>
                        <div className="BookCard_TitleArea">
                            <p className="BookCard_TitleHref">{AllBooks[ID].bookTitle}</p>
                        </div>
                        <div>
                            <p className="BookCard_Shoper"><UnorderedListOutlined/>&nbsp;{AllBooks[ID].bookShoper}</p>
                            <p className="BookCard_Place"><EnvironmentOutlined/>&nbsp;{AllBooks[ID].bookPlace}</p>
                        </div>
                    </Card>
                </Link>

            </>


        );
    }
}

export default BookCard;