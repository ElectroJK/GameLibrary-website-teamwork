function setModalStyles(backgroundColor, textColor) {
  const modalContents = document.querySelectorAll('.modal-content');
  modalContents.forEach(function (element) {
    element.style.backgroundColor = backgroundColor;
    element.style.color = textColor;
    const modalBodies = element.querySelectorAll('.modal-body');
    modalBodies.forEach(function (bodyElement) {
      bodyElement.style.color = textColor;
    });
  });
}

function colorBlack() {
  document.body.style.background = "black";

  document.querySelectorAll('*').forEach(function (element) {
    element.style.color = "white";
  });

  setModalStyles("rgba(0, 0, 0, 0.9)", "white");

  document.querySelectorAll('.btn-close').forEach(function (element) {
    element.style.color = "white";
  });

  const togglePasswordButton = document.getElementById('toggle-password');
  if (togglePasswordButton) {
    togglePasswordButton.style.color = "white";
  }

  document.querySelectorAll('.card-body').forEach(function (cardBody) {
    cardBody.style.backgroundColor = '#333';
  });

  document.querySelectorAll('.form-label').forEach(function (label) {
    label.style.color = 'white';
  });
  document.querySelectorAll('.form-control').forEach(function (input) {
    input.style.backgroundColor = '#444';
    input.style.color = 'white';
  });

  document.documentElement.style.setProperty('--beige-light', '#363635');
  document.documentElement.style.setProperty('--brown-light', '#090303');
}

function colorWhite() {
  document.body.style.background = "white";
  document.querySelectorAll('h1:not(.banner h1), h2, h5, h3').forEach(function (element) {
    element.style.color = "black";
  });
  document.querySelectorAll('p:not(.banner p)').forEach(function (element) {
    element.style.color = "black";
  });
  setModalStyles("rgba(255, 255, 255, 0.9)", "black");
  document.querySelectorAll('.btn-close').forEach(function (element) {
    element.style.color = "black";
  });
  const modalHeaders = document.querySelectorAll('.modal-header');
  modalHeaders.forEach(function (header) {
    header.classList.add('white-background');
  });

  const togglePasswordButton = document.getElementById('toggle-password');
  if (togglePasswordButton) {
    togglePasswordButton.style.color = "black";
  }

  document.querySelectorAll('.card-body').forEach(function (cardBody) {
    cardBody.style.backgroundColor = '#f5f5f5';
  });

  document.querySelectorAll('.form-label').forEach(function (label) {
    label.style.color = 'black';
  });
  document.querySelectorAll('.form-control').forEach(function (input) {
    input.style.backgroundColor = 'white';
    input.style.color = 'black';
  });

  document.documentElement.style.setProperty('--beige-light', '#fdeddb');
  document.documentElement.style.setProperty('--brown-light', '#6b5341');
}

function colorGray() {
  document.body.style.background = "linear-gradient(to right, #686D76, #373A40)";
  document.querySelectorAll('h1:not(.banner h1), h2, h5, h3').forEach(function (element) {
    element.style.color = "#ffffff";
  });
  document.querySelectorAll('p:not(.banner p)').forEach(function (element) {
    element.style.color = "white";
  });
  setModalStyles("rgba(55, 58, 64, 0.9)", "white");
  document.querySelectorAll('.btn-close').forEach(function (element) {
    element.style.color = "white";
  });

  const togglePasswordButton = document.getElementById('toggle-password');
  if (togglePasswordButton) {
    togglePasswordButton.style.color = "white";
  }

  document.querySelectorAll('.card-body').forEach(function (cardBody) {
    cardBody.style.backgroundColor = '#494D55';
  });

  document.querySelectorAll('.form-label').forEach(function (label) {
    label.style.color = 'white';
  });
  document.querySelectorAll('.form-control').forEach(function (input) {
    input.style.backgroundColor = '#666';
    input.style.color = 'white';
  });

  document.documentElement.style.setProperty('--beige-light', '#e3c398');
  document.documentElement.style.setProperty('--brown-light', '#6C4E31');
}


