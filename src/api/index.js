const deploy = async (method, path, data,basicAxios,authHeaders) => {
    
    switch (method) {
        case 'POST': return data ? basicAxios.post(path, data) : basicAxios.post(path);
        case 'DELETE': return data ? basicAxios.delete(path, data) : basicAxios.delete(path);
        case 'PATCH': return data ? basicAxios.patch(path, data) : basicAxios.patch(path);
        case 'GET': { return basicAxios.get(path,{headers:authHeaders});}
        case 'PUT': return data ? basicAxios.put(path, null, { headers: data }) : basicAxios.put(path);
        default: throw new Error('invalid method');
    }
};


export const API = deploy;

