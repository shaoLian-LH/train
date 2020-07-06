import axios from 'axios';
export async function List(params: any){
    const response = 
    axios.get('/api/index')
    .then((res)=>{
        return res.data;
    });
    return response;
}