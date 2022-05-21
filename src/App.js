import React from "react";
import LoginPage from "./view/login/LoginPage";
import MainPage from "./view/MainPage";

import LoginPageAbout from "./view/login/LoginPageAbout";
import LoginShopRegisterPage from "./components/Login/ShopRegister";
import LoginPageFeedBack from "./view/login/LoginPageFeedBack";
import BookDetailPage from "./view/BookDetailPage";
import SearchResultPage from "./view/SearchResultPage";
import BookTablePage from "./view/BookTablePage";
import LoginPageBase from "./view/login/LoginPageBase";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {history} from "./components/PublicHistory";
import SingleOrderComfirm from "./view/Order/singleOrderComfirm";
import PrivateRoute from "./route/PrivateRoute";
import OrderPay from "./view/Order/OrderPay";
import myCart from "./view/iEbook/myCart";
import ShopCartOrderComfirm from "./view/Order/shopCartOrderComfirm";
import shopCartOrderComfirm from "./view/Order/shopCartOrderComfirm";
import purchaseSuccess from "./view/result/purchaseSuccess";
import errorPage from "./view/result/errorPage";

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
                        {/* -----------------  下面的部分是共有路由  ----------------- */}
                        <Route exact path="/eBook/MainPage" component={MainPage}/>
                        <Route exact path="/eBook/bookdetail" component={BookDetailPage}/>
                        <Route exact path="/eBook/searchresult" component={SearchResultPage}/>
                        <Route exact path="/eBook/booktable" component={BookTablePage}/>


                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/login/shopregister" component={LoginShopRegisterPage}/>
                        <Route exact path="/login/feedback" component={LoginPageFeedBack}/>
                        <Route exact path="/login/about" component={LoginPageAbout}/>
                        <Route exact path="/LoginPageBase" component={LoginPageBase}/>

                        <Route exact path="/eBook/purchaseSuccess" component={purchaseSuccess}/>
                        <Route exact path="/eBook/errorPage" component={errorPage}/>
                        {/*errorPage*/}

                        {/* ---------  下面的部分是私有路由  带有权限鉴定 --------------- */}
                        <PrivateRoute exact path="/eBook/singelOrderComfirm" component={SingleOrderComfirm}/>
                        <PrivateRoute exact path="/eBook/shopCartOrderComfirm" component={shopCartOrderComfirm}/>
                        <PrivateRoute exact path="/eBook/order/" component={OrderPay}/>
                        <PrivateRoute exact path="/eBook/myCart/" component={myCart}/>


                        {/*<PrivateRoute exact path="/" component={HomeView} />*/}
                        <Redirect from="/*" to="/eBook/MainPage" />
                    </Switch>
                </Router>
            </>

        );
    }
}
export default App;
