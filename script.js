const img = document.querySelectorAll('.gallery-item');
const btnClose = document.getElementById('close-btn');
const lightContainer =	document.querySelector('.lightbox');
const lightImg = document.getElementById('lightbox-image')

img.forEach(element => {
  element.addEventListener('click', () => {
    lightContainer.style.display = 'flex';
    lightImg.src = element.src.replace('-thumbnail', '');
    });
});


btnClose.addEventListener('click', () => {
  lightContainer.style.display = 'none';
});

lightContainer.addEventListener('click', (element) => {
  if (element.target === lightContainer) {
    lightContainer.style.display = 'none';
  }
  
});