function setTheme(theme) {
  const navbar = document.querySelector('#navbar4all .navbar');
  const logo = document.querySelector('.navbar-brand.logo');
  const navLinks = document.querySelectorAll('#navbar4all .nav-link');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  const loginButton = document.getElementById('login-btn');
  const logoutButton = document.getElementById('logout-btn');
  const containerCenter = document.querySelector('.containercenter');
  const continuePage = document.querySelector('.continuepage');
  const footer = document.querySelector('.footer-bg-custom');
  const textbox = document.querySelector('.textbox');
  const carouselbg = document.querySelector('.carousel-caption');
  const sections = document.querySelectorAll('section');

  const fixedBackgroundImage = 'url("https://i.pinimg.com/originals/20/0a/0a/200a0aec714b5d76123e05d367f9ec9e.jpg")';
  const fixedBackgroundElements = document.querySelectorAll('.fixed-bg');
  fixedBackgroundElements.forEach(element => {
    element.style.backgroundImage = fixedBackgroundImage;
  });

  const ignoreElements = document.querySelectorAll('.fab.fa-discord, .fab.fa-telegram');

  if (theme === 'dark') {
    colorBlack();
    sections.forEach(section => {
      section.style.backgroundColor = '#1f1f1f';
    });
    navbar.style.backgroundColor = '#222';
    navLinks.forEach(link => { link.style.color = 'white'; });
    logo.style.color = 'white';
    loginButton.style.color = 'white';
    logoutButton.style.color = 'white';

    dropdownMenus.forEach(menu => {
      menu.style.backgroundColor = '#1f1e1e';
      const dropdownItems = menu.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => { item.style.color = 'white'; });
    });

    containerCenter.style.backgroundColor = '#333';
    containerCenter.style.color = 'white';
    continuePage.style.backgroundColor = '#333';
    continuePage.style.color = 'white';
    footer.style.backgroundColor = '#222';


    document.querySelectorAll('.text-cust').forEach(function (element) {
      element.style.color = '';
    });
    ignoreElements.forEach(function (element) {
      element.style.color = '';
    });

    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    carouselCaptions.forEach(caption => {
      caption.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      caption.style.color = 'white';
    });

  } else if (theme === 'white') {
    colorWhite();
    sections.forEach(section => {
      section.style.backgroundColor = '#f9f9f9';
    });
    navbar.style.backgroundColor = '#ebebef';
    navLinks.forEach(link => { link.style.color = 'black'; });
    logo.style.color = 'black';
    loginButton.style.color = 'black';
    logoutButton.style.color = 'black';

    dropdownMenus.forEach(menu => {
      menu.style.backgroundColor = 'rgba(255,255,255,0.8)';
      const dropdownItems = menu.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => { item.style.color = 'black'; });
    });

    containerCenter.style.backgroundColor = '#f5f5f5';
    containerCenter.style.color = 'black';
    continuePage.style.backgroundColor = '#f5f5f5';
    continuePage.style.color = 'black';
    footer.style.backgroundColor = '#e9e9e9';
    textbox.style.backgroundColor = 'rgba(255,166,110,0.74)';
    textbox.style.color = 'black';


    document.querySelectorAll('.text-cust').forEach(function (element) {
      element.style.color = '';
    });
    ignoreElements.forEach(function (element) {
      element.style.color = '';
    });

    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    carouselCaptions.forEach(caption => {
      caption.style.backgroundColor = 'rgba(245,245,245,0.8)';
      caption.style.color = 'black';
    });

  } else {
    colorGray();
    sections.forEach(section => {
      if (section.id !== 'game-rating' && section.id !== 'user-reviews' && section.id !== 'top-10-games') {
        section.style.backgroundColor = '#494D55';
      }
    });
    navbar.style.backgroundColor = '#373A40';
    navLinks.forEach(link => { link.style.color = 'white'; });
    logo.style.color = 'white';
    dropdownMenus.forEach(menu => {
      menu.style.backgroundColor = '#373A40';
      const dropdownItems = menu.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => { item.style.color = 'white'; });
    });
    loginButton.style.color = 'white';
    logoutButton.style.color = 'white';
    containerCenter.style.backgroundColor = '#494D55';
    containerCenter.style.color = 'white';
    continuePage.style.backgroundColor = '#494D55';
    continuePage.style.color = 'white';
    footer.style.backgroundColor = '#373A40';


    document.querySelectorAll('.text-cust').forEach(function (element) {
      element.style.color = '';
    });
    ignoreElements.forEach(function (element) {
      element.style.color = '';
    });

    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    carouselCaptions.forEach(caption => {
      caption.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      caption.style.color = 'white';
    });
  }

  localStorage.setItem('theme', theme);
}


window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('gray');
  }
};
