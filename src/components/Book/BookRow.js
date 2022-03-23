import React from "react";
import {Button, Col, Divider, Image, Row} from "antd";
import '../../css/BookRow.css';
import {EnvironmentOutlined, UnorderedListOutlined} from "@ant-design/icons";


const AllBooks =[
    {bookID:0,bookTitle:"",bookPrice:"",bookPlace:"", bookShoper: "",bookISBN:"",},
    {bookID:1,bookTitle:"2022新教材高中必刷题人教版A版必修第一、二册 新华书店正版",bookPrice:"￥42.00",bookPlace:"河南",
        bookShoper: "高中教辅专卖店",bookISBN:"978123456789",bookSellnum:"986",bookremainNum:"1"},
    {bookID:2,bookTitle:"这就是物理 小学科普物理读物 知识百科全书",bookPrice:"￥29.19",bookPlace:"杭州",
        bookShoper: "科普书籍专卖店",bookISBN:"978123456789",bookSellnum:"98"},
    {bookID:3,bookTitle:"大学数学教材 参考书 微积分全册 上海交通大学出版",bookPrice:"￥29.19",bookPlace:"杭州",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"286"},
    {bookID:4,bookTitle:"高中语文作文素材，人民日报教你写文章 热点素材 时事快讯",bookPrice:"￥19.20",bookPlace:"杭州",
        bookShoper: "高中语文教辅专卖店",bookISBN:"978123456789",bookSellnum:"126"},
    {bookID:5,bookTitle:"密码编码学与网络安全原理与实践（第八版）电子工业出版",bookPrice:"￥89.19",bookPlace:"北京",
        bookShoper: "新华书店图书批发",bookISBN:"978123456789",bookSellnum:"16"},
    {bookID:6,bookTitle:"高级数据结构教材C++语言版 清华大学出版社 第三版",bookPrice:"￥39.19",bookPlace:"杭州",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"13"},
    {bookID:7,bookTitle:"离散数学 机械工业出版社出版 官方正版",bookPrice:"￥59.00",bookPlace:"云南",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"12"},
    {bookID:8,bookTitle:"2022全新 深入理解计算机系统+计算机网络 打包销售",bookPrice:"￥49.99",bookPlace:"武汉",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"2336"},
    {bookID:9,bookTitle:"软件工程原理与实践教材 沈备军编著",bookPrice:"￥29.19",bookPlace:"上海",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"123"},
    {bookID:10,bookTitle:"大学计算机网路教材 电子工业出版",bookPrice:"￥29.19",bookPlace:"杭州",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"1234"},
    {bookID:11,bookTitle:"四大名著《西游记》《水浒传》《三国演义》《红楼梦》套装书籍",bookPrice:"￥129.29",bookPlace:"南京",
        bookShoper: "儿童图书店",bookISBN:"978123456789",bookSellnum:"986"},
    {bookID:12,bookTitle:"月刊Piano外文钢琴乐谱",bookPrice:"￥29.19",bookPlace:"杭州",
        bookShoper: "高等学校教辅专卖店",bookISBN:"978123456789",bookSellnum:"566"},
];


class BookRow extends React.Component{

    render() {
        let ID = parseInt(this.props.bookID);
        if(ID != null)
            return (
                <>
                    <Row>
                        <Col span={3}>
                            <Image className="BookRow_Image" src={require('../../asset/img/book/'+ ID +'.jpg')}/>
                        </Col>
                        <Col span={6}>
                            <p className="BookRow_bookTitle">{AllBooks[ID].bookTitle}</p>

                            <div className="BookRow_ButtonArea">
                                <p className="BookRow_Shoper"><UnorderedListOutlined/>&nbsp;{AllBooks[ID].bookShoper}</p>
                                <p className="BookRow_Place"><EnvironmentOutlined/>&nbsp;{AllBooks[ID].bookPlace}</p>
                            </div>
                        </Col>
                        <Col span={2}>
                        </Col>
                        <Col span={3}>
                            <p className="BookRow_bookPrice">{AllBooks[ID].bookPrice}</p>
                            <p className="BookRow_bookStorageStatus">余量充足</p>
                            <p className="BookRow_bookSellnum">&nbsp;月销量 {AllBooks[ID].bookSellnum}</p>
                        </Col>
                        <Col span={8}>
                            <Button className="BookRow_functionButton" type="primary" danger>立即购买</Button>
                            <Button className="BookRow_functionButton" type="primary">加入购物车</Button>
                            <Button className="BookRow_functionButton" type="primary">加入收藏</Button>
                        </Col>
                    </Row>
                    <Divider></Divider>
                </>

            );
        else
            return (<></>);
    }
}

export default BookRow;