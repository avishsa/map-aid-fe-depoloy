export const required = value => value!==undefined && value!=="" ? '' : 'שדה נדרש'
export const phone = value => 
    value && !/05[0|2|3|4|5|7|8][0-9]{7}$/.test(value) ? 'מספר טלפון לא תקין' :'';
export const latestDate = value =>{   
    if (!value) return "";
    var dateParts = value.split("-");    
    var dateObject = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);   

    var result = dateObject.getTime() > new Date().getTime() ? 'תאריך דיווח חייב להיות מוקדם מהתאריך של היום' : '';
    
    return result;
}



export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
export const minValue18 = minValue(18)
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
export const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
