// Function to set the modal styles based on provided background and text colors
function setModalStyles(backgroundColor, textColor) {
  const modalContents = document.querySelectorAll('.modal-content'); // Select all modal content elements
  modalContents.forEach(function (element) {
    element.style.backgroundColor = backgroundColor; // Set the background color
    element.style.color = textColor; // Set the text color
    const modalBodies = element.querySelectorAll('.modal-body'); // Select all modal body elements within the modal content
    modalBodies.forEach(function (bodyElement) {
      bodyElement.style.color = textColor; // Set the text color for each modal body
    });
  });
}

// Function to apply a black color theme
function colorBlack() {
  document.body.style.background = "black"; // Set the body background to black

  // Set text color to white for all elements
  document.querySelectorAll('*').forEach(function (element) {
    element.style.color = "white";
  });

  // Apply modal styles for black theme
  setModalStyles("rgba(0, 0, 0, 0.9)", "white");

  // Set close button text color to white
  document.querySelectorAll('.btn-close').forEach(function (element) {
    element.style.color = "white";
  });

  const togglePasswordButton = document.getElementById('toggle-password'); // Select toggle password button
  if (togglePasswordButton) {
    togglePasswordButton.style.color = "white"; // Set button color to white if it exists
  }

  // Change card body background color
  document.querySelectorAll('.card-body').forEach(function (cardBody) {
    cardBody.style.backgroundColor = '#333';
  });

  // Set form label color to white
  document.querySelectorAll('.form-label').forEach(function (label) {
    label.style.color = 'white';
  });
  
  // Change form control styles
  document.querySelectorAll('.form-control').forEach(function (input) {
    input.style.backgroundColor = '#444'; // Set background to dark gray
    input.style.color = 'white'; // Set text color to white
  });

  // Set custom CSS properties for beige and brown colors
  document.documentElement.style.setProperty('--beige-light', '#363635');
  document.documentElement.style.setProperty('--brown-light', '#090303');
}

// Function to apply a white color theme
function colorWhite() {
  document.body.style.background = "white"; // Set the body background to white

  // Set text color to black for headings
  document.querySelectorAll('h1:not(.banner h1), h2, h5, h3').forEach(function (element) {
    element.style.color = "black";
  });
  
  // Set paragraph text color to black
  document.querySelectorAll('p:not(.banner p)').forEach(function (element) {
    element.style.color = "black";
  });
  
  // Apply modal styles for white theme
  setModalStyles("rgba(255, 255, 255, 0.9)", "black");

  // Set close button text color to black
  document.querySelectorAll('.btn-close').forEach(function (element) {
    element.style.color = "black";
  });

  // Set modal header background to white
  const modalHeaders = document.querySelectorAll('.modal-header');
  modalHeaders.forEach(function (header) {
    header.classList.add('white-background'); // Add a class for white background
  });

  const togglePasswordButton = document.getElementById('toggle-password'); // Select toggle password button
  if (togglePasswordButton) {
    togglePasswordButton.style.color = "black"; // Set button color to black if it exists
  }

  // Change card body background color to light gray
  document.querySelectorAll('.card-body').forEach(function (cardBody) {
    cardBody.style.backgroundColor = '#f5f5f5';
  });

  // Set form label color to black
  document.querySelectorAll('.form-label').forEach(function (label) {
    label.style.color = 'black';
  });

  // Change form control styles
  document.querySelectorAll('.form-control').forEach(function (input) {
    input.style.backgroundColor = 'white'; // Set background to white
    input.style.color = 'black'; // Set text color to black
  });

  // Set custom CSS properties for beige and brown colors
  document.documentElement.style.setProperty('--beige-light', '#fdeddb');
  document.documentElement.style.setProperty('--brown-light', '#6b5341');
}

// Function to apply a gray color theme
function colorGray() {
  document.body.style.background = "linear-gradient(to right, #686D76, #373A40)"; // Set background gradient

  // Set text color to white for headings
  document.querySelectorAll('h1:not(.banner h1), h2, h5, h3').forEach(function (element) {
    element.style.color = "#ffffff";
  });
  
  // Set paragraph text color to white
  document.querySelectorAll('p:not(.banner p)').forEach(function (element) {
    element.style.color = "white";
  });

  // Apply modal styles for gray theme
  setModalStyles("rgba(55, 58, 64, 0.9)", "white");

  // Set close button text color to white
  document.querySelectorAll('.btn-close').forEach(function (element) {
    element.style.color = "white";
  });

  const togglePasswordButton = document.getElementById('toggle-password'); // Select toggle password button
  if (togglePasswordButton) {
    togglePasswordButton.style.color = "white"; // Set button color to white if it exists
  }

  // Change card body background color to a darker gray
  document.querySelectorAll('.card-body').forEach(function (cardBody) {
    cardBody.style.backgroundColor = '#494D55';
  });

  // Set form label color to white
  document.querySelectorAll('.form-label').forEach(function (label) {
    label.style.color = 'white';
  });

  // Change form control styles
  document.querySelectorAll('.form-control').forEach(function (input) {
    input.style.backgroundColor = '#666'; // Set background to dark gray
    input.style.color = 'white'; // Set text color to white
  });

  // Set custom CSS properties for beige and brown colors
  document.documentElement.style.setProperty('--beige-light', '#e3c398');
  document.documentElement.style.setProperty('--brown-light', '#6C4E31');
}

