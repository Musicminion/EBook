import {apiURL} from "../config/URLconfig";
import loginPassport from "../components/Login/LoginPassport";
import {postRequest} from "../utils/ajax";

let orderQueryUserShopCart = (callBack) => {
    const url = apiURL + "/order/queryMyChart";
    let user = loginPassport.getUserName();

    let obj = {
        username: user
    };

    postRequest(url, obj, callBack);
}

export {orderQueryUserShopCart}