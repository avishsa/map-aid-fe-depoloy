
const db = [{
    id:1,
    report_id:"616d4f99c819d710d3bd2741",
    user_id:"1231321",
    user_first_name:"אריאל",
    user_last_name:"מוסקוביץ",
    description:"הבאנו לו שמיכה ואוכל, בשיחה איתו מעוניין להשתקם ושנחזור עוד מספר פעמים"

}];
export const getReportFollowups = (reportId) => new Promise(function (resolve, reject) {    
    window.setTimeout(() => {  
        
        const followUps = db.filter(el=>el.report_id===reportId);
        resolve(followUps) ;        
    }, 300);
});


export const createFollowups = (followUp) => new Promise(function (resolve, reject) {    
    window.setTimeout(() => { 
        
         const {report_id,user_id,description}=followUp;
         if(!report_id || !user_id || !description) reject({err:`missing paramater ${report_id} ${user_id} ${description}`})
        
         const newId = db.length+1;     
        db.push({...followUp,id:newId,user_first_name:"אבישג",
        user_last_name:"סבן"});
        resolve({data:db[newId-1]}) ;        
    }, 300);
});

