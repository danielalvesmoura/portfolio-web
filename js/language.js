let language = 'pt';
const btn_pt = document.getElementById("btn_pt");
const btn_en = document.getElementById("btn_en");

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
    const elementsAlt = document.querySelectorAll("[data-i18n], [alt]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.innerHTML = translation[language][key];
    });

    elementsAlt.forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.alt = translation[language][key];
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
        about_img_alt: 'Foto grande de Daniel Alves Moura',

        projects_header_title: 'PORTFÓLIO SELECIONADO',
        projects_header_subtitle: 'Arquitetura de Projetos',
        projects_subtitle: 'JOGO EM HTML, CSS E JAVASCRIPT',
        projects_title: 'Jogo da Memória',
        projects_description: 'Um jogo clássico de memória desenvolvido com HTML, CSS e JavaScript.',
        projects_see_details: 'Ver Detalhes',
        projects_memory_alt: 'Foto do jogo da memória',

        skills_subtitle: 'CONSTANTE APRENDIZADO',
        skills_title: 'Minhas <span>Habilidades</span>',
        skills_react_alt: 'Ícone do React',
        skills_python_alt: 'Ícone do Python',
        skills_database_alt: 'Ícone do Banco de Dados',
        skills_java_alt: 'Ícone do Java',
        skills_html_alt: 'Ícone do HTML',
        skills_css_alt: 'Ícone do CSS',
        skills_js_alt: 'Ícone do JavaScript',

        education_subtitle: 'FORMAÇÃO ACADÊMICA',
        education_title: 'Minha <span>Educação</span>',
        education_description: 'Explorando os fundamentos da computação e arquitetura de software através de uma trajetória de excelência técnica.',
        education_college_title: 'Instituto Federal do Paraná Campus Paranavaí',
        education_course_title: 'BACHARELADO EM ENGENHARIA DE SOFTWARE',
        education_calendar_alt: 'Ícone de calendário',
        education_course_duration: '2024 - Presente (Expectativa 2027)',
        education_location_alt: 'Ícone de localização',
        education_course_location: 'Paranavaí, Paraná, Brasil',
        education_ifpr_alt: 'Foto da entrada do Instituto Federal do Paraná',
        education_studant_cap_alt: 'Ícone de um chapéu de formatura',

        contact_subtitle: 'VAMOS CONVERSAR?',
        contact_title: 'Entre em <span>Contato</span>',

        contact_name_error: 'É obrigatório preencher o nome.',
        contact_email_error: 'É obrigatório preencher o email.',
        contact_email_invalid_error: 'Por favor, insira um email válido.',
        contact_subject_error: 'É obrigatório preencher o assunto.',
        contact_message_error: 'É obrigatório preencher a mensagem.'
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
        about_img_alt: 'Large photo of Daniel Alves Moura',

        projects_header_title: 'SELECTED PORTFOLIO',
        projects_header_subtitle: 'Project Architecture',
        projects_subtitle: 'GAME IN HTML, CSS AND JAVASCRIPT',
        projects_title: 'Memory Game',
        projects_description: 'A classic memory game developed with HTML, CSS and JavaScript.',
        projects_see_details: 'See Details',
        projects_memory_alt: 'Photo of the memory game',
        

        skills_subtitle: 'CONSTANT LEARNING',
        skills_title: 'My <span>Skills</span>',
        skills_react_alt: 'Icon of React',
        skills_python_alt: 'Icon of Python',
        skills_database_alt: 'Icon of Database',
        skills_java_alt: 'Icon of Java',
        skills_html_alt: 'Icon of HTML',
        skills_css_alt: 'Icon of CSS',
        skills_js_alt: 'Icon of JavaScript',

        education_subtitle: 'ACADEMIC BACKGROUND',
        education_title: 'My <span>Education</span>',
        education_description: 'Exploring the fundamentals of computing and software architecture through a trajectory of technical excellence.',
        education_college_title: 'Federal Institute of Paraná Campus Paranavaí',
        education_course_title: 'BACHELOR IN SOFTWARE ENGINEERING',
        education_calendar_alt: 'Calendar icon',
        education_course_duration: '2024 - Present (Expectation 2027)',
        education_location_alt: 'Location icon',
        education_course_location: 'Paranavaí, Paraná, Brazil',
        education_ifpr_alt: 'Photo of the Federal Institute of Paraná entrance',
        education_studant_cap_alt: 'Graduation cap icon'
    }
}