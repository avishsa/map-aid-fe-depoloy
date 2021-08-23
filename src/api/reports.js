import axios from "axios";
const serverUrl ="https://elem-homeless-mapping.herokuapp.com/api"; 
const basicAxios = axios.create({
    baseURL:serverUrl
})
export const createReport = report =>{
    console.log("create report axios",report);
    return basicAxios.post('/report/create',report,{});
    
}; 
export const deleteReport = report =>{
    basicAxios.delete('',report,{})
    .then(result => result.data)
    .catch(error=> error.message);
}; 
export const updateReport = (path,report) =>{
    return basicAxios.patch(path,report,{});
    
}; 
export const getReport = id =>{
    basicAxios.get('',id,{})
    .then(result => result.data)
    .catch(error=> error.message);
}
export const getReports = () =>{
    
    return basicAxios.get('/reports',{});
}