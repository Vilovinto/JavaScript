let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (const i of listOfItems){
    document.write(`<li>${i}</li>`);
}
document.write(`</ul>`)