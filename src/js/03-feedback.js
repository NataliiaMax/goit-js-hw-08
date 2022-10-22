import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

console.log(refs);

// refs.form.addEventListener('input', throttle(onRefsInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onRefsInput);
refs.message.addEventListener('input', onRefsInput);

const STORAGE_KEY = 'feedback-form-state';
const savedData = {};

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onRefsInput(event) {
  savedData[event.target.name] = event.currentTarget.value;
  // console.log(savedData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

populateInput();
function populateInput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage.email);
  console.log(savedMessage.message);
   console.log(savedMessage);

  if (savedMessage) {
    refs.message.textContent = savedMessage.message;
    refs.email.textContent = savedMessage.email;
  }
}
