const deploy = async (method, path, data,basicAxios,authHeaders) => {    
    switch (method) {
        case 'POST': return basicAxios.post(path, data,{headers:authHeaders}) ;
        case 'DELETE': return data ? basicAxios.delete(path, data,{headers:authHeaders}) : basicAxios.delete(path);
        case 'PATCH': return data ? basicAxios.patch(path, data,{headers:authHeaders}) : basicAxios.patch(path);
        case 'GET': {return basicAxios.get(path,{headers:authHeaders});}
        case 'PUT':  return data ? basicAxios.put(path, data, { headers: authHeaders }) : basicAxios.put(path);
        default: throw new Error('invalid method');
    }
};


export const API = deploy;

