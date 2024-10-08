const headerEl = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50){
    headerEl.classList.add('header-scrolled')
  } else if (window.scrollY <= 50) {
    headerEl.classList.remove('header-scrolled')
  }
})


const radios = document.querySelectorAll('input[name="slide"]');
      const paragraphs = document.querySelectorAll(".history__paragraph");

      radios.forEach((radio) => {
        radio.addEventListener("change", () => {
          const selectedId = radio.id.replace("slide", "paragraph");

          paragraphs.forEach((paragraph) => {
            paragraph.style.display = "none"; // Hide all paragraphs
          });

          document.getElementById(selectedId).style.display = "block"; // Show the selected paragraph
        });
      });

      // Initialize to show the first paragraph
      paragraphs.forEach((paragraph) => {
        paragraph.style.display = "none"; // Hide all paragraphs initially
      });
      paragraphs[0].style.display = "block"; // Show the first paragraph

   
