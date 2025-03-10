// JavaScript to toggle the visibility of the GeneralInformation section
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggleButton');
  const generalInfo = document.getElementById('generalInfo');

  if (toggleButton && generalInfo) {
    toggleButton.addEventListener('click', function() {
      generalInfo.style.display = (generalInfo.style.display === 'none' || generalInfo.style.display === '') ? 'block' : 'none';
    });
  }
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.scroll-container img');

function openModal(src) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = 'flex'; // Use flex to center the content
  modalImage.src = src;
  currentImageIndex = Array.from(images).findIndex(img => img.src === src);
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  const modalImage = document.getElementById('modalImage');
  modalImage.src = images[currentImageIndex].src;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const modalImage = document.getElementById('modalImage');
  modalImage.src = images[currentImageIndex].src;
}
