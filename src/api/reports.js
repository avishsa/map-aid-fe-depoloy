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

export const createReport = report =>{  return API('POST','/report/create',report,basicAxios);} 
export const deleteReport = report => API('DELETE','/report/delete',report,basicAxios,getAuth()); 
export const updateReport = (path,report) => API('PATCH',path,report,basicAxios,getAuth());

export const getReport = id => API('GET','',id,basicAxios);
export const getReports = () =>  API('GET','/reports',null,basicAxios,getAuth());

export const assignReport = (reportId,userId) =>API('PUT',`/report/handle/${reportId}`,{user_id:userId},basicAxios,getAuth());
export const updateStatusReport = (reportId,userId) =>  API('PUT',`/report/status/done`,{report_id:reportId},basicAxios,getAuth());