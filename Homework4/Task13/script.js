function exchange(sumUAH,currencyValues,exchangeCurrency){
    let chosen;
    for (const i of currencyValues) {
        if (i.currency === exchangeCurrency){
            chosen = i;
        }
    }
    let result = sumUAH/chosen.value;
    return result;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));