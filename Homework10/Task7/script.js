function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('there is no such array');
    }
    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    const json = JSON.stringify(array);
    localStorage.setItem(arrayName, json);
}
addToLocalStorage('sessionsList', {});