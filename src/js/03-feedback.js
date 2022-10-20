import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  btn: document.querySelector('button'),
};

console.log(refs);

refs.form.addEventListener('input', throttle(onRefsInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onRefsInput);
refs.message.addEventListener('input', onRefsInput);

const STORAGE_KEY = 'feedback-form-state';
const savedData = {email: refs.email.value,
        message: refs.message.value
};

const data = {};
function onFormSubmit(event) {
  event.preventDefault();
  const { elements: { email, message } } = event.currentTarget;
  console.log(email.value, message.value);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }

function onRefsInput(event) {
  // data[event.target.name]=event.currentTarget.value;
  // console.log(event.currentTarget.value);
  //   const value = event.currentTarget.value;
  // console.log(data);
  // const { elements: { email, message } } = event.currentTarget;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(event.currentTarget.value));
  // console.log(value);
  // console.log(savedData);
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

populateInput();
function populateInput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
  const newMessage = JSON.parse(savedMessage);
  
  for (const key in newMessage) {
    if (newMessage) {
      refs.message.value = newMessage[key];
      // console.log(element);
    }
  }
  
  if (newMessage) {
    console.log(savedMessage);
    console.log(newMessage);
    // refs.email.textContent = newMessage.email.value;
    // refs.message.value = newMessage.message.value;
  }
}



