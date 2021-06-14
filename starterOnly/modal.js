function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closebg=document.querySelector('.close');
const inputPrenom=document.getElementById('first');
const inputNom=document.getElementById('last');
const inputEmail=document.getElementById('email');
const inputbirthdate=document.getElementById('birthdate');
const inputQuantity=document.getElementById('quantity');
const inputCity=document.querySelectorAll('input[name="location"]');
const inputConditions=document.getElementById('checkbox1');
const submitBtn=document.getElementById('sub');
const confrmation=document.querySelector('.confrmation-modal');
const form=document.querySelector('form[name="reserve"]');
const closebtn=document.querySelector('.btn-close');
const navIcon=document.querySelector('.icon');
const accueil=document.querySelector('.main-navbar>a');


// show hide Navbar version mobile
navIcon.addEventListener('click',editNav);



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
accueil.addEventListener('click',launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display="block";
// Hide  message confrmation
  confrmation.style.display="none";
// Hide the message error
  formData.forEach((fc)=>fc.removeAttribute("data-error-visible"));

}
// close modal and reset value
function close(){
  modalbg.style.display='none';
  const array=[inputPrenom,inputNom,inputEmail,inputbirthdate,inputQuantity];
  array.forEach((i)=>i.value="");
}
closebg.addEventListener('click',close);
closebtn.addEventListener('click',close);

// prenom input validation function
function prenomValidation(){
  const prenomInput=inputPrenom.value;
  const regx=/\s/;
  if(prenomInput.length < 2 || prenomInput ===""||regx.test(prenomInput)){
    formData[0].setAttribute("data-error-visible" ,"true");
    formData[0].setAttribute("data-error","le champ du Prenom ne pas valide");
    return false;
  }else{
    return true;
  }
}
// Nom input validation function
function nomValidation(){
  const nomInput=inputNom.value;
  const regx=/\s/;
  if(nomInput.length < 2 || nomInput ===""||regx.test(nomInput)){
    formData[1].setAttribute("data-error-visible" ,"true");
    formData[1].setAttribute("data-error","le champ du Nom ne pas valide");
    return false;
  }else{
    return true;
  }
}
// Email input validation function
function emailValidation(){
  const emailInput=inputEmail.value;
  const regx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if(regx.test(emailInput)===false){
    formData[2].setAttribute("data-error-visible" ,"true");
    formData[2].setAttribute("data-error","le champ du Email ne pas valide");
    return false;
  }else{
    return true;
  }
}
// birthdate input Validation
function birthdateValidation(){
  const birthdateInput=new Date(inputbirthdate.value);
  const  calculatorAge=new Date(birthdateInput.getFullYear()+18,birthdateInput.getMonth(),birthdateInput.getDate());
  if(birthdateInput.toDateString()==="Invalid Date"||calculatorAge>=new Date()){
    formData[3].setAttribute("data-error-visible" ,"true");
    formData[3].setAttribute("data-error","Vous devez entrer votre date de naissance");
    return false;
  }else {
    return true;
  }
}
// Quantity input Validation
function quantityValidation(){
  const quantityInput=inputQuantity.value;
  if(quantityInput===""|| Number.isInteger(Number(quantityInput)) ===false || quantityInput < 0){
    formData[4].setAttribute("data-error-visible" ,"true");
    formData[4].setAttribute("data-error","Veuillez entrer un nombre Valide");
    return false;
  }else{
    return true;
  }
}

// Radio input Validation
function cityValidation(){
  let find=false;
    for( var i of inputCity){
      if(i.checked){
        find=true;
        break;
      }
    }
    if(find===false){
      formData[5].setAttribute("data-error-visible" ,"true");
      formData[5].setAttribute("data-error","Vous devez choisir une option");  
      return false;
    }else{
      return true;
    }
}

// checkbox input Validation
function checkValidation(){
  if(inputConditions.checked===false){
    formData[6].setAttribute("data-error-visible" ,"true");
    formData[6].setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions");
    return false;
  }else{
    return true;
  }
}
// check validation form
function validate(){
  var arr=[prenomValidation(),nomValidation(),
            emailValidation(),quantityValidation(),
            cityValidation(),checkValidation(),
            birthdateValidation()];
    if(!arr.some(v => !v)){
      form.style.display="none";
      confrmation.style.display="flex";
    }
}

submitBtn.addEventListener('click',function(e){
  validate();
  e.preventDefault();
});

