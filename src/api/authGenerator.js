export const getAuth = ()=> {
    const {email,token,id} = JSON.parse(sessionStorage['user']);
    return {email,token,user_id:id};
};