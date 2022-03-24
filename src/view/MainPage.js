
import TopBar from '../components/TopBar'
import SearchPanel from "../components/SearchPanel";
import React from 'react';
import 'antd/dist/antd.css';
import '../css/mainPage.css';
import {history} from "../App";
import ShopDisplay from "../components/ShopDisplay";
import BookDisplay from "../components/BookDisplay";
import Recommendation from "../components/Recommendation";


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
                        <SearchPanel id="MainPageSearchPanel"/>
                    </div>

                    <ShopDisplay/>
                    <BookDisplay/>

                    <Recommendation/>
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