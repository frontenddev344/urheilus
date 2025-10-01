$(document).ready(function(){
  $(".toggle").click(function(){
    $("body").addClass("menuToggle");
  });
  $(".close").click(function(){
    $("body").removeClass("menuToggle");
  });
});
$(window).scroll(function(){
  if ($(window).scrollTop() >= 10) {
      $('header').addClass('fixed-header');
  }
  else {
      $('header').removeClass('fixed-header');
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const cookiePopup = document.getElementById('cookiePopup');
  const acceptCookies = document.getElementById('acceptCookies');

  // Check if the user has already accepted cookies
  if (!localStorage.getItem('cookiesAccepted')) {
      cookiePopup.style.display = 'block';
  }

  acceptCookies.addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true');
      cookiePopup.style.display = 'none';
  });
});


 //Cookies JS Start
 const cookiesBox = document.querySelector('.wrapper'),
 buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
 if (document.cookie.includes('AlexGolovanov')) return;
 cookiesBox.classList.add('show');

 // ---- ---- Button ---- ---- //
 buttons.forEach((button) => {
   button.addEventListener('click', () => {
     cookiesBox.classList.remove('show');

     // ---- ---- Time ---- ---- //
     if (button.id == 'acceptBtn') {
       document.cookie =
         'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
     }
   });
 });
};

window.addEventListener('load', executeCodes);

// //Cookies JS End