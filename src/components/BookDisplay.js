import React from "react";
import {Card, Carousel, Image} from "antd";
import BookCard from "./Book/BookCard";

class BookDisplay extends React.Component{
    render() {
        return (
            <div className="BookDisplay">
                <p className="BookDisplay_Title">畅销书籍</p>

                <Carousel autoplay>
                    <div>
                        <Image src={require("../asset/Carousel/c1.jpg")} className="CarouselPicture">
                        </Image>
                    </div>
                    <div>
                        <Image src={require("../asset/Carousel/c2.jpg")} className="CarouselPicture">
                        </Image>
                    </div>
                    <div>
                        <Image src={require("../asset/Carousel/c3.jpg")} className="CarouselPicture">
                        </Image>
                    </div>
                    <div>
                        <Image src={require("../asset/Carousel/c4.jpg")} className="CarouselPicture">
                        </Image>
                    </div>
                    <div>
                        <Image src={require("../asset/Carousel/c5.jpg")} className="CarouselPicture">
                        </Image>
                    </div>
                    <div>
                        <Image src={require("../asset/Carousel/c6.jpg")} className="CarouselPicture">
                        </Image>
                    </div>
                </Carousel>,

                {/*<BookCard*/}
                {/*    bookTitleStr="2022高中必刷题 人教必修第1、2册书籍 赠品七选六"*/}
                {/*    bookID="1"*/}
                {/*    bookPrice="￥21.00"*/}
                {/*>*/}
                {/*</BookCard>*/}
                {/*<BookCard*/}
                {/*    bookTitleStr="《这就是物理》 科普课外读物优惠 "*/}
                {/*    bookID="2"*/}
                {/*    bookPrice="￥49.99"*/}
                {/*>*/}
                {/*</BookCard>*/}
                {/*<BookCard*/}
                {/*    bookTitleStr="大学数学教材 参考书 微积分全册 上海交通大学出版"*/}
                {/*    bookID="3"*/}
                {/*    bookPrice="￥39.99"*/}
                {/*>*/}
                {/*</BookCard>*/}
            </div>
        );
    }
}
export default BookDisplay;