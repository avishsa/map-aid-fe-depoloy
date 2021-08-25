import {API} from './index';

export const createReport = report => API('POST','/report/create',report); 
export const deleteReport = report => API('DELETE','/report/delete',report); 
export const updateReport = (path,report) => API('PATCH',path,report);
export const getReport = id => API('GET','',id);
export const getReports = () => API('GET','/reports');
export const editReport = id => API('PUT',`/report/handle/${id}`)
