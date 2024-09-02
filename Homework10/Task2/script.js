let input = document.getElementsByTagName('input')[0];
let button = document.getElementsByTagName('button')[0];
let p = document.getElementsByTagName('p')[0];
button.addEventListener('click', function (i){
    i.preventDefault();
    let age = parseInt(input.value);
    if (age < 0){
        p.innerText = 'Ви ще ненародились';
    }
    else if (age < 18){
        p.innerText = 'Вам немає ще 18';
    }
    else if (age === 18){
        p.innerText = 'Вам є 18';
    }
    else if (age > 18){
        p.innerText = 'Вам більше ніж 18';
    }
})