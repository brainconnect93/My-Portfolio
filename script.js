const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// POPUP WINDOW SECTION

// var modal = document.getElementById('simpleModal');
// var modalBtn = document.getElementById('modalBtn');
// var closeBtn = document.getElementsByClassName('closeBtn')[0];

// modalBtn.addEventListener('click', openModal);

// closeBtn.addEventListener('click', closeModal);

// function openModal(){
//   modal.style.display = 'block';
// }

// function closeModal(){
//   modal.style.display = 'none';
// }

//getting modal opening buttons
const btns = document.querySelectorAll('.see-project');
const close_btns = document.querySelectorAll('.closeBtn')

btns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block'
  };
});

close_btns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');

    document.getElementsByClassName('.closeBtn').style.display = 'none'
  };
});

// close_btns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     document.querySelector(btn.dataset.target).classList.remove('active');
//   });
// });

// var closeBtn = document.getElementsByClassName('closeBtn');

// closeBtn.addEventListener('click', closeModal);

// function closeModal(){
//   modal.style.display = 'none';
// }


// var closeBtn = document.querySelectorAll('.closeBtn');

// closeBtn.forEach(function(btn) {
//   btn.onclick = function() {
//     var closeBtn = (btn.closest('.closeBtn').style.display = 'none');
//   };
// });