

export const fakeLogin = (user) => new Promise(function (resolve, reject) {
    
    window.setTimeout(() => {        
        user.email==="ester@gmail.com" && user.password==="12345"?
            resolve({ token:"trhtrhtr",user:{id:"61410626427f3f23afb13237",first_name:"אבישג",last_name:"סבן", organization:"עלם"} }) :
            reject({ error: "promise failed" })
    }, 300);
});


