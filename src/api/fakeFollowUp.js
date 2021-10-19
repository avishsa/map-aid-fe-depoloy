
const db = [{
    reportId:"616d4f99c819d710d3bd2741",
    userId:"1231321",
    user_first_name:"אריאל",
    user_last_name:"מוסקוביץ",
    description:"הבאנו לו שמיכה ואוכל, בשיחה איתו מעוניין להשתקם ושנחזור עוד מספר פעמים"

}];
export const getReportFollowups = (reportId) => new Promise(function (resolve, reject) {    
    window.setTimeout(() => {  
             
        const followUps = db.filter(el=>el.reportId===reportId);
        resolve(followUps) ;        
    }, 300);
});


export const createFollowups = (followUp) => new Promise(function (resolve, reject) {    
    window.setTimeout(() => {   
        const newId = db.length;     
        db.push({...followUp,id:newId});
        resolve({success:"success"}) ;        
    }, 300);
});

