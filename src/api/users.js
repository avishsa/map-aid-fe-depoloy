import {API} from './index';
const authUrl = "https://elem-homeless-mapping-auth.herokuapp.com/api";
const basicAxios = process.env.JEST_WORKER_ID === undefined ? axios.create({
    baseURL: serverUrl
}) : MockAxios.create(serverUrl);;

export const loginUser = user => API('POST','/auth/user',user,authUrl,basicAxios); 

export const authToken = token=> API('POST','/auth/token',token,authUrl,basicAxios)