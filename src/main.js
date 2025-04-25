import './style.css';

// Tuodaan kirjastot
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Chart from 'chart.js/auto';

// Rekisteröidään GSAP pluginit
gsap.registerPlugin(ScrollTrigger);

// Alustetaan AOS-animaatiot
document.addEventListener('DOMContentLoaded', () => {
  // Alustetaan AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Hero-animaatio
  gsap.from('.hero-content h1', {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: 'power4.out'
  });
  
  gsap.from('.hero-content p', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 0.3,
    ease: 'power4.out'
  });
  
  gsap.from('.hero-content .btn', {
    opacity: 0,
    y: 30,
    duration: 1.2,
    delay: 0.6,
    ease: 'power4.out'
  });
  
  // Stats-animaatio
  const counterElements = document.querySelectorAll('.counter');
  
  counterElements.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => {
        let count = 0;
        const updateCount = () => {
          const increment = target / 60;
          if (count < target) {
            count += Math.ceil(increment);
            counter.innerText = count > target ? target : count;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      },
      once: true
    });
  });
  
  // Asuntoesittelyjen Swiper
  const propertySwiper = new Swiper('.property-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  // Testimonials Swiper
  const testimonialSwiper = new Swiper('.testimonial-swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.testimonial-pagination',
      clickable: true,
    }
  });
  
  // Asuntomarkkina-analyysi graafi
  const marketChart = document.getElementById('marketChart');
  if (marketChart) {
    new Chart(marketChart, {
      type: 'line',
      data: {
        labels: ['Tammi', 'Helmi', 'Maalis', 'Huhti', 'Touko', 'Kesä'],
        datasets: [{
          label: 'Keskimääräinen myyntihinta (€/m²)',
          data: [4500, 4550, 4600, 4580, 4650, 4700],
          borderColor: '#1e3a8a',
          backgroundColor: 'rgba(30, 58, 138, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
          title: {
            display: true,
            text: 'Asuntojen hintakehitys 2024'
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)',
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
  
  // Mobile menu toggle
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('menu-open');
    });
  }
}); 