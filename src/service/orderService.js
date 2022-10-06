import {apiURL} from "../config/BaseConfig";
import loginPassport from "../components/Login/LoginPassport";
import {postRequest} from "../utils/ajax";
import {v4 as uuidV4} from "uuid";

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


// 【函数注释】：函数用来刷新购物车里面的商品数量，比如商品购买的数量发生了改变，需要同步到后端
//            第一个的参数是数的ID号码，第二个是新的买的数量，第三个是回调函数
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


// 【函数注释】：第一个参数是bookID集合的数据，第二个参数是bookNum就是购买数量的集合！
//            第三个参数是orderInfo，因为用户可能是给别人购买的，所以订单的送达地点、收件人不一定是自己的
//            第四个参数是回调函数，整个函数完成【从购物车的】订单下单
export const orderMakeFromShopCart = (bookIDGroup, bookNumGroup,orderInfo,callBack) => {
    let user = loginPassport.getUserName();
    let url = apiURL + "/order/makeorder";

    let obj = {
        orderFrom : "ShopCart",
        username: user,
        receivename: orderInfo.receivename,
        postcode:orderInfo.postcode,
        phonenumber:orderInfo.phonenumber,
        receiveaddress:orderInfo.receiveaddress,
    };

    for(let i=0; i<bookIDGroup.length; i++){
        let objkey = "bookIDGroup" + (i + 1);
        obj[objkey] = bookIDGroup[i].toString();
    }

    for(let i=0; i<bookNumGroup.length; i++){
        let objkey = "bookNumGroup" + (i + 1);
        obj[objkey] = bookNumGroup[i].toString();
    }

    postRequest(url,obj,callBack);
}


// 【函数注释】：第一个参数是bookID集合的数据，第二个参数是bookNum就是购买数量的集合！
//            第三个参数是orderInfo，因为用户可能是给别人购买的，所以订单的送达地点、收件人不一定是自己的
//            第四个参数是回调函数，整个函数完成【直接购买的】订单下单
export const orderMakeFromDirectBuy = (bookIDGroup, bookNumGroup,orderInfo,callBack) => {
    let user = loginPassport.getUserName();
    let url = apiURL + "/order/makeorder";

    let obj = {
        orderFrom : "DirectBuy",
        username: user,
        receivename: orderInfo.receivename,
        postcode:orderInfo.postcode,
        phonenumber:orderInfo.phonenumber,
        receiveaddress:orderInfo.receiveaddress,
    };

    for(let i=0; i<bookIDGroup.length; i++){
        let objkey = "bookIDGroup" + (i + 1);
        obj[objkey] = bookIDGroup[i].toString();
    }

    for(let i=0; i<bookNumGroup.length; i++){
        let objkey = "bookNumGroup" + (i + 1);
        obj[objkey] = bookNumGroup[i].toString();
    }

    postRequest(url,obj,callBack);
}
