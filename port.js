window.onload = () => window.scrollTo(0, 0);


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});