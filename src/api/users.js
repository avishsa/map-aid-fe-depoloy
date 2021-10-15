import {API} from './index';
import axios from 'axios';
import MockAxios from "../test/mocks/MockAxios";
const authUrl = "https://elem-homeless-mapping-auth.herokuapp.com/api";
const basicAxios = process.env.JEST_WORKER_ID === undefined ? axios.create({
    baseURL: authUrl
}) : MockAxios.create(authUrl);;

export const loginUser = user => {return API('POST','/auth/user',user,basicAxios); }

export const authToken = token=> API('POST','/auth/token',token,basicAxios)