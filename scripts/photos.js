// Ensure the content has loaded so we can set a listener on all the images
document.addEventListener('DOMContentLoaded', function () {
  // Select all images with the ID 'clickableImage'
  const images = document.querySelectorAll('#clickableImage');
  const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
  const modalImage = document.getElementById('modalImage');

  images.forEach(image => {
    image.addEventListener('click', function () {
      // Set the modal image source to the clicked image source
      modalImage.src = image.src;
      modal.show();
    });
  });
});