var inputField = document.getElementById('myInput');
var buttonCancel = document.getElementById('cancel');
var buttonEnter = document.getElementById('enter');
const ADMIN_PASSWORD = "jqueryismyjam";

buttonEnter.addEventListener('click', function(){
var outputElement = document.getElementById('myOutput');
var inputValue = inputField.value;
if (inputValue===ADMIN_PASSWORD) {
  outputElement.textContent="Ласкаво просимо"
  setTimeout(function() {
    outputElement.textContent = '';
  }, 3000);
}
else{
  outputElement.textContent="Доступ заборонений, невірний пароль"
  setTimeout(function() {
    outputElement.textContent = '';
  }, 3000);
}
});

buttonCancel.addEventListener('click', function() {
var inputValue = inputField.value;
var outputElement = document.getElementById('myOutput');
outputElement.textContent = "Скасовано користувачем!";
setTimeout(function() {
    outputElement.textContent = '';
  }, 3000);
inputField.value = '';
});