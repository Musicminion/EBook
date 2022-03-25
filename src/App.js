import React from "react";
import LoginPage from "./view/LoginPage";
import MainPage from "./view/MainPage";

import LoginPageAbout from "./view/LoginPageAbout";
import LoginShopRegisterPage from "./components/Login/LoginCompPageShopRegister";
import LoginPageFeedBack from "./view/LoginPageFeedBack";
import BookDetailPage from "./view/BookDetailPage";
import SearchResultPage from "./view/SearchResultPage";
import BookTablePage from "./view/BookTablePage";
import LoginPageBase from "./view/LoginPageBase";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {history} from "./components/PublicHistory";
import PayComfirm from "./view/PayComfirm";

// import { createBrowserHistory } from 'history';
// import LoginPassport from "./components/Login/LoginPassport";
// export const history = createBrowserHistory();



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
                        <Route exact path="/eBook/searchresult" component={SearchResultPage}/>
                        <Route exact path="/eBook/booktable" component={BookTablePage}/>
                        <Route exact path="/eBook/paycomfirm" component={PayComfirm}/>


                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/login/shopregister" component={LoginShopRegisterPage}/>
                        <Route exact path="/login/feedback" component={LoginPageFeedBack}/>
                        <Route exact path="/login/about" component={LoginPageAbout}/>
                        <Route exact path="/LoginPageBase" component={LoginPageBase}/>
                        <Redirect from="/*" to="/eBook/MainPage" />
                    </Switch>
                </Router>
            </>

        );
    }
}
export default App;
