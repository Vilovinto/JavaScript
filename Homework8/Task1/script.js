function clone (obj){
    if(obj){
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function'){
                const functionClone = obj[key].bind ({});
                functions.push({functionClone, key});
            }
        }
        const objClone = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            objClone[func.key] = func.functionClone;
        }
        console.log(objClone);
        return objClone;
    }
    throw new Error('Error');
}
clone({id: 1, name: 'one', my() {}, cloner() {}});