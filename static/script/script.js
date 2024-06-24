function app() {
  //:::::::::::: MENU ITEMS DROPDOWN ::::::::::::
  const menu = document.querySelector(".nav-links");
  const toggleMenu = document.querySelector(".toggle-menu");
  const checkbox = document.querySelector("#checkbox");
  const menuItems = document.querySelectorAll(".nav-links .nav-item");

  function closeMenu() {
    menu.style.height = "0";
    checkbox.checked = false;
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

  //:::::::::::: FAQ ITEMS DROPDOWN ::::::::::::
  // document.querySelectorAll(".faq-checkbox").forEach((checkbox) => {
  //   checkbox.addEventListener("change", function () {
  //     if (this.checked) {
  //       document.querySelectorAll(".faq-checkbox").forEach((otherCheckbox) => {
  //         if (otherCheckbox !== this) {
  //           otherCheckbox.checked = false;
  //         }
  //       });
  //     }
  //   });
  // });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq-checkbox").forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          document
            .querySelectorAll(".faq-checkbox")
            .forEach((otherCheckbox) => {
              if (otherCheckbox !== this) {
                otherCheckbox.checked = false;
              }
            });
        }
      });
    });
  });
}

app();

// // console.log(menuItems);
