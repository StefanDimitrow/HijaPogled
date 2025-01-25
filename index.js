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