import axios from 'axios';
const rootUrl = "https://www.fastmock.site/mock/aeaf8583f965de272b74d45fc0c60a31/train/";

const Request = {
    "get":"",
    "post":""
}

Request.get = (target)=>{
    return axios({
        method: "get",
        url: rootUrl + target,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
export default Request;