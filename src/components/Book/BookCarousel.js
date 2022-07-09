import React from "react";
import {Carousel, Image} from "antd";

// 组件：首页走马灯的展示

class BookCarousel extends React.Component{
    render() {
        return (
            <div className="BookDisplay">
                <p className="BookDisplay_Title">畅销书籍</p>

                <div className="BookDisplayCarouselArea">
                    <Carousel autoplay>
                        <div>
                            <Image src={require("../../asset/Carousel/c1.jpg")} className="CarouselPicture">
                            </Image>
                        </div>
                        <div>
                            <Image src={require("../../asset/Carousel/c2.jpg")} className="CarouselPicture">
                            </Image>
                        </div>
                        <div>
                            <Image src={require("../../asset/Carousel/c3.jpg")} className="CarouselPicture">
                            </Image>
                        </div>
                        <div>
                            <Image src={require("../../asset/Carousel/c4.jpg")} className="CarouselPicture">
                            </Image>
                        </div>
                        <div>
                            <Image src={require("../../asset/Carousel/c5.jpg")} className="CarouselPicture">
                            </Image>
                        </div>
                        <div>
                            <Image src={require("../../asset/Carousel/c6.jpg")} className="CarouselPicture">
                            </Image>
                        </div>
                    </Carousel>,
                </div>
            </div>
        );
    }
}
export default BookCarousel;