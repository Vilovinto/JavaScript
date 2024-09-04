let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);
document.getElementsByTagName('div')[0].innerText = currentNumber;