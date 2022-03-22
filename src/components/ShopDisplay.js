import React from "react";
import {Card} from "antd";

class ShopDisplay extends React.Component{
    render() {
        return (
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

        );
    }
}

export default ShopDisplay;