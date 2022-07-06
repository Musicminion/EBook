import React from "react";
import {Card, List} from "antd";
import BookCard from "./Book/BookCard";
import {getMainPageBooks} from "../service/bookservice";



class Recommendation extends React.Component{
    constructor() {
        super();
        this.state = {
            RecommendationData : [],
            RecommendationBookCard : []
        };

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
                        pageSize: 4,
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

export default Recommendation;