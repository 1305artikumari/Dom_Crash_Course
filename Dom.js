// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {

const name = document.getElementById('name').value;
const email= document.getElementById('email').value;

const userDetails ={
  name: name,
  email: email
};

const userDetailsJSON =JSON.stringify(userDetails);

localStorage.setItem('userDetails', +" "+ userDetailsJSON);




}

