import {API} from './index';
const authUrl = "https://elem-homeless-mapping-auth.herokuapp.com/api";
export const loginUser = user => API('POST','/auth/user',user,authUrl); 

export const authToken = token=> API('POST','/auth/token',token,authUrl)