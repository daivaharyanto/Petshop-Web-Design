const buttons = document.getElementById('asideBtn');
let counter = 0;
let str_count = localStorage.getItem('counter');

function checkForStorage() {
  return typeof Storage !== 'undefined';
}

function putHistory() {
  if (checkForStorage()) {
    str_count++;
    localStorage.setItem('counter', str_count - 1);
  }
}

function CounterButton() {
  buttons.addEventListener('click', function () {
    counter++;
    console.log(str_count);
    document.getElementById('asideNumber').innerText = str_count;
    putHistory();
  });
}

CounterButton();
