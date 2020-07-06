import axios from 'axios';
export async function List(){
    const response = 
    axios.get('/api/figures')
    .then((res)=>{
        return res.data;
    });
    return response;
}
export async function BuySomeThing(payload: number){
    return new Promise((resolve, reject) => setTimeout(()=>resolve(payload), 2000));
}