import React from "react";
import {Card} from "antd";
import BookCard from "./Book/BookCard";



class Recommendation extends React.Component{

    render() {
        return (
            <div className="Recommendation">
                <BookCard bookID="1"/>
                <BookCard bookID="2"/>
                <BookCard bookID="3"/>
                <BookCard bookID="4"/>
                <BookCard bookID="5"/>
                <BookCard bookID="6"/>
                <BookCard bookID="7"/>
                <BookCard bookID="8"/>
                <BookCard bookID="9"/>
                <BookCard bookID="10"/>
                <BookCard bookID="11"/>
                <BookCard bookID="12"/>
                <BookCard bookID="11"/>

            </div>
        );
    }
}

export default Recommendation;