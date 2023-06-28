
const getTimeInt = (timeStr) => {
    console.log(timeStr);
    const hours = parseInt(timeStr.split(':')[0]);
    const minutes = parseInt(timeStr.split(':')[1]);
    const seconds = parseInt(timeStr.split(':')[2]);
    console.log(hours, minutes, seconds);
    return hours * 3600 + minutes * 60 + seconds;
}

module.exports = {
    getTimeInt
}