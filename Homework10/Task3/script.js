const form = document.forms.someForm;
const div = document.getElementsByTagName('div')[0];
form.addEventListener('submit', (i) => {
    i.preventDefault();
    const name = form.name.value;
    const surname = form.surname.value;
    const age = +form.age.value;
    let obj = {name, surname, age}
    console.log(obj);
    div.innerText = obj.name + ' ' + obj.surname + ' ' + obj.age;
});