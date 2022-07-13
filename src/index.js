// import Post from "./models/timer";

// import "./style/style.scss";
// ! с верху лутше указивать css
// import "./style/style.css";
// ? а снизу перепроцесори

import "./style/style.scss";

import "./babel.js";

// import Vue from "vue";

import { createApp } from "vue";

import App from "./App.vue";

createApp(App).mount("#app");

//! пока остановимся с importom файлов css

// console.log(stringg.search(/[0-9]/g));

// if (stringg.search(/[0-9]/i) != -1) {
//   console.log("Виполнилось");
// }
// function emailTest(input) {
// return !/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,8})+$/.test(input);
// }

// allinput.forEach((item) => {
//   item.addEventListener("click", function input(event) {
//     event.preventDefault();
//     let id = event.target.getAttribute("type");
//     if (id == "text") {
//       if (item.value.length == 0 || item.value.length < 4) {
//         item.classList.add("active");
//         item.nextElementSibling.classList.add("active");
//       }
//       item.addEventListener("change", () => {
//         if (item.value.length >= 4) {
//           item.classList.remove("active");
//           item.nextElementSibling.classList.remove("active");
//         }
//       });
// item.addEventListener("change", function () {
//   if (item.value.length < 4) {
//     item.classList.add("active");
//     item.nextElementSibling.classList.add("active");
//   } else {
//     item.classList.remove("active");
//     item.nextElementSibling.classList.remove("active");
//   }
// });
//     }
//   });
// });

/*
let headerTop = document.querySelectorAll(".header-top__a");

headerTop.forEach((item) => {
  item.addEventListener("click", function Scroll(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    document.querySelector(id).ScrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});

// burger menu

let burgermenu = document.querySelector(".burger-menu");
burgermenu.addEventListener("click", function burgerMenu(event) {
  event.preventDefault();
  burgermenu.classList.toggle("active");
  document.querySelector(".content").classList.toggle("active");
  document.getElementsByTagName("body")[0].classList.toggle(".lock");
});
// Для картинок ibg method  js native

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

// Для табов СТАРАЯ ВЕРСИЯ

let populartabs = document.querySelectorAll(".popularproduct__tabsa");
let tabsconten = document.querySelectorAll(".popularproduct__tabscontent");
populartabs.forEach(function tabs(item) {
  item.addEventListener("click", function popularTabs(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    populartabs.forEach((item2) => {
      item2.classList.remove("active");
    });
    tabsconten.forEach((item2) => {
      item2.classList.remove("active");
    });
    document.querySelector(id).classList.add("active");
    item.classList.toggle("active");
  });
  document.querySelector(".popularproduct__tabsa").click();
});



*/
