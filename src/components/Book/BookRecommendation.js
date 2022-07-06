import React from "react";
import {Card, List} from "antd";
import BookCard from "./BookCard";
import {getMainPageBooks} from "../../service/bookservice";

//  [组件用途介绍]：作为父组件，其儿子组件是一系列的 BookCard，书籍展示卡片，数据从父组件获取，然后单向流动到子组件的 props
//  [组件使用场景]：主页的书籍推荐区域，展示书籍的卡片
//  [功能详细介绍]：和后端交互，获取推荐书籍的列表

class BookRecommendation extends React.Component{
    constructor() {
        super();
        this.state = {RecommendationData : [],};
        getMainPageBooks(
            (data) => {
                this.setState({
                    RecommendationData : data,
                });
            }
        );
    }

    render() {
        return (
            <div className="Recommendation">
                <List
                    grid={{gutter: 10, column: 4}}
                    dataSource={this.state.RecommendationData}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 12,
                    }}

                    renderItem={(item) => {
                        return (
                            <List.Item>
                                <BookCard bookInfo={item}/>
                            </List.Item>
                        );
                    }}
                />
            </div>
        );
    }
}

export default BookRecommendation;