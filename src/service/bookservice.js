
// 获取单个书的信息 返回一个json对象 这个对象包含书本相关的信息

import {apiURL} from "../config/URLconfig";
import {getRequest} from "../utils/ajax";

let getBookByID = (ID , callback) => {
    let getBookURL = apiURL + "/queryBookdetail/" + ID;
    var respData;
    console.log(respData);
    getRequest(getBookURL, callback);
    console.log(respData);
}

export {getBookByID};

let addToShoppingChart = (ID , callback) => {


}