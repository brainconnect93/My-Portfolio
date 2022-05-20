// const form = document.getElementById('form');
// const errorText = document.querySelector('.error-text');
// const email = document.getElementById('email');

// form.addEventListener('submit', (e) => {
//     const errorText = [''];
//     if (userEmail.value !== userEmail.value.toLowerCase()) {
//         errorText.push('Failed, kindly enter your email in lower case');
//     }
//     if (errorText.length > 0) {
//         e.preventDefault();
//         errorText.innerText = errorText.join('');
//     }
// });

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
form.addEventListener('change', emailCheckLowerCase);
form.addEventListener('submit', emailCheckLowerCase);