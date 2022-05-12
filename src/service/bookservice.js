
// 获取单个书的信息 返回一个json对象 这个对象包含书本相关的信息

import {apiURL} from "../config/URLconfig";
import {getRequest} from "../utils/ajax";

let getBookByID = (ID) => {
    let getBookURL = apiURL + "/queryBookdetail/" + ID;
    let respData;

    getRequest(getBookURL,
        (data) => {
            respData = data;
            console.log(respData);
        }
        );

    console.log(respData);
    return respData;
}

export {getBookByID};