// Function to set the theme based on the selected option
function setTheme(theme) {
  const navbar = document.querySelector('#navbar4all .navbar'); // Select the navbar
  const logo = document.querySelector('.navbar-brand.logo'); // Select the logo
  const navLinks = document.querySelectorAll('#navbar4all .nav-link'); // Select navigation links
  const dropdownMenus = document.querySelectorAll('.dropdown-menu'); // Select dropdown menus
  const loginButton = document.getElementById('login-btn'); // Select login button
  const logoutButton = document.getElementById('logout-btn'); // Select logout button
  const containerCenter = document.querySelector('.containercenter'); // Select the center container
  const continuePage = document.querySelector('.continuepage'); // Select the continue page
  const footer = document.querySelector('.footer-bg-custom'); // Select the footer
  const textbox = document.querySelector('.textbox'); // Select the textbox
  const carouselbg = document.querySelector('.carousel-caption'); // Select carousel background
  const sections = document.querySelectorAll('section'); // Select all sections

  // Define a fixed background image for certain elements
  const fixedBackgroundImage = 'url("https://i.pinimg.com/originals/20/0a/0a/200a0aec714b5d76123e05d367f9ec9e.jpg")';
  const fixedBackgroundElements = document.querySelectorAll('.fixed-bg'); // Select elements with a fixed background
  fixedBackgroundElements.forEach(element => {
    element.style.backgroundImage = fixedBackgroundImage; // Set the background image
  });

  const ignoreElements = document.querySelectorAll('.fab.fa-discord, .fab.fa-telegram'); // Select ignored elements

  // Apply the selected theme
  if (theme === 'dark') {
    colorBlack(); // Apply black color theme
    sections.forEach(section => {
      section.style.backgroundColor = '#1f1f1f'; // Set section background color
    });
    navbar.style.backgroundColor = '#222'; // Set navbar background color
    navLinks.forEach(link => { link.style.color = 'white'; }); // Set nav link color
    logo.style.color = 'white'; // Set logo color
    loginButton.style.color = 'white'; // Set login button color
    logoutButton.style.color = 'white'; // Set logout button color

    // Style dropdown menus and their items
    dropdownMenus.forEach(menu => {
      menu.style.backgroundColor = '#1f1e1e';
      const dropdownItems = menu.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => { item.style.color = 'white'; });
    });

    containerCenter.style.backgroundColor = '#333'; // Set center container background color
    containerCenter.style.color = 'white'; // Set center container text color
    continuePage.style.backgroundColor = '#333'; // Set continue page background color
    continuePage.style.color = 'white'; // Set continue page text color
    footer.style.backgroundColor = '#222'; // Set footer background color
    footer.style.color = 'white'; // Set footer text color
    textbox.style.backgroundColor = '#4b4b4b'; // Set textbox background color
    textbox.style.color = 'white'; // Set textbox text color
    carouselbg.style.color = 'white'; // Set carousel caption color
    ignoreElements.forEach(element => {
      element.style.color = 'white'; // Set ignored element color
    });
  } else if (theme === 'light') {
    colorWhite(); // Apply white color theme
    sections.forEach(section => {
      section.style.backgroundColor = 'white'; // Set section background color
    });
    navbar.style.backgroundColor = 'white'; // Set navbar background color
    navLinks.forEach(link => { link.style.color = 'black'; }); // Set nav link color
    logo.style.color = 'black'; // Set logo color
    loginButton.style.color = 'black'; // Set login button color
    logoutButton.style.color = 'black'; // Set logout button color

    // Style dropdown menus and their items
    dropdownMenus.forEach(menu => {
      menu.style.backgroundColor = 'white';
      const dropdownItems = menu.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => { item.style.color = 'black'; });
    });

    containerCenter.style.backgroundColor = 'white'; // Set center container background color
    containerCenter.style.color = 'black'; // Set center container text color
    continuePage.style.backgroundColor = 'white'; // Set continue page background color
    continuePage.style.color = 'black'; // Set continue page text color
    footer.style.backgroundColor = 'white'; // Set footer background color
    footer.style.color = 'black'; // Set footer text color
    textbox.style.backgroundColor = 'white'; // Set textbox background color
    textbox.style.color = 'black'; // Set textbox text color
    carouselbg.style.color = 'black'; // Set carousel caption color
    ignoreElements.forEach(element => {
      element.style.color = 'black'; // Set ignored element color
    });
  } else if (theme === 'gray') {
    colorGray(); // Apply gray color theme
    sections.forEach(section => {
      section.style.backgroundColor = '#686D76'; // Set section background color
    });
    navbar.style.backgroundColor = '#373A40'; // Set navbar background color
    navLinks.forEach(link => { link.style.color = 'white'; }); // Set nav link color
    logo.style.color = 'white'; // Set logo color
    loginButton.style.color = 'white'; // Set login button color
    logoutButton.style.color = 'white'; // Set logout button color

    // Style dropdown menus and their items
    dropdownMenus.forEach(menu => {
      menu.style.backgroundColor = '#373A40';
      const dropdownItems = menu.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => { item.style.color = 'white'; });
    });

    containerCenter.style.backgroundColor = '#494D55'; // Set center container background color
    containerCenter.style.color = 'white'; // Set center container text color
    continuePage.style.backgroundColor = '#494D55'; // Set continue page background color
    continuePage.style.color = 'white'; // Set continue page text color
    footer.style.backgroundColor = '#373A40'; // Set footer background color
    footer.style.color = 'white'; // Set footer text color
    textbox.style.backgroundColor = '#494D55'; // Set textbox background color
    textbox.style.color = 'white'; // Set textbox text color
    carouselbg.style.color = 'white'; // Set carousel caption color
    ignoreElements.forEach(element => {
      element.style.color = 'white'; // Set ignored element color
    });
  }
}
