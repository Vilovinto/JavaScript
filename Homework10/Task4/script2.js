function getsesions(){
    let saveTimearr = JSON.parse(localStorage.getItem('sessions'));
    let div = document.createElement('div');
    document.body.appendChild(div);
    for (const value of saveTimearr) {
        let h2 = document.createElement('h2');
        h2.innerText = `Date: ${value.day} Time: ${value.hourse}:${value.minutes}:${value.seconds}`;
        div.appendChild(h2);
    }
}
getsesions();