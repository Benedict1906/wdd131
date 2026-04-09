const photoData = [
  {
    id: 1,
    title: "Classic Portrait",
    category: "portrait",
    url: "portrait1.jpg",
  },
  { id: 2, title: "High Fashion", category: "portrait", url: "portrait2.jpg" },
  {
    id: 3,
    title: "Mountain Majesty",
    category: "landscape",
    url: "landscape1.jpg",
  },
  {
    id: 4,
    title: "Lakeside View",
    category: "landscape",
    url: "landscape2.jpg",
  },
  { id: 5, title: "The Big Day", category: "event", url: "event1.jpg" },
  { id: 6, title: "Golden Sunset", category: "landscape", url: "hero.jpg" },
];

const galleryContainer = document.querySelector("#gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayPhotos(photosArray) {
  galleryContainer.innerHTML = "";
  photosArray.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "photo-card";
    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.title}">
      <div style="padding:15px">
        <h3 style="margin:0">${photo.title}</h3>
        <p style="color: #666; margin: 5px 0;">Category: ${photo.category}</p>
      </div>
    `;
    galleryContainer.appendChild(card);
  });
}

function filterGallery(category) {
  if (category === "all") {
    displayPhotos(photoData);
  } else {
    const filtered = photoData.filter((p) => p.category === category);
    displayPhotos(filtered);
  }
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Logic for blue 'active' button state
    filterButtons.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");

    const category = e.target.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initial load
displayPhotos(photoData);
