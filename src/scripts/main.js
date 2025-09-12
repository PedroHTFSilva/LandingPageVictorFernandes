// Apenas controla o envio do formulário
function enviarFormulario(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
}
// Dicionário de traduções
const translations = {
  pt: {
    nav_who: "Quem sou",
    nav_projects: "Projetos",
    nav_skills: "Habilidades",
    nav_contact: "Contato",

    hero_title: "Victor Fernandes",
    hero_list1: "Designer de Som",
    hero_list2: "Compositor",
    hero_list3: "Mixagem e Masterização",
    hero_list4: "Arranjador Musical",
    hero_btn: "Fale comigo",

    about_title: "Sobre mim",
    about_p1: "Sou produtor musical com foco em sound design e trilhas para mídias interativas, filmes e jogos.",
    about_p2: "Crio efeitos sonoros para ambientes virtuais e composições originais no Ableton Live.",
    about_p3: "Trabalho para transformar conceitos em experiências sonoras que contam histórias.",
    about_p4: "Falo português e inglês fluentemente e estou aprendendo alemão.",
    about_p5: "Meu objetivo é colaborar em projetos artísticos onde o som seja essencial para a narrativa.",

    projects_title: "Meus Projetos",
    project1: "Projeto 1: Efeitos sonoros e música ambiente do servidor Minecraft CobbleMania.",
    project2: "Projeto 2: Trilha sonora feita para Hive City.",

    skills_title: "Habilidades",
    skill1: "Sound Design",
    skill1_desc: "Criação de efeitos sonoros para jogos e filmes",
    skill2: "Foley",
    skill2_desc: "Gravação e edição de sons de ambiente",
    skill3: "Edição de Áudio",
    skill3_desc: "Edição de áudio pós-gravação",
    skill4: "Mixagem & Masterização",
    skill4_desc: "Mixagem e masterização profissional",
    skill5: "Edição Musical",
    skill5_desc: "Edição de músicas e arranjos",
    skill6: "Produção de Som",
    skill6_desc: "Produção de áudio completo",

    contact_title: "Entre em contato",
    contact_name: "Nome",
    contact_email: "Email",
    contact_message: "Mensagem",
    contact_btn: "Enviar",
    contact_info: "Informações de contato",
    contact_email_info: "victor.vv.veiga@gmail.com",
    contact_phone: "+55 15 997770398",
  },
  en: {
    nav_who: "Who am I",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",

    hero_title: "Victor Fernandes",
    hero_list1: "Sound Designer",
    hero_list2: "Composer",
    hero_list3: "Mixing and Mastering",
    hero_list4: "Music Arranger",
    hero_btn: "Get in touch",

    about_title: "About Me",
    about_p1: "I'm a music producer focused on sound design and soundtracks for interactive media, movies, and games.",
    about_p2: "I design sound effects for virtual environments and compose original music in Ableton Live.",
    about_p3: "I work to transform concepts into auditory experiences that tell stories.",
    about_p4: "I speak Portuguese and English fluently, and I'm learning German.",
    about_p5: "My goal is to collaborate on artistic projects where sound is essential to storytelling.",

    projects_title: "My Projects",
    project1: "Project one: Sound effects and ambient music from the Minecraft server CobbleMania.",
    project2: "Project two: Soundtrack made for Hive City.",

    skills_title: "Skills",
    skill1: "Sound Design",
    skill1_desc: "Creating sound effects for games and movies",
    skill2: "Foley",
    skill2_desc: "Recording and editing environmental sounds",
    skill3: "Post Audio Editing",
    skill3_desc: "Audio editing after recording",
    skill4: "Mixing & Mastering",
    skill4_desc: "Professional mixing and mastering",
    skill5: "Music Editing",
    skill5_desc: "Music editing and arranging",
    skill6: "Sound Production",
    skill6_desc: "Full audio production",

    contact_title: "Get in touch",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_btn: "Send Message",
    contact_info: "Contact Info",
    contact_email_info: "victor.vv.veiga@gmail.com",
    contact_phone: "+55 15 997770398",
  }
};

let currentLang = "en"; // idioma padrão

// Função que troca os textos
function updateLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Trocar placeholders do formulário
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// Troca de idioma no botão
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "pt" : "en";
  updateLanguage(currentLang);

  // Atualiza o texto do botão
  document.getElementById("langToggle").textContent = currentLang === "en" ? "🇺🇸 EN" : "🇧🇷 PT";
});

// Inicializa a página no idioma padrão
updateLanguage(currentLang);

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("carouselProjects");
  const iframes = carousel.querySelectorAll("iframe");

  // Pausa todos os vídeos
  const pauseAllVideos = () => {
    iframes.forEach(iframe => {
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  };

  // Pausa vídeos ao mudar de slide
  carousel.addEventListener("slide.bs.carousel", pauseAllVideos);

  // Reaplica o tamanho completo dos iframes quando o slide termina
  carousel.addEventListener("slid.bs.carousel", () => {
    iframes.forEach(iframe => {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
    });
  });
});
const backToTop = document.getElementById('backToTop');



  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Scroll suave ao clicar
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
