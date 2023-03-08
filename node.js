const vectors = document.querySelector(".vector");
const navLink = document.querySelector(".links");

vectors.addEventListener("click", () => {
  vectors.classList.toggle("active");
  navLink.classList.toggle("active");
});

document.querySelectorAll("ul.links > li").forEach((n) =>
  n.addEventListener("click", () => {
    vectors.classList.remove("active");
    navLink.classList.remove("active");
  })
);

const project = [
  {
    id: '1',
    featuredImage: 'Images/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components',
    liveLink: 'https://kwaku28.github.io/Portfolio-Desktop/',
    sourceLink: 'https://github.com/Kwaku28/Portfolio-Desktop',
    technologies: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },

  {
    id: '2',
    featuredImage: 'Images/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components',
    liveLink: 'https://kwaku28.github.io/Portfolio-Desktop/',
    sourceLink: 'https://github.com/Kwaku28/Portfolio-Desktop',
    technologies: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },

  {
    id: '3',
    featuredImage: 'Images/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components',
    liveLink: 'https://kwaku28.github.io/Portfolio-Desktop/',
    sourceLink: 'https://github.com/Kwaku28/Portfolio-Desktop',
    technologies: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },

  {
    id: '4',
    featuredImage: 'Images/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components',
    liveLink: 'https://kwaku28.github.io/Portfolio-Desktop/',
    sourceLink: 'https://github.com/Kwaku28/Portfolio-Desktop',
    technologies: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },

  {
    id: '5',
    featuredImage: 'Images/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components',
    liveLink: 'https://kwaku28.github.io/Portfolio-Desktop/',
    sourceLink: 'https://github.com/Kwaku28/Portfolio-Desktop',
    technologies: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },

  {
    id: '6',
    featuredImage: './Images/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components',
    liveLink: 'https://kwaku28.github.io/Portfolio-Desktop/',
    sourceLink: 'https://github.com/Kwaku28/Portfolio-Desktop',
    technologies: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
];

const popupWindow = document.querySelector('.modal')
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const modalTitle = document.querySelector('#modal-title');
const modalText = document.querySelector('#modal-text');
const modalImage = document.querySelector('#modal-image');
const modalServer = document.querySelector('#modal-server');
const live = document.querySelector('#live-link');
const source = document.querySelector('#source-link');
const overlay = document.getElementById('overlay');

function openModel(popupWindow) {
  if (modal == null) return;
  popupWindow.classList.add('active');
  overlay.classList.add('active');
}

function closeModel(popupWindow) {
  if (modal == null) return;
  popupWindow.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const model = document.querySelector(button.dataset.modelTarget);
    openModel(popupWindow);

    project.forEach((popup) => {
      if (popup.id === button.id) {
        modalImage.src = popup.featuredImage;
        modalTitle.textContent = popup.name;
        modalServer.textContent = '';
        popup.technologies.forEach((tech) => {
          const techlist = document.createElement('li');
          techlist.innerText = tech;
          modalServer.appendChild(techlist);
        });
        modalText.innerText = popup.description;
        live.href = popup.liveLink;
        source.href = popup.sourceLink;
      }
    })
  });
});

overlay.addEventListener('click', () => {
  const models = document.querySelectorAll('.modal.active');
  models.forEach((popupWindow) => {
    closeModel(popupWindow);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const model = button.closest('.modal');
    closeModel(popupWindow);
  });
});

const formValidation = document.querySelector('form');
const error = document.querySelector('.display-error');

const isUpperCaseEmail = (email) => {
  if (/[A-Z]/.test(email)) {
    return true;
  }
  return false;
};

formValidation.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const validEmail = !isUpperCaseEmail(email);

  if (validEmail) {
    error.innerHTML = '';
    formValidation.submit();
  } else {
    error.style.color = 'red';
    error.innerHTML = 'Please Email should be in lowercase';
  }
});