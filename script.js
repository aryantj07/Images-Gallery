// Sample image data
const imageData = [
    { src: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", caption: "A Cliff Photo" },
    { src: "https://images.pexels.com/photos/458917/pexels-photo-458917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", caption: "A Sunny Beach" },
    { src: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", caption: "A Beautiful lake" },
    { src: "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", caption: "A road through the jungles" },
    { src: "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", caption: "Image 5Black and White Mountain over Yellow White and Blue Sky" },
    { src: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", caption: "A City at Night" },
  ];
  
  const galleryGrid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const thumbnailCarousel = document.getElementById("thumbnail-carousel");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentIndex = 0;
  
  // Populate the gallery
  imageData.forEach((data, index) => {
    const img = document.createElement("img");
    img.src = data.src;
    img.alt = data.caption;
    img.dataset.index = index;
    galleryGrid.appendChild(img);
  
    // Add thumbnails
    const thumbnail = img.cloneNode();
    thumbnail.classList.add("thumbnail");
    thumbnailCarousel.appendChild(thumbnail);
  
    img.addEventListener("click", () => openLightbox(index));
    thumbnail.addEventListener("click", () => openLightbox(index));
  });
  
  // Open lightbox
  function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    updateLightbox();
  }
  
  // Update lightbox content
  function updateLightbox() {
    const { src, caption } = imageData[currentIndex];
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
  }
  
  // Navigate lightbox
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    updateLightbox();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageData.length;
    updateLightbox();
  });
  
  // Close lightbox
  closeBtn.addEventListener("click", () => (lightbox.style.display = "none"));
  
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
  