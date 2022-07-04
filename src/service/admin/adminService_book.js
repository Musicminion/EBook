import {apiURL} from "../../config/BaseConfig";
import {postRequest} from "../../utils/ajax";

// 管理员使用 增加书籍的服务函数
export const addBook = (bookInfo, callback) => {
    let url = apiURL + "/addBook/addone";
    postRequest(url,bookInfo,callback);
}

// 管理员使用 编辑书籍的服务函数
export const editOneBook = (bookInfo, callback) => {
    let url = apiURL + "/editBook";
    postRequest(url,bookInfo,callback);
}

// 管理员使用 删除书籍的服务函数
export const deleteOneBook = (bookID, callback) => {
    let url = apiURL + "/deleteBook";
    postRequest(url,bookID,callback);
}