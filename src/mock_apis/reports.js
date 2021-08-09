
const mockApi = (formValues)=>new Promise(function(resolve, reject) {
    window.setTimeout(() =>{
      Math.floor(Math.random() * 2) ?
      resolve({data:formValues}) :
      reject({error:"promise failed"})
    },300);
  });
export const createReport = (formValues)=>{
  mockApi(formValues)
  .then(data=>("api redirect to ThankYou / report RoadMap page using react router",data))
  .catch(error=>console.error(error));
}