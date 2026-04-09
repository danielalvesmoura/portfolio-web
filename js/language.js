let language = 'pt';
const btn_pt = document.getElementById("btn-pt");
const btn_en = document.getElementById("btn-en");

function changeLanguage() {
    if(language == 'pt') {

        language = 'en';

        btn_pt.classList.remove("active");
        btn_en.classList.add("active");

    } else {

        language = 'pt';

        btn_en.classList.remove("active");
        btn_pt.classList.add("active");
    }

    setLanguage();

}

function setLanguage() {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.innerHTML = translation[language][key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage();
});



const translation = {
    pt: {
        header_projects: 'Projetos',
        header_about: 'Sobre',
        header_education: 'Educação',
        header_skills: 'Habilidades',
        header_contact: 'Contato',
        
        about_subtitle: 'ENGENHEIRO DE SOFTWARE',
        about_title: 'Olá! Eu sou um <span>Engenheiro de Software</span> em formação.',
        about_description: 'Construindo sistemas escaláveis e experiências digitais precisas. Focado na arquitetura de soluções modernas que transformam código em valor tangível.',
        about_see_projects: 'Ver projetos',
        about_curriculum: 'Currículo',

        projects_subtitle: 'JOGO EM HTML, CSS E JAVASCRIPT',
        projects_title: 'Jogo da Memória',
        projects_description: 'Um jogo clássico de memória desenvolvido com HTML, CSS e JavaScript.',
        projects_see_details: 'Ver Detalhes',
    },

    en: {
        header_projects: 'Projects',
        header_about: 'About',
        header_education: 'Education',
        header_skills: 'Skills',
        header_contact: 'Contact',

        about_subtitle: 'SOFTWARE ENGINEER',
        about_title: 'Hello! I am a <span>Software Engineer</span> in training.',
        about_description: 'Building scalable systems and precise digital experiences. Focused on modern solution architecture that transforms code into tangible value.',
        about_see_projects: 'See projects',
        about_curriculum: 'Curriculum',

        projects_subtitle: 'GAME IN HTML, CSS AND JAVASCRIPT',
        projects_title: 'Memory Game',
        projects_description: 'A classic memory game developed with HTML, CSS and JavaScript.',
        projects_see_details: 'See Details',
    }
}