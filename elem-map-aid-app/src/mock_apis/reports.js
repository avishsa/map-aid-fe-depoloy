
export const mockApi = (formValues)=>new Promise(function(resolve, reject) {
    window.setTimeout(function() {
      
      resolve({data:formValues});
      reject({erroe:"promise failed"})
    },300);
  });
export const post = (formValues)=>{
  mockApi(formValues).then(data=>console.log("api",data)).catch(error=>console.error(error));
}