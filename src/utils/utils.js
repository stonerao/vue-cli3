export function getNowTime() {
    //获取当前事件 
    //格式 2018-10-30 14:47:51
    var date = new Date();
    var seperator1 = "-"; //年月日分隔符
    var seperator2 = ":"; //时分秒分隔符
    var month = date.getMonth() + 1; //月份是0~11，要加1为当前月
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        date.getHours() +
        seperator2 +
        date.getMinutes() +
        seperator2 +
        (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return currentdate;
}