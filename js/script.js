let button = document.querySelector('.btn');
let projectUrl = "https://junior7marques.github.io/portfolio/projetos/index.html";

function newUrl(url) {
    let win = window.open(url, '_parent');
    win.focus();
}

button.addEventListener('click', () => {
    newUrl(projectUrl);
})