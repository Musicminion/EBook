import {postRequest} from "../utils/ajax";
import {history} from "../components/PublicHistory";
import {message} from 'antd';


export const login = (data,SuccessCallback,FailureCallback) => {
    const url = `http://localhost:8080/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            history.push("/");
            SuccessCallback();
        }
        else{
            FailureCallback();
        }
    };
    postRequest(url, data, callback);
};

//
// export const logout = () => {
//     const url = `http://localhost:8080/logout`;
//
//     const callback = (data) => {
//         if(data.status >= 0) {
//             localStorage.removeItem("user");
//             history.push("/login");
//             message.success(data.msg);
//         }
//         else{
//             message.error(data.msg);
//         }
//     };
//     postRequest(url, {}, callback);
// };
//
// export const checkSession = (callback) => {
//     const url = `http://localhost:8080/checkSession`;
//     postRequest(url, {}, callback);
// };
//
//
//
//
//
//
