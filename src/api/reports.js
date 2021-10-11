import axios from 'axios';
import {API} from './index';
import MockAxios from "../test/mocks/MockAxios";
const serverUrl = "https://elem-homeless-mapping.herokuapp.com/api";
// const token = sessionStorage.getItem('token');
const basicAxios = process.env.JEST_WORKER_ID === undefined ? axios.create({
    baseURL: serverUrl,
    //headers:{ Authorization: `Bearer ${token}`}
}) : MockAxios.create(serverUrl);

export const createReport = report =>{  return API('POST','/report/create',report,basicAxios);} 
export const deleteReport = report => API('DELETE','/report/delete',report,basicAxios); 
export const updateReport = (path,report) => API('PATCH',path,report,basicAxios);
export const getReport = id => API('GET','',id,basicAxios);
export const getReports = () =>  API('GET','/reports',null,basicAxios);
export const assignReport = (reportId,userId) => API('PUT',`/report/handle/${reportId}`,{user_id:userId},basicAxios)
export const updateStatusReport = (reportId,status) => API('PUT',`/report/status/${reportId}`,{status:status},basicAxios)