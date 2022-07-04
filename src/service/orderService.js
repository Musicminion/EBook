import {apiURL} from "../config/BaseConfig";
import loginPassport from "../components/Login/LoginPassport";
import {postRequest} from "../utils/ajax";

export const orderQueryUserShopCart = (callBack) => {
    const url = apiURL + "/order/queryMyChart";
    let user = loginPassport.getUserName();

    let obj = {
        username: user
    };

    postRequest(url, obj, callBack);
}

export const addOneBookToShopCart = (bookID,buyNum,callBack) => {
    const url = apiURL + "/order/addToChart";
    let user = loginPassport.getUserName();

    let obj = {
        username: user,
        bookID: bookID,
        buynum: buyNum,
    };

    postRequest(url, obj, callBack);
}

export const refreshShopCartItem = (bookID,newbuynum,callBack) => {
    const url = apiURL + "/order/refreshShopCartItem";
    let user = loginPassport.getUserName();

    let obj = {
        username: user,
        bookID: bookID,
        refreshedbuynum: newbuynum,
    };

    postRequest(url, obj, callBack);
}


export const orderMakeFromShopCart = (bookIDGroup, bookNumGroup,orderInfo,callBack) => {

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
        obj[objkey] = bookIDGroup[i].toString();
    }

    for(let i=1; i<bookNumGroup.length; i++){
        let objkey = "bookNumGroup" + i;
        obj[objkey] = bookNumGroup[i].toString();
    }

    postRequest(url,obj,callBack);
}



// 管理员，获取所有订单项目数据
export const getAllOrderItem =(callback) =>{

    let url = apiURL + "/order/getAllOrderItem"
    postRequest(url,{},callback);
};

// 管理员
export const getAllOrder =(callback) =>{

    let url = apiURL + "/order/getAllOrder";
    postRequest(url,{},callback);
};

export const getUserOrder = (callback) =>{
    let url = apiURL + "/order/getUserOrder";
    postRequest(url,{},callback);
}


export const getUserOrderItem = (callback) =>{
    let url = apiURL + "/order/getUserOrderItem";
    postRequest(url,{},callback);
}
