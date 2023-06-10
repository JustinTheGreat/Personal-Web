//Tab Change effect
let docTitle = document.title;
window.addEventListener("blur",() => {
  document.title = "Come Back ;(";
});

window.addEventListener("focus",() => {
  document.title = docTitle;
});
//Scrolling effect to go down
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.scroll-button').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default action
    window.scrollBy({ top: 600, left: 0, behavior: 'smooth' }); // You can change '600' to the amount you want to scroll
  });
});
