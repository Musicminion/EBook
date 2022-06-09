import {apiURL} from "../config/URLconfig";
import {postRequest} from "../utils/ajax";
import loginPassport from "../components/Login/LoginPassport";

let getAllUserList = (callback) => {

    let getAllUserListURL = apiURL + "/user/queryAllUserInfo";

    postRequest(getAllUserListURL,{},callback);

}

export {getAllUserList};

let setUserLoginPermit = (setUser,loginPermitState,callback) => {
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

export {setUserLoginPermit}