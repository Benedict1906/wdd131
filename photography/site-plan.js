// 1. Data Structure: Array of Objects
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
  { id: 6, title: "Concert Energy", category: "event", url: "event2.jpg" },
];

// 2. DOM Selection
const galleryContainer = document.querySelector("#gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

// 3. Function to build the gallery (DOM Interaction)
function displayPhotos(photosArray) {
  // Clear existing content
  galleryContainer.innerHTML = "";

  // 4. Array Method: forEach
  photosArray.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    // Building the HTML structure for each card
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

// 5. Logic: Filtering with Conditional Branching
function filterGallery(category) {
  if (category === "all") {
    displayPhotos(photoData);
  } else {
    // 6. Array Method: filter
    const filtered = photoData.filter((p) => p.category === category);
    displayPhotos(filtered);
  }
}

// 7. Event Listeners
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.target.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initial Load: Display all photos when page opens
displayPhotos(photoData);
