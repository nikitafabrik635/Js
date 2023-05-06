var inputField = document.getElementById('myInput');
var buttonCancel = document.getElementById('cancel');
var buttonEnter = document.getElementById('enter');
var buttonPurshase=document.getElementById('purshase')
const credits=23580;
const pricePerDroid=3000;
let totalPrice;
let creditsLeft;


buttonCancel.addEventListener('click', function() {
var inputValue = inputField.value;
const totalPriceMessage = document.getElementById('ttlprc');
const creditsLeftMessage = document.getElementById('crdlf');
const outputElement = document.getElementById('myOutput');
outputElement.textContent = "Скасовано користувачем!";
setTimeout(function() {
    outputElement.textContent = '';
  }, 3000);
inputField.value = '';
totalPriceMessage.textContent ='';
creditsLeftMessage.textContent='';
});

buttonEnter.addEventListener('click', function(){
var inputValue = inputField.value;
const totalPriceMessage = document.getElementById('ttlprc');
const creditsLeftMessage = document.getElementById('crdlf');
const outputElement = document.getElementById('myOutput');
totalPrice=inputValue*pricePerDroid;
creditsLeft=credits-totalPrice;
totalPriceMessage.textContent = totalPrice;
creditsLeftMessage.textContent=creditsLeft;
if (totalPrice>credits) {
outputElement.textContent = "У вас не вистачає коштів!";
  setTimeout(function() {
    outputElement.textContent = '';
  }, 3000);
}
});

buttonPurshase.addEventListener('click',function(){
var inputValue = inputField.value;
const totalPriceMessage = document.getElementById('ttlprc');
const creditsLeftMessage = document.getElementById('crdlf');
const outputElement = document.getElementById('myOutput');
if (totalPrice>credits) {
alert('Не вистачає коштів!')}
else{
	alert("Ви купили " + inputValue + " " + "дроїдів, на рахунку залишилося " + creditsLeft + " кредитів");
}
});