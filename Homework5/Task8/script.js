const arg = (txt) => {
    document.write(`<ul>`);
    for (const i of txt){
        document.write(`<li>${i}</li>`);
    }
    document.write(`</ul>`);
}
arg([4, 45, 'okten', true, 9, 91, false, 'attention']);