import { RealtorSendEmailData } from '../Data/userId.js';
const formEmailRealtor = document.getElementById("form-realtor");

formEmailRealtor.addEventListener('submit', function(e) {
    e.preventDefault();
    let userRealtor = RealtorSendEmailData.detail;
    
let firstName = document.getElementById('nombre');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');   


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
    Sujeto: subject.value,
    Mensaje: message.value,
  })
})
  .then(response => response.json())
  .then((data) => {
    console.log('SendEmail: ',data)
    console.log(data.success)
    console.log('mensaje enviado');
  })
  .catch(error => console.log('SendEmailError: ',error));

})