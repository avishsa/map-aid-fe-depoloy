import { fakeLogin } from "../api/fakeUsers";
import {loginUser} from "../api/users";

export const _logout = () => {
    
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    
}

export const _login = data => {
    
    return fakeLogin(data)
    .then(({user,token})=>{
         
        const {first_name,last_name} = user;
        
        const user_name = `${first_name} ${last_name}`;
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user_name));
        return user;
    }).catch(err=>{
        
        return {err};
    })

       
}
export const _islogged = ()=>{
    return  sessionStorage.getItem('token')!==undefined;
}
