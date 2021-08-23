import API from "./mock_apis/API"
export const createReport = report =>{
    return API('POST','/report/create',report);
     
    
}; 
export const deleteReport = report =>{
    return API('DELETE','/report/delete',report);
}; 
export const updateReport = (path,report) =>{
    return API('PATCH',path,report);    
}; 
export const getReport = id =>{
    return API('GET','',id);    
    
}
export const getReports = () =>{
    return API('GET','/reports');    
}