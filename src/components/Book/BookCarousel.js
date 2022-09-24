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
                            <Image
                                src={require("../../asset/Carousel/c1.jpg")}
                                width={"90%"}
                                height={390}
                                preview={false}
                                className="CarouselPicture"
                            />
                        </div>
                        <div>
                            <Image
                                src={require("../../asset/Carousel/c2.jpg")}
                                width={"90%"}
                                height={390}
                                preview={false}
                                className="CarouselPicture"
                            />
                        </div>
                        <div>
                            <Image
                                src={require("../../asset/Carousel/c3.jpg")}
                                width={"90%"}
                                height={390}
                                preview={false}
                                className="CarouselPicture"
                            />
                        </div>
                        <div>
                            <Image
                                src={require("../../asset/Carousel/c4.jpg")}
                                width={"90%"}
                                height={390}
                                preview={false}
                                className="CarouselPicture"
                            />
                        </div>
                        <div>
                            <Image
                                src={require("../../asset/Carousel/c5.jpg")}
                                width={"90%"}
                                height={390}
                                preview={false}
                                className="CarouselPicture"
                            />
                        </div>
                        <div>
                            <Image
                                src={require("../../asset/Carousel/c6.jpg")}
                                width={"90%"}
                                height={390}
                                preview={false}
                                className="CarouselPicture"
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default BookCarousel;