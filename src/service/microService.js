import {microServiceURL} from "../config/BaseConfig";
import {getRequest} from "../utils/ajax";

export const findAuthorsByBookname = (key,callback) => {
    let url = microServiceURL + "/getBookAuthorByName/" + key;

    getRequest(url,callback);
}
