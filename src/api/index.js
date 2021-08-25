import axios from "axios";
import MockAxios from "../test/mocks/MockAxios";


import "regenerator-runtime/runtime.js";
console.log(MockAxios);
const serverUrl ="https://elem-homeless-mapping.herokuapp.com/api"; 
const basicAxios = process.env.JEST_WORKER_ID===undefined ? axios.create({
    baseURL:serverUrl
}): MockAxios.create(serverUrl);;

const deploy = async (method, path ,data)=>{
    switch(method){
        case 'POST':return data ? basicAxios.post(path,data) :basicAxios.post(path);
        case 'DELETE':return data ? basicAxios.delete(path,data) :basicAxios.delete(path);
        case 'PATCH':return data ? basicAxios.patch(path,data) :basicAxios.patch(path);
        case 'GET':return data ? basicAxios.get(path,data) :basicAxios.get(path);
        case 'PUT':return data ? basicAxios.put(path,{...data,user_id:"1234"}) :basicAxios.put(path);
        default: throw new Error('invalid method');
    }    
  };

export const API = deploy;
