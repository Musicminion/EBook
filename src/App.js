import React from "react";
import LoginPage from "./view/login/LoginPage";
import MainPage from "./view/MainPage";

import LoginPageAbout from "./view/login/LoginPageAbout";
import LoginPageFeedBack from "./view/login/LoginPageFeedBack";
import BookDetailPage from "./view/BookDetailPage";
import SearchResultPage from "./view/SearchResultPage";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {history} from "./components/PublicHistory";
import SingleOrderComfirm from "./view/Order/singleOrderComfirm";
import PrivateRoute from "./route/PrivateRoute";
import myCart from "./view/iEbook/myCart";
import shopCartOrderComfirm from "./view/Order/shopCartOrderComfirm";
import purchaseSuccess from "./view/Result/purchaseSuccess";
import errorPage from "./view/Result/errorPage";
import AdminRoute from "./route/AdminRoute";
import userManage from "./view/admin/Manage/userManage";
import newBook from "./view/admin/Manage/newBook";
import publishSuccess from "./view/Result/publishSuccess";
import bookManage from "./view/admin/Manage/BookManage";
import editBook from "./view/admin/Manage/editBook";
import orderManage from "./view/admin/Manage/orderManage";
import userConsumption from "./view/admin/Statistics/UserConsumption";
import myOrder from "./view/iEbook/myOrder";
import BookSellnum from "./view/admin/Statistics/BookSellnum";
import myStatistics from "./view/iEbook/myStatistics";
import RulesPage from "./view/login/LoginPageRules";
import noItemPage from "./view/Result/noItemPage";
import myAccount from "./view/iEbook/myAccount";

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
                        <Route exact path="/eBook/searchresult" component={SearchResultPage}/>

                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/login/rules" component={RulesPage}/>
                        <Route exact path="/login/feedback" component={LoginPageFeedBack}/>
                        <Route exact path="/login/about" component={LoginPageAbout}/>

                        <Route exact path="/eBook/purchaseSuccess" component={purchaseSuccess}/>
                        <Route exact path="/eBook/errorPage" component={errorPage}/>
                        <Route exact path="/eBook/publishSuccess" component={publishSuccess}/>
                        <Route exact path="/eBook/noItemPage" component={noItemPage}/>

                        {/* ---------  下面的部分是私有路由  带有权限鉴定 --------------- */}
                        <PrivateRoute exact path="/eBook/makeOrder/directBuy" component={SingleOrderComfirm}/>
                        <PrivateRoute exact path="/eBook/makeOrder/shopCart" component={shopCartOrderComfirm}/>
                        <PrivateRoute exact path="/eBook/myAccount/" component={myAccount}/>
                        <PrivateRoute exact path="/eBook/myCart/" component={myCart}/>
                        <PrivateRoute exact path="/eBook/myOrder/" component={myOrder}/>
                        <PrivateRoute exact path="/eBook/myStatistics/" component={myStatistics}/>
                        <PrivateRoute path="/eBook/bookdetail" component={BookDetailPage}/>


                        {/* ---------  下面的部分是管理员路由  带有权限鉴定 --------------- */}
                        <AdminRoute exact path="/eBook/admin/userManage" component={userManage}/>
                        <AdminRoute exact path="/eBook/admin/newBook" component={newBook}/>
                        <AdminRoute exact path="/eBook/admin/bookManage" component={bookManage}/>
                        <AdminRoute exact path="/eBook/admin/editbook" component={editBook}/>
                        <AdminRoute exact path="/eBook/admin/orderManage" component={orderManage}/>

                        <AdminRoute exact path="/eBook/admin/statistics/userConsumption" component={userConsumption}/>
                        <AdminRoute exact path="/eBook/admin/statistics/bookSellnum" component={BookSellnum}/>

                        <Redirect from="/*" to="/eBook/MainPage" />
                    </Switch>
                </Router>
            </>

        );
    }
}
export default App;
