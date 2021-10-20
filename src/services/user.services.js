import { fakeLogin } from "../api/fakeUsers";
import {loginUser,getUser} from "../api/users";

export const _logout = () => {
    
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    
}

export const _login = data => {
    
    return loginUser(data)
    .then(({data})=>{
        debugger;       
        
        // sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(data));
        return data;
    }).catch(err=>{
        
        return {err};
    })

       
}
export const _islogged = ()=>{
    return  sessionStorage.getItem('token')!==undefined;
}
export const _getUser = user_id =>{
    return getUser(user_id)
    .then((users)=>{
        return users;
    })
    .catch(err=>{
        
        return {err};
    })
}