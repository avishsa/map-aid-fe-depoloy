export const getAuth = ()=> {
    const {email,token} = JSON.parse(sessionStorage['user']);
    return {email,token};
};