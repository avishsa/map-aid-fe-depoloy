export const getYYYYMMDD = date => {
    var strDate = `${date.getFullYear()}-`;
    date.getMonth() + 1 < 10 ? strDate += '0' + (date.getMonth() + 1) : strDate += date.getMonth() + 1;
    strDate += `-${date.getDate()}`;
    return strDate;
};

export const getHHMM = date => {
    var strDate = '';
    date.getHours() < 10 ? strDate += '0' + (date.getHours()) : strDate += date.getHours();
    strDate += ':';
    date.getMinutes() < 10 ? strDate += '0' + (date.getMinutes()) : strDate += date.getMinutes();
    return strDate;
}
