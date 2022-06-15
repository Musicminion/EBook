
// 获取单个书的信息 返回一个json对象 这个对象包含书本相关的信息

import {apiURL} from "../config/BaseConfig";
import {getRequest, postRequest} from "../utils/ajax";

let getBookByID = (ID , callback) => {
    let getBookURL = apiURL + "/queryBookdetail/" + ID;
    var respData;
    console.log(respData);
    getRequest(getBookURL, callback);
    console.log(respData);
};

export {getBookByID};

let getSignatureForUpload = (PolicyData,callback) =>{
    let url = apiURL + "/addBook/requestSignature";
    let obj = {
        PolicyData: PolicyData
    };

    postRequest(url,obj,callback);
};

export {getSignatureForUpload};

export const addBook = (bookInfo, callback) => {
    let url = apiURL + "/addBook/addone";
    postRequest(url,bookInfo,callback);
}

export const editOneBook = (bookInfo, callback) => {
    let url = apiURL + "/editBook";
    postRequest(url,bookInfo,callback);
}

export const deleteOneBook = (bookID, callback) => {
    let url = apiURL + "/deleteBook";
    postRequest(url,bookID,callback);

}


export const getAllBookList = (callback) => {
    let url = apiURL + "/queryBook/All";
    postRequest(url,{},callback);
}









