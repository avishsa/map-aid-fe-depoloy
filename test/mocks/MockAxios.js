

class MockAxios {
    //this     
    static create(baseURL){
      let ma = new MockAxios();
      ma.baseURL =baseURL;
      return ma; 
    };
    req = (method,path,data)=>{return new Promise(function(resolve, reject) {
      console.log('mock req');
        window.setTimeout(() =>{      
          resolve({data,method,path}) 
        },300);
      })};
    post= (path,data)=>req('POST',`${this.baseURL}${path}`,data);
    get=(path,data)=>req('GET',`${this.baseURL}${path}`,data);
    patch=(path,data)=>req('PATCH',`${this.baseURL}${path}`,data);
    delete=(path,data)=>req('DELETE',`${this.baseURL}${path}`,data);

}

export default MockAxios;