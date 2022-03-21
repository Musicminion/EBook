import React from "react";
import EBookTopBar from "./EBookTopBar";
import BookTable from "./Book/BookTable";
import {history} from "./PublicHistory";
import LoginPage from "./Login/LoginPage";

class EBookBookTablePage extends React.Component{


    render() {
            return (
                <div className="eBookPageContainer">
                    <EBookTopBar></EBookTopBar>
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

export default EBookBookTablePage;