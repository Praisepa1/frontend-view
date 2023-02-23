// const iconMenu = document.querySelector(".menu");
// const closeMenu = document.querySelector(".close");
// const menu = document.querySelector("ul");
// const menuItem = document.querySelectorAll("ul li a");

// iconMenu.addEventListener("click", () => {
//   iconMenu.classList.toggle("hide");
//   closeMenu.classList.toggle("hide");
//   menu.classList.toggle("hide");
// });

// closeMenu.addEventListener("click", () => {
//   iconMenu.classList.toggle("hide");
//   closeMenu.classList.toggle("hide");
//   menu.classList.toggle("hide");
// });

// for (let i = 0; i < menuItem.length; i++) {
//   menuItem[i].addEventListener("click", () => {
//     iconMenu.classList.toggle("hide");
//     closeMenu.classList.toggle("hide");
//     menu.classList.toggle("hide");
//   });
// }


const menu = document.querySelector("ul");
const iconMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const menuitem = document.querySelectorAll("ul li a");

menu.addEventListener("click", (event) => {
  if (event.target === iconMenu || event.target === closeMenu || event.target.closest("ul li a")) {
    menu.classList.toggle("hide");
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
  }
});
