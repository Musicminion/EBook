
import EBookTopBar from './EBookTopBar'
import SearchPanel from "./SearchPanel";
import React from 'react';
import 'antd/dist/antd.css';
import '../css/mainPage.css';
import {Card, Layout} from "antd";
import BookCard from "./Book/BookCard";
import {startSakura, stopp} from "./test";
import {history} from "../App";
import ShopDisplay from "./ShopDisplay";
import BookDisplay from "./BookDisplay";
import Recommendation from "./Recommendation";



class MainPage extends React.Component{
    componentDidMount() {

    }
    componentWillMount() {

    }

    render() {
        return (
            <div className="eBookPageContainer">

                <EBookTopBar></EBookTopBar>

                <div className="MainContents">
                    <div className="SearchPanel">
                        <SearchPanel id="MainPageSearchPanel"></SearchPanel>
                    </div>

                    <ShopDisplay></ShopDisplay>
                    <BookDisplay></BookDisplay>

                    <Recommendation></Recommendation>
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