
// 管理员
import {apiURL} from "../../config/BaseConfig";
import {postRequest} from "../../utils/ajax";

// 管理员，获取所有订单项目数据
export const getAllOrderItem =(callback) =>{

    let url = apiURL + "/order/getAllOrderItem"
    postRequest(url,{},callback);
};

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
