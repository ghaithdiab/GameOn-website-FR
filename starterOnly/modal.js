function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// 
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closebg=document.querySelector('.close');
var inputPrenom=document.getElementById('first');
var inputNom=document.getElementById('last');
var inputEmail=document.getElementById('email');
var inputbirthdate=document.getElementById('birthdate');
var inputQuantity=document.getElementById('quantity');
var inputCity=document.querySelectorAll('input[name="location"]');
var inputConditions=document.getElementById('checkbox1');
var submitBtn=document.getElementById('sub');




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

closebg.addEventListener('click',function(){ 
    modalbg.style.display='none';
});

// prenom input validation function
function prenomValidation(){
  var prenomInput=inputPrenom.value;
  var regx=/\s/;
  if(prenomInput.length < 2 || prenomInput ==""||regx.test(prenomInput)){
    formData[0].setAttribute("data-error-visible" ,"true");
    formData[0].setAttribute("data-error","le champ du Prenom pas valid");
  }
}
// Nom input validation function
function nomValidation(){
  var nomInput=inputNom.value;
  var regx=/\s/;
  if(nomInput.length < 2 || nomInput ==""||regx.test(nomInput)){
    formData[1].setAttribute("data-error-visible" ,"true");
    formData[1].setAttribute("data-error","le champ du Nom pas valid");
    // inputNom.value=nomInput;
  }
}
// Email input validation function
function emailValidation(){
  var emailInput=inputEmail.value;
  var regx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if(regx.test(emailInput)==false){
    formData[2].setAttribute("data-error-visible" ,"true");
    formData[2].setAttribute("data-error","le champ du Email pas valid");
    
  }
}
// birthdate input Validation
function birthdateValidation(){
  var birthdateInput=inputbirthdate.value;
  if(birthdateInput==""){
    formData[3].setAttribute("data-error-visible" ,"true");
    formData[3].setAttribute("data-error","Vous devez entrer votre date de naissance");
  }
}
// Quantity input Validation
function quantityValidation(){
  var quantityInput=inputQuantity.value;
  console.log(Number.isInteger(quantityInput));
  if(quantityInput==""|| Number.isInteger(quantityInput)==false || quantityInput < 0){
    formData[4].setAttribute("data-error-visible" ,"true");
    formData[4].setAttribute("data-error","Veuillez entrer un nombre Entier");
    console.log(quantityInput);
    console.log(Number.isInteger(quantityInput));
  }
}

// Radio input Validation
function cityValidation(){
  var find=false;
    for( var i of inputCity){
      if(i.checked){
        find=true;
        break;
      }
    }
    if(find==false){
      formData[5].setAttribute("data-error-visible" ,"true");
      formData[5].setAttribute("data-error","Vous devez choisir une option");  
    }
}

// cheakbox input Validation
function checkValidation(){
  if(inputConditions.checked==false){
    formData[6].setAttribute("data-error-visible" ,"true");
    formData[6].setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions");
  }
}

function validate(){
  prenomValidation();
  nomValidation();
  emailValidation();
  quantityValidation();
  cityValidation();
  checkValidation();
  birthdateValidation();
}


submitBtn.addEventListener('click',function(e){
  validate();
  e.preventDefault();
});