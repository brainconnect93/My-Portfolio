const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


// POPUP WINDOW SECTION

//getting modal openning button
var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});

// clicking on the span close Btn

var closeBtns = document.querySelectorAll('.closeBtn');
closeBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.closest('.modal').style.display = 'none';
  };
});

// clicking outside the box

window.onclick = function(e){
  if(e.target.className === 'modal') {
    e.target.style.display = 'none';
  }
};
