

export const fakeLogin = (user) => new Promise(function (resolve, reject) {
    window.setTimeout(() => {
        
        user.email==="ester@gmail.com" && user.password==="12345"?
            resolve({ token:"trhtrhtr",user:{id:"1234",name:"אבישג"} }) :
            reject({ error: "promise failed" })
    }, 300);
});

// export const fakeauthToken = token=> API('POST','/auth/token',token)