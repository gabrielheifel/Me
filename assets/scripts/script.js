
const showMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('show-menu');

        burger.classList.toggle('burger-animation');
    });
}

const turnOn = () => {
    const theme = document.querySelector('.theme');

    theme.addEventListener('click', () => {
        document.body.classList.toggle('light');
    });
}

showMenu();
turnOn();