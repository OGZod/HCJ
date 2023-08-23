const calculation = document.querySelector('.display');

displayCalculation(localStorage.getItem('calculation')||'');

function displayCalculation(n){

  calculation.innerHTML += n;

  localStorage.setItem('calculation', calculation.innerHTML)
  

};

function calculate(){

  calculation.innerHTML = eval(calculation.innerHTML);
}

function clearDisplay(value){
  calculation.innerHTML = value;
  displayCalculation(value);
}