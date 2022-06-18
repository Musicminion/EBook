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

export const getUserbookAllBuyNum = (data,callback) => {
    let url = apiURL +"/statistic/userStatistic/bookAllBuyNum";
    postRequest(url,data,callback);
}

export const getUserbookWithBuyNum = (data,callback) => {
    let url = apiURL + "/statistic/userStatistic/bookWithBuyNum";
    postRequest(url,data,callback);
}

export const getUserbookTotalPay = (data,callback) => {
    let url = apiURL + "/statistic/userStatistic/bookTotalPay";
    postRequest(url,data,callback);
}