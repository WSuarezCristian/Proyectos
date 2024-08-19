const bmore = document.querySelector('#bmore');
const links = document.querySelector('#link');

bmore.addEventListener('click', (e) => {
links.classList.toggle('collapsed');
});