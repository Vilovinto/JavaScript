let button = document.getElementsByTagName('button')[0];
button.onclick(function (){
    let form = document.getElementsByTagName('form')[0];
    let name = form.elements['name'].value;
    let surname = form.elements['surname'].value;
    let age = form.elements['age'].value;
    document.getElementsByTagName('div')[0].innerText = `name: ${name}, surname: ${surname}, age: ${age}`;
})