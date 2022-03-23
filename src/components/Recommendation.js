import React from "react";
import {Card} from "antd";
import BookCard from "./Book/BookCard";



class Recommendation extends React.Component{

    render() {
        return (
            <div className="Recommendation">
                {/*<h1>其他推荐</h1>*/}
                <BookCard
                    bookTitleStr="高等数学教材微积分上册第二版 高等教育出版社"
                    bookID="3"
                    bookPrice="￥28.99"
                    bookPublishserStr="高等教育出版社"
                    bookShoperStr="高校教辅专卖店"
                    bookPlaceStr="上海"

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
        );
    }
}

export default Recommendation;