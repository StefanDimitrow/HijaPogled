const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingOutput = document.getElementById('rating-output');
    let currentRating = 0;
  
    // Function to handle the rating logic
    function setRating(rating) {
      // Remove the "selected" class from all stars
      stars.forEach(star => star.classList.remove('selected'));
      
      // Add the "selected" class to the appropriate stars
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected');
      }
  
      // Update the rating output
      ratingOutput.textContent = rating;
      currentRating = rating;
    }
  
    // Add event listeners to the stars for rating
    stars.forEach(star => {
      star.addEventListener('click', () => {
        setRating(parseInt(star.getAttribute('data-value')));
      });
  
      // Optional: Add hover effects to show rating preview
      star.addEventListener('mouseover', () => {
        const ratingPreview = parseInt(star.getAttribute('data-value'));
        setRating(ratingPreview);
      });
  
      // Reset the rating when mouse leaves
      star.addEventListener('mouseout', () => {
        setRating(currentRating);
      });
    });
  });