import { RealtorSendEmailData } from '../Data/userId.js';
const formEmail = document.getElementById('form-contact');

formEmail.addEventListener('submit', function(e) {
  e.preventDefault();

let firstName = document.getElementById('nombre');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let phone = document.getElementById('phone');
let message = document.getElementById('message');

let userRealtor = RealtorSendEmailData.sendEmail;


if(firstName.value==='' || email.value==='' || phone.value==='' || subject.value==='' || message.value===''){
  return;
}

fetch(`https://formsubmit.co/ajax/${userRealtor}`, {
  method: "POST",
  headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  },
  body: JSON.stringify({
    Nombre: firstName.value,
    Correo: email.value,
    Telefono: phone.value,
    Sujeto: subject.value,
    Mensaje: message.value,
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error al enviar correo',error));

})