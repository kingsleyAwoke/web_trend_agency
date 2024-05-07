function menuToggle() {
  const menu = document.querySelector(".nav-links");
  const toggleMenu = document.querySelector(".toggle-menu");
  const checkbox = document.querySelector("#checkbox");
  const menuItems = document.querySelectorAll(".nav-links .nav-item");

  function closeMenu() {
    menu.style.height = "0"; // Hide the menu
    checkbox.checked = false; // Uncheck the checkbox
  }

  toggleMenu.addEventListener("click", function (event) {
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      menu.style.height = "300px";
    } else {
      closeMenu();
    }

    event.stopPropagation();
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      closeMenu();
    });
  });

  document.body.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && event.target !== checkbox) {
      closeMenu();
    }
  });
}

menuToggle();

// console.log(menuItems);
