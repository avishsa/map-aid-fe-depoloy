import axios from "axios";
const serverUrl ="https://elem-homeless-mapping.herokuapp.com/api"; 
const basicAxios = axios.create({
    baseURL:serverUrl
})
export const createReport = report =>{
    console.log("create report axios",report);
    return basicAxios.post('create',report,{});
    
}; 
export const deleteReport = report =>{
    basicAxios.delete('',report,{})
    .then(result => result.data)
    .catch(error=> error.message);
}; 
export const updateReport = report =>{
    basicAxios.patch('',report,{})
    .then(result => result.data)
    .catch(error=> error.message);
}; 
export const getReport = id =>{
    basicAxios.get('',id,{})
    .then(result => result.data)
    .catch(error=> error.message);
}
export const getReports = () =>{
    debugger;
    basicAxios.get('/reports',{});
}