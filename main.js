
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookiesBtn = document.getElementById('acceptCookies');
const declineCookiesBtn = document.getElementById('declineCookies');


if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'flex';
}


acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
    console.log("Cookies acceptés");
});


declineCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieBanner.style.display = 'none';
    console.log("Cookies refusés");
});



function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Expiration en jours
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
}


function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}


function saveVisitTime() {
  const now = new Date().toISOString(); 
  setCookie("visitTime", now, 7); 
  console.log("Visite enregistrée :", now);
}


function showLastVisit() {
  const visitTime = getCookie("visitTime");
  if (visitTime) {
      console.log("Dernière visite :", visitTime);
      alert(`Votre dernière visite était le : ${new Date(visitTime).toLocaleString()}`);
  } else {
      console.log("Première visite !");
      
  }
}


showLastVisit(); 
saveVisitTime(); 



const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; 
    carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Démarrage du défilement automatique
    setInterval(nextSlide, 5000);

    // Afficher la première diapositive au chargement
    showSlide(currentIndex);
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
});

document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
