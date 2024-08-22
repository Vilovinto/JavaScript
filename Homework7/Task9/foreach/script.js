Array.prototype.myforEach = function (callback){
    const arr = this;
    for (const i of arr){
        callback(i);
    }
};
[11, 22, 44].myforEach((x) => console.log(x));