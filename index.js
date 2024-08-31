// JavaScript to toggle the visibility of the GeneralInformation section
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggleButton');
    const generalInfo = document.getElementById('generalInfo');
  
    toggleButton.addEventListener('click', function() {
      if (generalInfo.style.display === 'none' || generalInfo.style.display === '') {
        generalInfo.style.display = 'block'; // Show the section
      } else {
        generalInfo.style.display = 'none'; // Hide the section
      }
    });
  });
  