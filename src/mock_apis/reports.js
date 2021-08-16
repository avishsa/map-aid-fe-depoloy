
const mockApi = (formValues)=>new Promise(function(resolve, reject) {
    window.setTimeout(() =>{
      Math.floor(Math.random() * 2) ?
      resolve({data:formValues}) :
      reject({error:"promise failed"})
    },300);
  });
export const createReportAPI = async (formValues)=>{
  return mockApi(formValues);
  
}