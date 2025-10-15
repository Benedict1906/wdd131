document.getElementById("year").textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll(".filters button");
const galleryImages = document.querySelectorAll(".gallery img");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    galleryImages.forEach((img) => {
      if (filter === "all" || img.dataset.category === filter) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.textContent = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
