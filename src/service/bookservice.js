// 获取单个书的信息 返回一个json对象 这个对象包含书本相关的信息

import {apiURL} from "../config/BaseConfig";
import {getRequest, postRequest} from "../utils/ajax";

// 函数功能： 通过ID查询书籍名称的服务函数，这个功能是在网页跳转到下面的
// 地址样例： http://localhost:3000/eBook/bookdetail?bookid=2 时候
//          根据bookid的参数去后端抓取书籍的信息，抓取的书籍信息是一个 json 对象 这里是个Get请求
export const getBookByID = (ID , callback) => {
    let getBookURL = apiURL + "/queryBookdetail/" + ID;
    getRequest(getBookURL, callback);
};

// 函数功能： 主页获取推荐书籍列表
export const getMainPageBooks = (callback) => {
    let getBookURL = apiURL + "/queryMainPageBooks";
    getRequest(getBookURL, callback);
};

// 函数功能： 搜书，根据关键词，还有搜索方法
// 地址样例： http://localhost:8080/queryBooksSearch/2/%E6%B1%87%E7%BC%96
export const getBookByKeyWord = (searchType, keyword, callback) => {
    let getBookURL = apiURL + "/queryBooksSearch/" + searchType + "/" + keyword;
    getRequest(getBookURL, callback);
}

// 函数功能： 通过和后端的端口交互，前端设置文件上传的实时的Policy【包括过期时间】，发送到后端获取签名
//          签名基于公钥、私钥、实时时间进行加密 参考了阿里云的 sha1 加密方法 POST请求，
export const getSignatureForUpload = (PolicyData,callback) =>{
    let url = apiURL + "/requestUploadSignature";
    let obj = {
        PolicyData: PolicyData
    };
    postRequest(url,obj,callback);
};

// 函数功能： 获取书籍的列表
export const getAllBookList = (callback) => {
    let url = apiURL + "/queryBook/All";
    postRequest(url,{},callback);
}









