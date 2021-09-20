import {API} from './index';

export const loginUser = user => API('POST','/auth/user',user); 

export const authToken = token=> API('POST','/auth/token',token)