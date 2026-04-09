// 1. Objects and Arrays
const photoData = [
  {
    id: 1,
    title: "Classic Portrait",
    category: "portrait",
    url: "placeholder1.jpg",
  },
  {
    id: 2,
    title: "Mountain Peak",
    category: "landscape",
    url: "placeholder2.jpg",
  },
  { id: 3, title: "Urban Life", category: "portrait", url: "placeholder3.jpg" },
];

// 2. DOM Interaction & Function Organization
const galleryContainer = document.querySelector("#gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayPhotos(photosArray) {
  // Clear current gallery
  galleryContainer.innerHTML = "";

  // 3. Array Method (forEach)
  photosArray.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "photo-card";
    card.innerHTML = `
            <img src="${photo.url}" alt="${photo.title}" style="width:100%">
            <p style="padding:10px">${photo.title} (${photo.category})</p>
        `;
    galleryContainer.appendChild(card);
  });
}

// 4. Conditional Branching and Filtering
function filterGallery(category) {
  if (category === "all") {
    displayPhotos(photoData);
  } else {
    // 5. Array Method (filter)
    const filtered = photoData.filter((p) => p.category === category);
    displayPhotos(filtered);
  }
}

// 6. Event Listeners
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.target.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initial Load
displayPhotos(photoData);
