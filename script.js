function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openTab(tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Initialize by displaying the first tab
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tab-button').click();
});
