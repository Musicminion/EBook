
import EBookTopBar from './EBookTopBar'
import SearchPanel from "./SearchPanel";
import React from 'react';
import 'antd/dist/antd.css';
import '../css/MainPage.css';
import {Card} from "antd";
import BookCard from "./Book/BookCard";


// import tmptestpic1 from '../asset/img/book/1.jpg'
// import tmptestpic2 from '../asset/img/book/2.jpg'
// import tmptestpic3 from '../asset/img/book/3.jpg'



class MainPage extends React.Component{
    render() {
        return (
            <div className="eBookPageContainer">
                <div>
                     <EBookTopBar/>
                </div>
                <div className="MainContents">
                    <div className="SearchPanel">
                        <SearchPanel id="MainPageSearchPanel"></SearchPanel>
                    </div>
                    <div className="ShopDisplay">
                        <p className="ShopDisplay_Title">畅销店铺</p>
                        <Card
                            title="书店名称1"
                            size="small"
                            extra={<a href="#">进入店铺</a>}
                            className="shopCard"
                        >
                            <p>月销量:200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主题:外文书店</p>
                        </Card>

                        <Card
                            title="书店名称2"
                            size="small"
                            extra={<a href="#">进入店铺</a>}
                            className="shopCard"
                        >
                            <p>月销量:160&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主题:科幻、悬疑</p>
                        </Card>

                        <Card
                            title="书店名称3"
                            size="small"
                            extra={<a href="#">进入店铺</a>}
                            className="shopCard"
                        >
                            <p>月销量:100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主题:儿童书籍、教辅</p>
                        </Card>
                    </div>

                    <div className="BookDisplay">
                        <p className="BookDisplay_Title">畅销书籍</p>

                        <BookCard
                            bookTitleStr="2022高中必刷题 人教必修第1、2册书籍 赠品七选六"
                            bookID="1"
                            bookPrice="￥21.00"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="《这就是物理》 科普课外读物优惠 "
                            bookID="2"
                            bookPrice="￥49.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="大学数学教材 参考书 微积分全册 上海交通大学出版"
                            bookID="3"
                            bookPrice="￥39.99"
                        >
                        </BookCard>

                    </div>

                    <div className="Recommendation">
                        {/*<h4>其他推荐</h4>*/}
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>

                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>
                        <BookCard
                            bookTitleStr="测试用商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
                            bookID="3"
                            bookPrice="￥99.99"
                        >
                        </BookCard>

                    </div>






                </div>

                <div className="clearOnly">
                </div>

                <div className="Pagefooter">
                    <p>CopyRight ©2022 All Rights Reserved.Developed By Zhang Ziqian.</p>
                </div>

            </div>

        );
    }
}




export default MainPage;