import React from "react";
import TopBar from "../components/TopBar/TopBar";
import BookTable from '../components/Book/BookTable.tsx';
import {history} from "../components/PublicHistory";
import LoginPage from "./LoginPage";

class BookTablePage extends React.Component{

    render() {
            return (
                <div className="eBookPageContainer">
                    <TopBar></TopBar>
                    <div className="MainContentsCard">
                        <BookTable/>
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

export default BookTablePage;