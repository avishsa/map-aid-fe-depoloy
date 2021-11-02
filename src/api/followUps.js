import axios from 'axios';
import {API} from './index';
import {getAuth} from "./authGenerator";
import MockAxios from "../test/mocks/MockAxios";
const serverUrl = "https://elem-homeless-mapping.herokuapp.com/api";
// const token = sessionStorage.getItem('token');
const basicAxios = process.env.JEST_WORKER_ID === undefined ? axios.create({
    baseURL: serverUrl,
    //headers:{ Authorization: `Bearer ${token}`}
}) : MockAxios.create(serverUrl);

 
export const getReportFollowups = (report_id) =>{  
    return API('GET','/followup',null,basicAxios,{...getAuth(),report_id});
} 
export const createFollowups = (report,auth) => API('POST','/followup/create',report,basicAxios,getAuth()); 
export const editFollowup = (path,report,auth) => API('PUT',path,report,basicAxios,getAuth());

