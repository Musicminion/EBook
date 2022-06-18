import {apiURL} from "../config/BaseConfig";
import loginPassport from "../components/Login/LoginPassport";
import {postRequest} from "../utils/ajax";

export const getuserConsumeData = (data,callback) => {


    let url = apiURL + "/statistic/userConsume";
    postRequest(url,data,callback);
}

export const getBookSellData = (data,callback) => {

    let url = apiURL + "/statistic/bookSellnum";
    postRequest(url,data,callback);
}