
const reachedMiddleEvent = new CustomEvent("ReachedMiddleEvent",{
  detail: "uwu",
});

// Find alle billedcontainer-elementer
const imageContainers = document.querySelectorAll('.image-container');

// Tilføj en klikhændelse til hvert billedcontainer-element
imageContainers.forEach(function(container) {
  container.addEventListener("ReachedMiddleEvent", (e) =>{
    console.log(e.detail)
  })
  container.dispatchEvent(reachedMiddleEvent)

  container.addEventListener('click', function(event) {
    // Find overlay-teksten inde i det klikkede element
    const overlayText = event.currentTarget.querySelector('.overlay-text');
    
    // Vis eller skjul overlay-teksten baseret på dens aktuelle synlighed
    if (overlayText.style.visibility === 'visible') {

      overlayText.style.visibility = 'hidden';
    } else {
      overlayText.style.visibility = 'visible';
    }
  });
});

// Vælg elementet med id'et "salesText"
let salesText = document.getElementById('salesText');

const windowHeight = window.innerHeight;

// Funktionen, der håndterer scrollhændelsen
function handleScroll() {

  // Beregn det vertikale midtpunkt af vinduet
  let windowMidPoint = windowHeight / 2;

  // Beregn tekstens position i forhold til det vertikale midtpunkt
  let textPosition = salesText.getBoundingClientRect().top;

  // Hvis tekstens position er mindre end eller lig med det vertikale midtpunkt, tilføj "slide-in" klasse
  if (textPosition <= windowMidPoint) {
    salesText.classList.add('slide-tekst');
  } 
}

// Tilføj en eventlistener, der kører handleScroll-funktionen, når brugeren scroller
window.addEventListener('scroll', handleScroll);


//JS for kontaktformular på index.html
document.getElementById("kontakt-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Forhindrer standard formularafsendelse

  // Hent formularfelterne
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var message = document.getElementsByName("message")[0].value;

  // Send formulardata til backenden eller udfør andre handlinger her
  console.log("Navn: " + name);
  console.log("E-mail: " + email);
  console.log("Besked: " + message);

  // Nulstil formularfelterne
  document.getElementById("contact-form").reset();
});


// Gør navbaren responsiv og tilføjer en menu til menu ikonet
function toggleMenu() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('responsive');
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
