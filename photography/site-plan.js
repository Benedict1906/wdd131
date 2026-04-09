// Data Structure including the new event2.jpg
const photoData = [
  {
    id: 1,
    title: "Classic Portrait",
    category: "portrait",
    url: "images/portrait1.jpg",
  },
  {
    id: 2,
    title: "High Fashion",
    category: "portrait",
    url: "images/portrait2.jpg",
  },
  {
    id: 3,
    title: "Mountain Majesty",
    category: "landscape",
    url: "images/landscape1.jpg",
  },
  {
    id: 4,
    title: "Lakeside View",
    category: "landscape",
    url: "images/landscape2.jpg",
  },
  { id: 5, title: "The Big Day", category: "event", url: "images/event1.jpg" },
  {
    id: 6,
    title: "Concert Energy",
    category: "event",
    url: "images/event2.jpg",
  },
  {
    id: 7,
    title: "Golden Sunset",
    category: "landscape",
    url: "images/hero.jpg",
  },
];

const galleryContainer = document.querySelector("#gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

// Function to build the gallery with "Full View" capability
function displayPhotos(photosArray) {
  galleryContainer.innerHTML = "";

  photosArray.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    // Wrapping the image in a link to allow "View Full Picture" on click
    card.innerHTML = `
      <a href="${photo.url}" target="_blank" title="View Full Image">
        <img src="${photo.url}" alt="${photo.title}">
      </a>
      <div style="padding:15px">
        <h3 style="margin:0">${photo.title}</h3>
        <p style="color: #666; margin: 5px 0;">Category: ${photo.category}</p>
      </div>
    `;
    galleryContainer.appendChild(card);
  });
}

// Logic: Filtering with Conditional Branching
function filterGallery(category) {
  if (category === "all") {
    displayPhotos(photoData);
  } else {
    const filtered = photoData.filter((p) => p.category === category);
    displayPhotos(filtered);
  }
}

// Event Listeners for Filter Buttons
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // UI Update: Toggle active button state
    filterButtons.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");

    const category = e.target.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initial Load
displayPhotos(photoData);
