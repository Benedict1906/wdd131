const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();

window.addEventListener("resize", handleResize);

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    const dialog = document.createElement("dialog");
    dialog.classList.add("image-viewer");

    dialog.innerHTML = `
      <img src="${img.src.replace("-sm", "")}" alt="${img.alt}">
      <button class="close-viewer">X</button>
    `;

    document.body.appendChild(dialog);

    dialog.showModal();

    const closeBtn = dialog.querySelector(".close-viewer");
    closeBtn.addEventListener("click", () => {
      dialog.close();
      dialog.remove();
    });
  });
});

const gallery = document.querySelector(".gallery");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal-img");
const closeButton = document.querySelector(".close-viewer");

function handleImageClick(event) {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  const src = clickedImage.getAttribute("src");
  const alt = clickedImage.getAttribute("alt");

  const fullSrc = src.split("-")[0] + "-full.jpeg";

  modalImage.setAttribute("src", fullSrc);
  modalImage.setAttribute("alt", alt);

  modal.showModal();
}

function handleCloseClick() {
  modal.close();
}

function handleBackdropClick(event) {
  if (event.target === modal) {
    modal.close();
  }
}

gallery.addEventListener("click", handleImageClick);
closeButton.addEventListener("click", handleCloseClick);
modal.addEventListener("click", handleBackdropClick);
