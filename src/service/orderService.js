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

export {orderQueryUserShopCart};


let addOneBookToShopCart = (bookID,buyNum,callBack) => {
    const url = apiURL + "/order/addToChart";
    let user = loginPassport.getUserName();

    let obj = {
        username: user,
        bookID: bookID,
        buynum: buyNum,
    };

    postRequest(url, obj, callBack);
}

export {addOneBookToShopCart}


let refreshShopCartItem = (bookID,newbuynum,callBack) => {
    const url = apiURL + "/order/refreshShopCartItem";
    let user = loginPassport.getUserName();

    let obj = {
        username: user,
        bookID: bookID,
        refreshedbuynum: newbuynum,
    };

    postRequest(url, obj, callBack);
}


export {refreshShopCartItem};