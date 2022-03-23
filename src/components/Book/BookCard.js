import React from "react";
import {Card, Image} from "antd";
import {Switch} from "react-router-dom";
import '../../css/mainPage.css'
import {type} from "@testing-library/user-event/dist/type";
import {Link} from "react-router-dom";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";

// import tmptestpic4 from '../asset/img/book/4.jpg'




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

    render() {
        const { loading } = this.state;
        let ID = parseInt(this.props.bookID);

        return (
            <>
                <Switch checked={!loading} onChange={this.onChange} />

                <Link to={{pathname:'/eBook/bookdetail'}}>
                    <Card className="BookCard">
                        <Image src={require('../../asset/img/book/'+ ID +'.jpg')}/>
                        <p className="BookCard_bookPrice">{this.props.bookPrice}</p>
                        <p className="BookCard_TitleHref">{this.props.bookTitleStr}</p>
                        <div>
                            <p className="BookCard_Shoper"><UnorderedListOutlined/>&nbsp;{this.props.bookShoperStr}</p>
                            <p className="BookCard_Place"><EnvironmentOutlined/>&nbsp;{this.props.bookPlaceStr}</p>
                        </div>

                    </Card>
                </Link>

            </>


        );
    }
}

export default BookCard;