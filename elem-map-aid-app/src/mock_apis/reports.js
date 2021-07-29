
export const mockApi = (createReportURL,formValues)=>new Promise(function(resolve, reject) {
    window.setTimeout(function() {
      
      resolve({data:formValues});
      reject({erroe:"promise failed"})
    },300);
  });
