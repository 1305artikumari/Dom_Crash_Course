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
  
  // e.preventDefault();

  const inputElement = document.getElementById('name');
const obj1 = inputElement.value;

const inputElement1 = document.getElementById('email');
const obj2 = inputElement1.value;
  
  localStorage.setItem('name', obj1)
  localStorage.setItem('email' , obj2)
}