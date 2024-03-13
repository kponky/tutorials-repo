document.addEventListener('DOMContentLoaded', function() {
  // navigation bar function
  function handleMenuFunction() {
    let menuButton = document.getElementById("navMenu");

    if (menuButton.classList.contains("navbar-menu")) {
      menuButton.classList.add("responsive");
    } else {
      menuButton.classList.remove("responsive");
    }
  }

  

  document.getElementById('mmme').addEventListener('click', handleMenuFunction());

  window.onscroll = function() {
    headerShadow();
    scrollActive();
  };

  function headerShadow() {
    const navbarHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbarHeader.style.boxShadow = "0 2px 9px 1px rgba(0, 0, 0, 0.9)";
      navbarHeader.style.height = "70px";
      navbarHeader.style.lineHeight = "60px";
    } else {
      navbarHeader.style.boxShadow = "none";
      navbarHeader.style.height = "90px";
      navbarHeader.style.lineHeight = "70px";
    }
  }

  let handleTypingEffect = new Typed(".typedtext", {
    strings: ["Web Developer", "Designer", "Teacher", "Virtual Assistant"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  });

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
    sr.reveal('.projects-wrapper', { interval: 200 });
    sr.reveal('.blog-wrapper', { interval: 300 });
    sr.reveal('.top-header', {});

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "100px",
      duration: 2500,
      reset: true
    });

    srLeft.reveal('.aboutMe-info', { delay: 200 });
    srLeft.reveal('.contact-info', { delay: 200 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "100px",
      duration: 2500,
      reset: true
    });

    srRight.reveal('.skills', { delay: 200 });
    srRight.reveal('.form-control', { delay: 200 });
  }

  initializeScrollReveal();

  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const heightSection = current.offsetHeight,
            topSection = current.offsetTop - 50,
            sectionId = current.getAttribute('id'),
            navLink = document.querySelector('.navbar-menu a[href*=' + sectionId + ']');

      if (navLink) {
        if (scrollY > topSection && scrollY <= topSection + heightSection) {
          navLink.classList.add('active-link');
        } else {
          navLink.classList.remove('active-link');
        }
      }
    });
  }

});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
});



















































// // navigation bar function 

// function handleMenuFunction(){
//   let menuButton = document.getElementById("navMenu");

// if (menuButton.className === "navbar-menu"){
//   menuButton.className += "responsive";
// }else {
//   menuButton.className = "navbar-menu"
// }
// };

// document.getElementById("navbar-menu").addEventListener("click", handleMenuFunction);



//   window.onscroll = function(){headerShadow()};

//   function headerShadow(){
//     const navbarHeader = document.getElementById("header");
    
//     if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
//       navbarHeader.style.boxShadow = "0 2px 9px 1px rgba(0, 0, 0, 0.9)";
//       navbarHeader.style.height = "70px";
//       navbarHeader.style.lineHeight = "60px";

//     }else {
//       navbarHeader.style.boxShadow = "none";
//       navbarHeader.style.height = "90px";
//       navbarHeader.style.lineHeight = "70px";
//     }
//   } 

 
//   let handleTypingEffect = new Typed(".typedtext",{
//     strings: ["Web Developer", "Designer", "Teacher", "Virtual Assistant",],
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 80,
//     backDelay: 2000
// });

// // Wrap the initialization inside a function
// function initializeScrollReveal() {
//   const sr = ScrollReveal({
//     origin: "top",
//     distance: "100px",
//     duration: 2500,
//     reset: true
//   });

//   // Call reveal method for each element you want to animate
//   sr.reveal('.description-text-card', {});
//   sr.reveal('.description-name', { delay: 200 });
//   sr.reveal('.description-text-info', { delay: 200 });
//   sr.reveal('.description-text-btn', { delay: 200 });
//   sr.reveal('.description-image', { delay: 300 });
//   sr.reveal('.projects-wrapper', {interval: 200});
//   sr.reveal('.blog-wrapper', {interval: 300});
//   sr.reveal('.top-header', {});




//   const srLeft = ScrollReveal({
//     origin: "left",
//     distance: "100px",
//     duration: 2500,
//     reset: true
//   });

//   srLeft.reveal('.aboutMe-info', {delay: 200})
//   srLeft.reveal('.contact-info', {delay: 200})




//   const srRight = ScrollReveal({
//     origin: "right",
//     distance: "100px",
//     duration: 2500,
//     reset: true
//   });


//   srRight.reveal('.skills', {delay: 200})
//   srRight.reveal('.form-control', {delay: 200})

// }

// // Call the initialization function when the DOM is ready
// document.addEventListener('DOMContentLoaded', initializeScrollReveal);






















// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach(current =>{
//     const heightSection = current.offsetHeight, 
//     topSection = current.offsetTop - 50,
//     sectionId = current.getAttribute('id');


//     if (scrollY> topSection && scrollY <= topSection + heightSection ){
//       document.querySelector('.navbar-menu a[href*=' + sectionId + ']').classList.add('active-link')

//     }else {
//       document.querySelector('.navbar-menu a[href*=' + sectionId + ']').classList.remove('active-link')

//     }
//   })
// }

// window.addEventListener('scroll', scrollActive)