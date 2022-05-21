// Form Validation Code

const form = document.getElementById('form');
const email = document.getElementById('email');
const errorText = document.querySelector('.error-text');

/* the below function will check if the email entered is fully lowerCase */

function emailCheckLowerCase(e) {
  if (email.value !== email.value.toLowerCase()) {
    errorText.classList.remove('hide');
    e.preventDefault();
  } else {
    errorText.classList.add('hide');
  }
}
form.addEventListener('click', emailCheckLowerCase);
form.addEventListener('submit', emailCheckLowerCase);