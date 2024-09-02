function saveTime() {
    let saveSessions = JSON.parse(localStorage.getItem('sessions')) || [];
    let date = new Date();
    saveSessions.push({
        day: date.getDay(),
        hourse: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })
    localStorage.setItem('sessions', JSON.stringify(saveSessions));
}
saveTime();