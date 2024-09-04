let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let div = document.getElementById('div');
let arr1 = []
for(let i = 0; i<100; i++){
    arr1.push(i);
}
let value = 0;
function displayData() {
    div.innerText = '';
    for (let i = value; i < value + 10; i++) {
        const p = document.createElement('p');
        p.textContent = arr1[i];
        div.appendChild(p);
    }
}
displayData();
button1.addEventListener('click',function (){
    if(value+10< arr1.length){
        value -=10;
        displayData();
    }
})
button2.addEventListener('click',function (){
    if(value+10< arr1.length){
        value +=10;
        displayData();
    }
})