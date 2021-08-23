import axios from "axios";
import "regenerator-runtime/runtime.js";
const serverUrl ="https://elem-homeless-mapping.herokuapp.com/api"; 
const basicAxios = axios.create({
    baseURL:serverUrl
})

export const API = async (method, path ,data)=>{
    switch(method){
        case 'POST':return data ? basicAxios.post(path,data) :basicAxios.post(path);
        case 'DELETE':return data ? basicAxios.delete(path,data) :basicAxios.delete(path);
        case 'PATCH':return data ? basicAxios.patch(path,data) :basicAxios.patch(path);
        case 'GET':return data ? basicAxios.get(path,data) :basicAxios.get(path);
        default: throw new Error('invalid method');
    }    
  };
