const arg = (li, txt) => {
    document.write(`<ul>`);
    for (let i = 0; i < li; i++){
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}
arg(4, 'Vlad');