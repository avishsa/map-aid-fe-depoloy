export const MockReports = [
  {
      'isDistressed': false,
      'person_location': 'ben-gurion vdfbvdbre gregregre gergregre gregregreg gergregrege gregre',
      'person_gender': 'נקבה',
      'person_general_description':'stam stam',
      'isNotify': false,
      'isHandled': true,
      'report_datetime': new Date('2021-08-17T03:24:00'),
      'update_datetime': new Date(),
      'user_id_handler': '1234',
      'id': '6112bec3007f6c1b8663f129'
  }
  , {
      'isDistressed': false,
      'person_location': 'ben-gurion',
      'person_gender': 'נקבה',
      'isNotify': false,
      'isHandled': false,
      'report_datetime': new Date('2021-08-16T03:24:00'),
      'update_datetime': new Date(),
      'id': '6112bedbb0cc27d4e3c465c9'
  }
  , {
      'isDistressed': false,
      'person_location': 'ben-gurion',
      'person_gender': 'נקבה',
      'isNotify': false,
      'isHandled': false,
      'report_datetime': new Date('2021-08-20T03:24:00'),
      'update_datetime': new Date(),
      'id': '611ab499f046fd94b839e6f9'
  }
  , {  'isDistressed': false,
   'person_location': 'ben-gurion',
    'person_gender': 'נקבה', 
    'isNotify': false,
     'isHandled': false,
       'report_datetime': new Date('2021-08-22T03:24:00'),
      'update_datetime': new Date(),
      'id': '611ab53af046fd94b839e6fa' }
  , {  'isDistressed': false,
   'person_location': 'ben-gurion',
    'person_gender': 'זכר',
     'isNotify': false,
      'isHandled': true,
        'report_datetime': new Date('2021-08-01T03:24:00'),
      'update_datetime': new Date(), 
      'user_id_handler': '9999',
       'id': '611c0620056ade5d7f00eb7c' }
  , {  'isDistressed': false,
   'person_location': 'ben-gurion', 
   'person_gender': 'זכר', 
   'isNotify': false, 'isHandled': false, 
    'report_datetime': new Date(),
      'update_datetime': new Date(), 
      'id': '61229cfaddd1fba52c2acefd' }
  , {  'isDistressed': false,
   'person_location': 'ben-gurion', 
   'person_gender': 'זכר',
    'isNotify': false, 
    'isHandled': false,
    'report_datetime': new Date('2021-08-12T03:24:00'),
    'update_datetime': new Date(),
     'id': '612366c73ea2d6cae0838ba2' }
  ];
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