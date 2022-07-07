
import TopBar from '../components/TopBar/TopBar'
import SearchPanel from "../components/SearchPanel";
import React from 'react';
import 'antd/dist/antd.css';
import '../css/mainPage.css';
import {history} from "../App";
import ShopDisplay from "../components/ShopDisplay";
import BookCarousel from "../components/Book/BookCarousel";
import BookRecommendation from "../components/Book/BookRecommendation";


class MainPage extends React.Component{
    componentDidMount() {

    }
    componentWillMount() {

    }

    render() {
        return (
            <div className="eBookPageContainer">

                <TopBar></TopBar>

                <div className="MainContents">
                    <div className="SearchPanel">
                        <SearchPanel id="MainPageSearchPanel" fromPage="MainPage"/>
                    </div>

                    <div className="MainPageTopArea">
                        <ShopDisplay/>
                        <BookCarousel/>
                    </div>


                    {/*<ShopDisplay/>*/}
                    {/*<BookCarousel/>*/}

                    <BookRecommendation/>
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




export default MainPage;