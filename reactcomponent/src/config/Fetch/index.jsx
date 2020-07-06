import axios from 'axios';
const rootUrl = 'https://api.github.com/search/repositories?';
const Request={
    "get":""
}
Request.get = (target)=>{
    return axios({
        method: "get",
        url: rootUrl + target,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
export default Request;