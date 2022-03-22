import React from "react";
import SearchPanel from "./SearchPanel";
import '../css/Common.css'
import EBookTopBar from "./EBookTopBar";
import BookCard from "./Book/BookCard";
import { Pagination } from 'antd';

class EBookSearchResultPage extends React.Component{

    render() {
        return (
            <div className="eBookPageContainer">
                <EBookTopBar></EBookTopBar>
                <div className="SearchPanel">
                    <SearchPanel id="MainPageSearchPanel"></SearchPanel>
                </div>
                <div className="MainContentsCard">
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

                    <div className="PageSelector">
                        <Pagination defaultCurrent={1} total={50} />
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

export default EBookSearchResultPage;