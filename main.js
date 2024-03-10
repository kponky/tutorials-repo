// navigation bar function 

function handleMenuFunction(){
  let menuButton = document.getElementById("navMenu");

if (menuButton.className === "navbar-menu"){
  menuButton.className += "responsive";
}else {
  menuButton.className = "navbar-menu"
}
};

document.getElementById("navMenu").addEventListener("click", handleMenuFunction);



  window.onscroll = function(){headerShadow()};

  function headerShadow(){
    const navbarHeader = document.getElementById("header");
    
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      navbarHeader.style.boxShadow = "0 2px 9px 1px rgba(0, 0, 0, 0.9)";
      navbarHeader.style.height = "70px";
      navbarHeader.style.lineHeight = "60px";

    }else {
      navbarHeader.style.boxShadow = "none";
      navbarHeader.style.height = "80px";
      navbarHeader.style.lineHeight = "70px";
    }
  } 

 
  let handleTypingEffect = new Typed(".typedtext",{
    strings: ["Web Developer", "Designer", "Teacher", "Virtual Assistant",],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

// Wrap the initialization inside a function
function initializeScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2500,
    reset: true
  });

  // Call reveal method for each element you want to animate
  sr.reveal('.description-text-card', {});
  sr.reveal('.description-name', { delay: 200 });
  sr.reveal('.description-text-info', { delay: 200 });
  sr.reveal('.description-text-btn', { delay: 200 });
  sr.reveal('.description-image', { delay: 300 });
  sr.reveal('.projects-wrapper', {interval: 200});
  sr.reveal('.blog-wrapper', {interval: 300});
  sr.reveal('.top-header', {});




  const srLeft = ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 2500,
    reset: true
  });

  srLeft.reveal('.aboutMe-info', {delay: 200})
  srLeft.reveal('.contact-info', {delay: 200})




  const srRight = ScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 2500,
    reset: true
  });


  srRight.reveal('.skills', {delay: 200})
  srRight.reveal('.form-control', {delay: 200})

}




// Call the initialization function when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeScrollReveal);
