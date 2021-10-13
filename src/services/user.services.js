import { fakeLogin } from "../api/fakeUsers";
import {loginUser} from "../api/users";

export const _logout = () => {
    
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    
}

export const _login = data => {
    
    return loginUser(data)
    .then(({data:{token,first_name,last_name}})=>{
        
        const user_name = `${first_name} ${last_name}`;
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user_name));
        return user_name;
    })

       
}
export const _islogged = ()=>{
    return  sessionStorage.getItem('token')!==undefined;
}
