import { fakeLogin } from "../api/fakeUsers";


export const _logout = () => {
    
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    
}

export const _login = data => {
    
    return fakeLogin(data)
    .then(res=>{
        sessionStorage.setItem('token', JSON.stringify(res.token));
        sessionStorage.setItem('user', JSON.stringify(res.user));
        return res.user;
    })

       
}
export const _islogged = ()=>{
    return  sessionStorage.getItem('token')!==undefined;
}