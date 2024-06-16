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
function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab-content");
  var buttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    buttons[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}


