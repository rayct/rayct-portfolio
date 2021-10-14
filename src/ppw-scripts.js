// Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Text Effect Start
document.addEventListener('DOMContentLoaded', () => {
  function animateSgv(id, delay, delayIncrement) {
    const logo = document.getElementById(id);
    const logoPaths = document.querySelectorAll(`#${id} path`);
    delay = delay;
    for (let i = 0; i < logoPaths.length; i++) {
      console.log(logoPaths[i].getTotalLength());
      logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
      logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
      logoPaths[i].style.animation = `line-anim 1s ease forwards ${delay}s`;
      delay += delayIncrement;
      console.log(delay)
    }
    logo.style.animation = `fill 1s ease forwards ${delay}s`;
  }
  animateSgv('logo', 0, 0.4)
}, false);
// Text Effect End 