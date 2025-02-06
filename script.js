
// Toggle the dropdown menu on hamburger click
const hamburger = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("dropdown-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
});
//Trigger Annimation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".floor, .window, .laundry, .ironing, .trash, .carpets"
  );
  const laundry = document.querySelector(".laundry"); // Target the laundry div

  // Create an IntersectionObserver to watch the .laundry div
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Only trigger the animation when the .laundry div is in view
          cards.forEach((card, index) => {
            // Add a delay based on the card's index, ensuring that each one animates in order
            setTimeout(() => {
              card.classList.add("card-visible");
            }, index * 900); // 500ms delay for each card
          });
          observer.unobserve(entry.target); // Stop observing once the laundry div is in view
        }
      });
    },
    {
      threshold: 1.0, // The entire laundry div must be visible
    }
  );

  observer.observe(laundry); // Observe the .laundry div
});
// Function to animate the number counting up
function animateNumber(element, target) {
  const start = 0;
  const end = target;
  const duration = 2000; // Duration in milliseconds
  let startTime = null;

  function updateNumber(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const currentNumber = Math.min(
      start + (progress / duration) * (end - start),
      end
    );
    element.textContent = Math.floor(currentNumber);

    if (progress < duration) {
      window.requestAnimationFrame(updateNumber);
    } else {
      element.textContent = end; // Ensure it ends at the target number
    }
  }

  window.requestAnimationFrame(updateNumber);
}

// Intersection Observer to trigger animation when in view
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numberElement = entry.target;
        const targetValue = parseInt(
          numberElement.getAttribute("data-target"),
          10
        );
        animateNumber(numberElement, targetValue);
        observer.unobserve(numberElement); // Stop observing after animation starts
      }
    });
  },
  { threshold: 0.5 }
); // Adjust the threshold as needed

// Observe each number div
document.querySelectorAll(".references__number").forEach((number) => {
  observer.observe(number);
});
//Trigger Annimation for Benefits Section for each benefit__icon
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".benefit__icon");
  const benefits = document.querySelector(".benefit__point_trigger"); // Target

  // Create an IntersectionObserver to watch the .benefit__point_trigger
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Only trigger the animation when the benefit__point_trigger is in view
          cards.forEach((card, index) => {
            // Add a delay based on the card's index, ensuring that each one animates in order
            setTimeout(() => {
              card.classList.add("benefit-visible");
            }, index * 700); // 500ms delay for each card
          });
          observer.unobserve(entry.target); // Stop observing once  in view
        }
      });
    },
    {
      threshold: 1.0, // The entire  must be visible
    }
  );

  observer.observe(benefits); // Observe
});
//Slider
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  cssMode: true,
  autoplay: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    // Preload all images to prevent lag on first autoplay
    preloadImages: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    620: {
      slidesPerView: 2,
    },

    1020: {
      slidesPerView: 3,
    },
  },
});
