let show = true

const showMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('show-menu', show);
        burger.classList.toggle('burger-animation', show);

        show = !show;
    });
}

const turnOn = () => {
    const theme = document.querySelector('.theme');

    theme.addEventListener('click', () => {
        document.body.classList.toggle('light');
    });
}

// ---- SKILLS ----
const opSkill = () => {
    const opMe = document.querySelector('.me');
    const opWith = document.querySelector('.with');
    const skills = document.querySelectorAll('.skill-container, .option-skill');

    opMe.addEventListener('click', () => {

        for(const skill of skills){
            skill.classList.remove('with-gs');
            skill.classList.add('without-gs');
        }

    })

    opWith.addEventListener('click', () => {

        for(const skill of skills){
            skill.classList.remove('without-gs');
            skill.classList.add('with-gs');
        }
    })
}

showMenu();
turnOn();
opSkill();