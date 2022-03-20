import React from "react";
import LoginPage from "./components/Login/LoginPage";
import MainPage from "./components/MainPage";

import LoginPageAbout from "./components/Login/LoginPageAbout";
import LoginShopRegisterPage from "./components/Login/LoginCompPageShopRegister";
import LoginPageFeedBack from "./components/Login/LoginPageFeedBack";
import BookDetailPage from "./components/Book/BookDetailPage";
import EBookSearchResultPage from "./components/EBookSearchResultPage";
import EBookBookTablePage from "./components/EBookBookTablePage";
import LoginPageBase from "./components/Login/LoginPageBase";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { createBrowserHistory } from 'history';
import LoginCompPassport from "./components/Login/LoginCompPassport";
export const history = createBrowserHistory();


class App extends React.Component{
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }
    render() {
        return(
            <>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/eBook/MainPage" component={MainPage}/>
                        <Route exact path="/eBook/bookdetail" component={BookDetailPage}/>
                        <Route exact path="/eBook/searchresult" component={EBookSearchResultPage}/>
                        <Route exact path="/eBook/booktable" component={EBookBookTablePage}/>

                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/login/shopregister" component={LoginShopRegisterPage}/>
                        <Route exact path="/login/feedback" component={LoginPageFeedBack}/>
                        <Route exact path="/login/about" component={LoginPageAbout}/>
                        <Route exact path="/LoginPageBase" component={LoginPageBase}/>
                        {/*LoginPageBase*/}
                        <Redirect from="/*" to="/eBook/MainPage" />
                    </Switch>
                </Router>
            </>

        );
    }
}
export default App;
