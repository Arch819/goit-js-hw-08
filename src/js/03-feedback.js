import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = formRef.querySelector('input');
const textareaRef = formRef.querySelector('textarea');

const USER_STORAGE = 'feedback-form-state';
availableMessage();

formRef.addEventListener('submit', onFormSubmit);
// formRef.addEventListener('input', onUserDate);
inputRef.addEventListener('input', throttle(onUserDate, 500));
textareaRef.addEventListener('input', throttle(onUserDate, 500));

function onFormSubmit(event) {
  event.preventDefault();

  const feedbackForm = localStorage.getItem(USER_STORAGE)
  console.log(JSON.parse(feedbackForm));
  event.currentTarget.reset();
  localStorage.removeItem(USER_STORAGE);
}

// function onUserDate(event) {
//   const { email, message } = event.currentTarget.elements;

//   const emailUser = email.value;
//   const messageUser = message.value;

//   const userDate = {
//     email: emailUser,
//     message: messageUser,
//   };
  
//     localStorage.setItem(USER_STORAGE, JSON.stringify(userDate));
// }

function onUserDate() {
  const emailUser = inputRef.value;
  const messageUser = textareaRef.value;

  const userDate = {
    email: emailUser,
    message: messageUser,
  };

  localStorage.setItem(USER_STORAGE, JSON.stringify(userDate));
}

function availableMessage() {
  const saveDate = JSON.parse(localStorage.getItem(USER_STORAGE));
  console.dir(formRef);

  if (saveDate) {
    formRef.elements.email.value = saveDate.email;
    formRef.elements.message.value = saveDate.message;
  }
}