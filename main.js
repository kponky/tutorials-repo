// navigation bar function 

function handleMenuFunction(){
  let menuButton = document.getElementById("navMenu");

if (menuButton.className === "navbar-menu"){
  menuButton.className += "responsive";
}else {
  menuButton.className = "navbar-menu"
}
};


  window.onscroll = function(){headerShadow()};

  function headerShadow(){
    const navbarHeader = document.getElementById("header");
    
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      navbarHeader.style.boxShadow = "0 1px 7px rgba(0, 0, 0, 0.7)";
      navbarHeader.style.height = "80px";
      navbarHeader.style.lineHeight = "70px";

    }else {
      navbarHeader.style.boxShadow = "none";
      navbarHeader.style.height = "90px";
      navbarHeader.style.lineHeight = "80px";
    }
  }