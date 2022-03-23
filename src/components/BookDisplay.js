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

            </div>
        );
    }
}
export default BookDisplay;