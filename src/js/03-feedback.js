import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const USER_STORAGE = 'feedback-form-state';
const { email, message } = formRef.elements;

availableMessage();

formRef.addEventListener('input', throttle(onUserDate, 500));
formRef.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  if (!email.value.trim() || !message.value.trim()) return alert('Заповніть всі поля');

  const feedbackMessage = JSON.parse(localStorage.getItem(USER_STORAGE));
  console.log(`
  email: ${feedbackMessage.email};
  message: ${feedbackMessage.message}
  `);
  event.currentTarget.reset();
  localStorage.removeItem(USER_STORAGE);
}

function onUserDate() {
const emailUser = email.value.trim();
const messageUser = message.value.trim();

  const userDate = {
    email: emailUser,
    message: messageUser,
  };
    localStorage.setItem(USER_STORAGE, JSON.stringify(userDate));
}

function availableMessage() {
  const saveDate = JSON.parse(localStorage.getItem(USER_STORAGE));

  if (saveDate) {
    email.value = saveDate.email;
    message.value = saveDate.message;
  }
}