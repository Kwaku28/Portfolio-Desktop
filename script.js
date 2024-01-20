const vectors = document.querySelector('.vector');
const navLink = document.querySelector('.links');

vectors.addEventListener('click', () => {
  vectors.classList.toggle('active');
  navLink.classList.toggle('active');
});

document.querySelectorAll('ul.links > li').forEach((n) => n.addEventListener('click', () => {
  vectors.classList.remove('active');
  navLink.classList.remove('active');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
});

const hiddenElement = document.querySelectorAll('.card');
hiddenElement.forEach((element) => {
  observer.observe(element);
});

const project = [
  {
    id: '1',
    featuredImage: 'Images/Global-conference.PNG',
    name: 'Global Conference',
    liveLink: 'https://mike47ip.github.io/JavascriptCapstone/index.html',
    sourceLink: 'https://github.com/Mike47ip/JavascriptCapstone',
    technologies: [
      'Javascript',
      'Bootstrap',
      'HTML5',
      'CSS3',
    ],
    description:
      'World Architectural Summit will build on the breakout success of the inaugural edition with a captivating and insightful agenda that will be discussed and debated by some of the regions best and brightest minds. The Summit will provide a platform for construction industry stakeholders to discuss a multitude of topics including future city requirements, net zero building design, resilient design strategies, future transport infrastructure, nurturing future talent and much more',
  },

  {
    id: '2',
    featuredImage: 'Images/Book-bike.PNG',
    name: 'Book a motorbike',
    liveLink: 'https://motorcycle-lksr.onrender.com/',
    sourceLink: 'https://github.com/Mike47ip/book-an-appointment',
    technologies: [
      'React',
      'RoR',
      'Puma',
      'HTML5',
      'CSS3',
    ],
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
  },

  {
    id: '3',
    featuredImage: 'Images/Hotel2.PNG',
    name: 'Bookstore',
    liveLink: 'https://tailwind-rv-5phv.vercel.app/',
    sourceLink: 'https://github.com/Mike47ip/tailwind-RV',
    technologies: [
      'React',
      'Javascript',
      'Bootstrap',
      'Jest',
      'Redux',
    ],
    description:
      'This is an open-source app that categorizes books based on the genre. The app gives the option to add a new book and keep track of your reading progress.',
  },

  {
    id: '4',
    featuredImage: 'Images/Todo.PNG',
    name: 'Space Travelers Hub',
    liveLink: 'https://mike47ip.github.io/To_Do_List/dist/',
    sourceLink: 'https://github.com/Mike47ip/To_Do_List?tab=readme-ov-file',
    technologies: [
      'React',
      'CSS3',
      'Javascript',
      'Redux',
      'Jest',
    ],
    description:
      'This web application is for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions. It also gives the option to cancel reservations and leave the space mission anytime. The MyProfile section provides an overview of your booked rockets and joined missions.',
  },

  {
    id: '5',
    featuredImage: 'Images/Leader.PNG',
    name: 'Grow Rich (Budgeting App)',
    liveLink: 'https://mike47ip.github.io/Leaderboard/dist/',
    sourceLink: 'https://github.com/Mike47ip/Leaderboard?tab=readme-ov-file',
    technologies: [
      'Ruby on Rails',
      'Ruby',
      'Devise',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
    description:
      'Grow Rich is a mobile web application where you can manage your budget: you have a list of expenses associated with a budget, so that you can see how much money you spent and on what. You have the flexibility to add budget and expenses as well.',
  },

  {
    id: '6',
    featuredImage: 'Images/Bookshop.PNG',
    name: 'Resort Booking',
    liveLink: 'https://bookstore-7igy.onrender.com/',
    sourceLink: 'https://github.com/Mike47ip/bookstore-initialize',
    technologies: [
      'Rails',
      'Ruby',
      'JWT',
      'HTML5',
      'CSS3',
      'Devise',
    ],
    description:
      'Resort Booking is a web application that offers a diverse selection of luxurious accommodations and amenities. Find your slice of paradise, effortlessly plan your trip, and make memories that last a lifetime with ResortHub.',
  },
];

const popupWindow = document.querySelector('.modal');
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
  if (popupWindow == null) return;
  popupWindow.classList.add('active');
  overlay.classList.add('active');
}

function closeModel(popupWindow) {
  if (popupWindow == null) return;
  popupWindow.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
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
    });
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

const progressBar = document.getElementById('progressbar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
  const progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.height = `${progress}%`;
};
