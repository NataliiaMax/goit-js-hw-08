import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onRefsInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const savedData = {};

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: formRef.email.value, message: formRef.message.value });
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onRefsInput(event) {
  savedData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

populateInput();
function populateInput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    formRef.email.value = savedMessage.email;
    formRef.message.value = savedMessage.message;
  }
}
