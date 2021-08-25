export const getYYYYMMDD = date => {

    var strDate = `${date.getFullYear()}-`;
    date.getMonth() + 1 < 10 ? strDate += '0' + (date.getMonth() + 1) : strDate += date.getMonth() + 1;
    strDate += `-`;
    date.getDate() < 10 ? strDate += '0' + date.getDate() : strDate += date.getDate();

    return strDate;
};
export const getDDMMYYYY = date => {
    var strDate = "";
    date.getDate() < 10 ? strDate += '0' + date.getDate() : strDate += date.getDate();
    strDate += `/`;
    date.getMonth() + 1 < 10 ? strDate += '0' + (date.getMonth() + 1) : strDate += date.getMonth() + 1;    
    strDate+=`/${date.getFullYear()}`;
    return strDate;
};
export const getHHMM = date => {
    var strDate = '';
    date.getHours() < 10 ? strDate += '0' + (date.getHours()) : strDate += date.getHours();
    strDate += ':';
    date.getMinutes() < 10 ? strDate += '0' + (date.getMinutes()) : strDate += date.getMinutes();
    return strDate;
}
const getHHMMSS = date => {
    var strDate = '';
    date.getHours() < 10 ? strDate += '0' + (date.getHours()) : strDate += date.getHours();
    strDate += ':';
    date.getMinutes() < 10 ? strDate += '0' + (date.getMinutes()) : strDate += date.getMinutes();
    strDate += ':00';
    return strDate;
}
//2018-06-12T19:30
export const getDateTime = date => {
    return `${getYYYYMMDD(date)}T${getHHMM(date)}`;
}
export const getDateFromString = (dateStr, timeStr) => {
    return new Date(`${dateStr}T${timeStr}`)
}
//
export const getDateTimeText = date => {
    return `${getHHMM(date)} ${getYYYYMMDD(date)}`;
}
export const getDateTimeFromDateNTime = (date, time) => {
    return getDateFromString(getYYYYMMDD(date), getHHMM(time));
}

export const getDateTimeFormattedString = (date,time) =>{
    return `${getYYYYMMDD(date)} ${getHHMMSS(time)}`;
}

export const isLaterThanNow = (date,time) =>{
    return getDateTimeFromDateNTime(date,time).getTime()> new Date().getTime();
}