import axios from 'axios';

const URL = "http://localhost:3004/api/enquiry";
export const addDetails = async(data) => {
    try{
        return await axios.post(`${URL}/add`, data).then((res)=>res.json());
    }catch(error){
        console.log("error while calling the api",error)
    }
}