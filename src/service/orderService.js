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


let orderMakeFromShopCart = (bookIDGroup, bookNumGroup,orderInfo,callBack) => {

    let user = loginPassport.getUserName();
    let url = apiURL + "/order/makeorder/shopcart";

    let obj = {
        orderFrom : "ShopCart",
        username: user,
        receivename: orderInfo.receivename,
        postcode:orderInfo.postcode,
        phonenumber:orderInfo.phonenumber,
        receiveaddress:orderInfo.receiveaddress,
    };

    for(let i=1; i<bookIDGroup.length; i++){
        let objkey = "bookIDGroup" + i;
        let objvalue = bookIDGroup[i].toString();
        obj[objkey] = objvalue;
    }

    for(let i=1; i<bookNumGroup.length; i++){
        let objkey = "bookNumGroup" + i;
        let objvalue = bookNumGroup[i].toString();
        obj[objkey] = objvalue;
    }

    postRequest(url,obj,callBack);
}
export {orderMakeFromShopCart}