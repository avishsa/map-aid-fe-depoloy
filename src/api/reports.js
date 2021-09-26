import {API} from './index';
const serverUrl = "https://elem-homeless-mapping.herokuapp.com/api";

export const createReport = report => API('POST','/report/create',report,serverUrl); 
export const deleteReport = report => API('DELETE','/report/delete',report,serverUrl); 
export const updateReport = (path,report) => API('PATCH',path,report,serverUrl);
export const getReport = id => API('GET','',id,serverUrl);
export const getReports = () => API('GET','/reports',serverUrl);
export const assignReport = (reportId,userId) => API('PUT',`/report/handle/${reportId}`,{user_id:userId},serverUrl)
