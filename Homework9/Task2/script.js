let arr = ['Main', 'Products', 'About us', 'Contacts'];
const menu = document.createElement('ul');
for (const i of arr) {
    const li = document.createElement('li');
    li.innerText = i;
    menu.appendChild(li);
}
document.body.appendChild(menu);