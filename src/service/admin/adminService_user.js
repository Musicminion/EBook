import {apiURL} from "../../config/BaseConfig";
import {postRequest} from "../../utils/ajax";
import loginPassport from "../../components/Login/LoginPassport";

// 管理员用户管理页面，获取所有的用户的列表
export const getAllUserList = (callback) => {
    let getAllUserListURL = apiURL + "/user/queryAllUserInfo";
    postRequest(getAllUserListURL,{},callback);
}

// 管理员设置用户登录的许可
export const setUserLoginPermit = (setUser,loginPermitState,callback) => {
    let setUserLoginPermitURL = apiURL + "/user/setUserLoginPermit";
    if(loginPassport.getUserName() === setUser)
        return alert("不能设置自己的登录!");
    if(parseInt(loginPassport.checkPrivilege()) === 3)
        return alert("你不是管理员,没有权限操作");

    let obj = {
      setUsername : setUser,
      loginPermitState: loginPermitState,
    };

    postRequest(setUserLoginPermitURL,obj,callback);
}
