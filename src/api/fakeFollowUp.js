
const db = [];
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

