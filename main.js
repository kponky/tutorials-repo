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