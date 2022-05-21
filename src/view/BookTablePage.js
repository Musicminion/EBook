import React from "react";
import TopBar from "../components/TopBar/TopBar";
import BookTable from '../components/Book/BookTable.tsx';
import {history} from "../components/PublicHistory";
import LoginPage from "./login/LoginPage";
import loginPassport from "../components/Login/LoginPassport";

class BookTablePage extends React.Component{
    componentWillMount() {
        if(loginPassport.getPrivilege() > 0)
        {
            window.location.href="/login";
        }
    }

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