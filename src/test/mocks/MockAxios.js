

class MockAxios {
    //this     
    static create(baseURL){
      let ma = new MockAxios();
      ma.baseURL =baseURL;
      return ma; 
    };
    req = (method,path,data)=>{return new Promise(function(resolve, reject) {
      console.log('mock req',{data,method,path});
        window.setTimeout(() =>{      
          resolve({data,method,path}) 
        },300);
      })};
    post= (path,data)=>this.req('POST',`${this.baseURL}${path}`,data);
    get=(path,data)=>this.req('GET',`${this.baseURL}${path}`,data);
    patch=(path,data)=>this.req('PATCH',`${this.baseURL}${path}`,data);
    delete=(path,data)=>this.req('DELETE',`${this.baseURL}${path}`,data);

}

export default MockAxios;