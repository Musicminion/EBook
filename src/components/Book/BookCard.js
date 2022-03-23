import React from "react";
import {Card, Image} from "antd";
import {Switch} from "react-router-dom";
import '../../css/mainPage.css'
import {type} from "@testing-library/user-event/dist/type";
import {Link} from "react-router-dom";
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";


const AllBooks =[
    {bookID:0,bookTitle:"",bookPrice:"",bookPlace:"", bookShoper: "",bookISBN:"",},
    {bookID:1,bookTitle:"2022新教材高中必刷题人教版A版必修第一、二册 新华书店正版",bookPrice:"￥42.00",bookPlace:"河南", bookShoper: "高中教辅专卖店",bookISBN:"978123456789",},
    {bookID:2,bookTitle:"这就是物理 小学科普物理读物 知识百科全书",bookPrice:"￥29.19",bookPlace:"杭州", bookShoper: "科普书籍专卖店",bookISBN:"978123456789",},
    {bookID:3,bookTitle:"大学数学教材 参考书 微积分全册 上海交通大学出版",bookPrice:"￥29.19",bookPlace:"杭州", bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",},
    {bookID:4,bookTitle:"高中语文作文素材，人民日报教你写文章 热点素材 时事快讯",bookPrice:"￥19.20",bookPlace:"杭州", bookShoper: "高中语文教辅专卖店",bookISBN:"978123456789",},
    {bookID:5,bookTitle:"密码编码学与网络安全原理与实践（第八版）电子工业出版",bookPrice:"￥89.19",bookPlace:"北京", bookShoper: "新华书店图书批发",bookISBN:"978123456789",},
    {bookID:6,bookTitle:"高级数据结构教材C++语言版 清华大学出版社 第三版",bookPrice:"￥39.19",bookPlace:"杭州", bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",},
    {bookID:7,bookTitle:"离散数学 机械工业出版社出版 官方正版",bookPrice:"￥59.00",bookPlace:"云南", bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",},
    {bookID:8,bookTitle:"2022全新 深入理解计算机系统+计算机网络 打包销售",bookPrice:"￥49.99",bookPlace:"武汉", bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",},
    {bookID:9,bookTitle:"软件工程原理与实践教材 沈备军编著",bookPrice:"￥29.19",bookPlace:"上海", bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",},
    {bookID:10,bookTitle:"大学计算机网路教材 电子工业出版",bookPrice:"￥29.19",bookPlace:"杭州", bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",},
    {bookID:11,bookTitle:"四大名著《西游记》《水浒传》《三国演义》《红楼梦》套装书籍",bookPrice:"￥129.29",bookPlace:"南京", bookShoper: "儿童图书店",bookISBN:"978123456789",},
    {bookID:12,bookTitle:"月刊Piano外文钢琴乐谱",bookPrice:"￥29.19",bookPlace:"杭州", bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",},
];



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
                        <Image className="BookCard_Image" src={require('../../asset/img/book/'+ ID +'.jpg')}/>
                        <p className="BookCard_bookPrice">{AllBooks[ID].bookPrice}</p>
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