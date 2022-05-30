// var y = 3;
// const x = document.querySelector(`.tabs__content[data-tab="${y}"]`)
// console.log(x);

// function setUpTabs() {
//     document.querySelectorAll(".boton-navegacion").forEach(button => {
//         button.addEventListener("click", () => {
//             const sideBar = button.parentElement;
//             const tabsContainer = document.querySelector(".tabs_sidebar");
//             const tabNumber = button.dataset.forTab;
//             const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

//             sideBar.querySelectorAll(".boton-navegacion").forEach(button => {
//                 button.classList.remove("boton-navegacion--active")
//             });

//             tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
//                 tab.classList.remove("tabs__content--active")
//             });
            
//             button.classList.add("boton-navegacion--active");
//             tabToActivate.classList.add("tabs__content--active");

//             console.log(sideBar);
//             console.log(tabsContainer);
//             console.log(tabNumber);
//             console.log(tabToActivate);
//         })
//     })
// }

// document.addEventListener("DOMContentLoaded", () => {
//     setUpTabs();

//     document.querySelectorAll(".principal").forEach(tabsContainer => {
//         tabsContainer.querySelector(".navegar-niveles .boton-navegacion").click();
//     });
// });


