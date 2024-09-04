function saveTime() {
    let gettime = JSON.parse(localStorage.getItem('time')) || [];
    let div = document.getElementById('divBaty');
    let price = 100;
    let arrtime = 0;
    if (gettime.length > 0) {
        price = gettime[gettime.length - 1].price;
        arrtime = gettime[gettime.length - 1].time;
    }
    let now = new Date().getTime();
    if (now - arrtime > 1000 * 10 || gettime.length === 0) {
        price += 10;
        gettime.push({
            price: price,
            time: now
        });
        div.textContent = price + ' грн';
        console.log('Price updated:', price);
        localStorage.setItem('time', JSON.stringify(gettime));
    }
    else {
        div.textContent = price + ' грн';
    }
}
saveTime();