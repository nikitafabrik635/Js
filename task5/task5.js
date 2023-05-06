var inputField = document.getElementById('myInput');
var buttonCancel = document.getElementById('cancel');
var buttonEnter = document.getElementById('enter');
const chinaPrice=100;
const chillyPrice=250;
const australiaPrice=170;
const indiaPrice=80;
const jamaicaPrice=120;

buttonCancel.addEventListener('click', function() {
var inputValue = inputField.value;
inputField.value = '';
});

buttonEnter.addEventListener('click', function(){
var inputValue = inputField.value;
switch(inputValue.toLowerCase()) {
  case "китай":
    alert("Доставка в " + inputValue + " буде коштувати " + chinaPrice + " кредитів");
    break;
  case "чилі":
    alert("Доставка в " + inputValue + " буде коштувати " + chillyPrice + " кредитів");
    break;
  case "австралія":
    alert("Доставка в " + inputValue + " буде коштувати " + australiaPrice + " кредитів");
    break;
      case "індія":
    alert("Доставка в " + inputValue + " буде коштувати " + indiaPrice + " кредитів");
    break;
      case "ямайка":
    alert("Доставка в " + inputValue + " буде коштувати " + jamaicaPrice + " кредитів");
    break;
  default:
    alert("У країні "+ inputValue +" доставка недоступна");
}
});