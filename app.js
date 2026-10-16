// PHOTOS : modifiez les chemins src dans index.html si vos fichiers sont en PNG.
// Les photos manquantes gardent un visuel textuel jusqu’à leur ajout.
function preparePortfolioPhoto(image) {
  const frame = image.closest('[data-photo-frame]');
  if (!frame) return;
  const fallback = frame.querySelector('[data-photo-fallback]');

  function showPhoto(loaded) {
    frame.classList.toggle('has-photo', loaded);
    image.hidden = !loaded;
    if (fallback) fallback.hidden = loaded;
  }

  image.addEventListener('load', () => showPhoto(image.naturalWidth > 0));
  image.addEventListener('error', () => showPhoto(false));
  if (image.complete) showPhoto(image.naturalWidth > 0);
}

document.querySelectorAll('[data-portfolio-photo]').forEach(preparePortfolioPhoto);

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const navLinks = [...document.querySelectorAll('.nav-link')];

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  navigation.classList.toggle('is-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) setMenu(false);
});
window.matchMedia('(min-width: 951px)').addEventListener('change', event => {
  if (event.matches) setMenu(false);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const current = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-15% 0px -65% 0px', threshold: 0});
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

const progress = document.querySelector('.reading-progress');
let ticking = false;
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  progress.style.transform = `scaleX(${ratio})`;
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateProgress);
    ticking = true;
  }
}, {passive: true});
window.addEventListener('resize', updateProgress);
updateProgress();

const projects = {
  "adas": {
    "title": "ADAS distribué sur robot 4WD",
    "intro": "Des fonctions d’aide à la conduite modélisées et validées sous MATLAB/Simulink.",
    "objective": "Étudier les fonctions ACC, FCW et AEB sur une plateforme robotique 4WD.",
    "workTitle": "Avancement",
    "work": [
      "Modélisation et validation MIL des fonctions ACC, FCW et AEB sous MATLAB/Simulink.",
      "Intégration prévue en C/C++ sur STM32 et Raspberry Pi, avec communication CAN et supervision Qt."
    ],
    "tags": [
      "MATLAB / Simulink",
      "MIL",
      "ACC / FCW / AEB",
      "STM32",
      "Raspberry Pi",
      "CAN",
      "Qt"
    ],
    "focus": "Préparer le passage des modèles validés à leur intégration sur les cibles embarquées."
  },
  "dms": {
    "title": "Détection de la somnolence du conducteur",
    "intro": "Un modèle d’intelligence artificielle appliqué à la vigilance du conducteur.",
    "objective": "Détecter la fatigue du conducteur en temps réel.",
    "work": [
      "Modèle de détection de la fatigue du conducteur en temps réel."
    ],
    "tags": [
      "Intelligence artificielle",
      "Détection de somnolence"
    ],
    "focus": "Appliquer l’intelligence artificielle à une fonction de surveillance du conducteur."
  },
  "ev": {
    "title": "Freinage régénératif",
    "intro": "Un projet de commande sous MATLAB/Simulink pour véhicule électrique.",
    "objective": "Récupérer l’énergie cinétique d’un véhicule électrique lors du freinage.",
    "work": [
      "Commande sous MATLAB/Simulink pour la récupération d’énergie d’un véhicule électrique."
    ],
    "tags": [
      "MATLAB",
      "Simulink",
      "Véhicule électrique",
      "Commande"
    ],
    "focus": "Relier la commande du freinage à la récupération d’énergie."
  },
  "can": {
    "title": "Coach de conduite — IA et CAN",
    "intro": "Un projet associant analyse sur Raspberry Pi et communication CAN.",
    "objective": "Évaluer la conduite et restituer un score accompagné de conseils.",
    "work": [
      "Analyse sur Raspberry Pi.",
      "Échanges CAN avec Arduino et MCP2515.",
      "Score et conseils de conduite."
    ],
    "tags": [
      "Raspberry Pi",
      "Arduino",
      "MCP2515",
      "CAN",
      "IA"
    ],
    "focus": "Relier l’analyse des données, leur transmission et les conseils de conduite."
  },
  "suspension": {
    "title": "Suspension automobile",
    "intro": "Un projet de conception mécanique sous CATIA V5.",
    "objective": "Concevoir et modéliser un système de suspension automobile.",
    "work": [
      "Conception et modélisation CAO d’un système de suspension sous CATIA V5."
    ],
    "tags": [
      "CATIA V5",
      "CAO",
      "Suspension automobile"
    ],
    "focus": "Représenter un système mécanique automobile par la conception assistée par ordinateur."
  }
};
const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
let previousFocus = null;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    previousFocus = button;
    dialogContent.replaceChildren();
    function add(tag, text) {
      const element = document.createElement(tag);
      element.textContent = text;
      dialogContent.append(element);
      return element;
    }
    add('h2', project.title).id = 'dialog-title';
    // La fiche détaillée réutilise la même photo que la carte du projet.
    const cardPhoto = button.closest('.project-card').querySelector('[data-portfolio-photo]');
    if (cardPhoto) {
      const detailPhoto = document.createElement('img');
      detailPhoto.className = 'dialog-project-photo';
      detailPhoto.alt = cardPhoto.alt;
      detailPhoto.hidden = true;
      detailPhoto.addEventListener('load', () => {
        detailPhoto.hidden = detailPhoto.naturalWidth === 0;
      });
      detailPhoto.addEventListener('error', () => { detailPhoto.hidden = true; });
      detailPhoto.src = cardPhoto.getAttribute('src');
      dialogContent.append(detailPhoto);
      if (detailPhoto.complete && detailPhoto.naturalWidth > 0) detailPhoto.hidden = false;
    }
    add('p', project.intro);
    add('h3', 'Objectif');
    add('p', project.objective);
    add('h3', project.workTitle || 'Travail réalisé');
    const list = document.createElement('ul');
    list.className = 'dash-list';
    project.work.forEach(text => { const item = document.createElement('li'); item.textContent = text; list.append(item); });
    dialogContent.append(list);
    add('h3', 'L’approche');
    add('p', project.focus);
    const tags = document.createElement('div');
    tags.className = 'tags';
    project.tags.forEach(text => { const tag = document.createElement('span'); tag.textContent = text; tags.append(tag); });
    dialogContent.append(tags);
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#close-dialog-bottom').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (previousFocus) previousFocus.focus();
});

document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('aroukyounes2@gmail.com');
    status.textContent = 'Adresse email copiée.';
  } catch {
    status.textContent = 'Vous pouvez copier cette adresse : aroukyounes2@gmail.com';
  }
});
