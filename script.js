const logo = document.getElementById('logo');

logo.addEventListener('mouseover', () => {
  logo.src = 'images/Logo.jpg';
});

logo.addEventListener('mouseout', () => {
  logo.src = 'images/Logo.gif';
});