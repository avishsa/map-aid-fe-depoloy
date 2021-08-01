import axios from "axios";
const serverUrl =""; 
const basicAxios = axios.create({
    baseURL:serverUrl
})
export const createReport = report =>{
    return basicAxios.post('',report,{});
    
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
export const getReports = id =>{
    basicAxios.get('',{})
    .then(result => result.data)
    .catch(error=> error.message);
}