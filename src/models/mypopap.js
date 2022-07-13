

("use strict");
let allinput = document.querySelectorAll(".popup-avtorization__input");

let registration = document.getElementById("pop-regist");
let password = document.querySelector(".popup-pasword");

// let str = "аааааА23";
// console.log(/(?=.*[0-9])(?=.*[а-я])(?=.*[А-Я])[0-9а-яА-Я]{6,16}/g.test(str));
// !интересная конструкция нужно изучить ))) ?=

//! Для регистрациї
registration.addEventListener("click", function Check(event) {
  let name = document.querySelector(".popup-name");
  let surname = document.querySelector(".popup-surname");
  let tel = document.querySelector(".popup-telephone");
  let email = document.querySelector(".popup-email");
  // Для имени
  if (name.value.length < 3) {
    event.preventDefault();
    name.classList.add("active");
    name.nextElementSibling.classList.add("active");
  } else if (name.value.length >= 3) {
    name.classList.remove("active");
    name.nextElementSibling.classList.remove("active");
  }
  // Для фамаилии
  if (surname.value.length < 5) {
    event.preventDefault();
    surname.classList.add("active");
    surname.nextElementSibling.classList.add("active");
  } else if (surname.value.length >= 5) {
    surname.classList.remove("active");
    surname.nextElementSibling.classList.remove("active");
  }
  // Для телефона
  // Запрос re для

  if (tel.value.search(/[a-z]/g) != -1 || tel.value.search(/[а-я]/g) != -1) {
    event.preventDefault();
    tel.classList.add("active");
    tel.nextElementSibling.nextElementSibling.classList.add("active");
  } else if (tel.value.length != 13) {
    event.preventDefault();
    tel.classList.add("active");
    tel.nextElementSibling.classList.add("active");
  } else if (
    tel.value.length == 13 &&
    (tel.value.search(/[a-z]/g) == -1 || tel.value.search(/[а-я]/g != -1))
  ) {
    tel.classList.remove("active");
    tel.nextElementSibling.classList.remove("active");
    tel.nextElementSibling.nextElementSibling.classList.remove("active");
  }

  // Для емайла

  if (email.value.search(/\S*\@\w*\.\w*/gim) == -1) {
    event.preventDefault();
    email.classList.add("active");
    email.nextElementSibling.classList.add("active");
  } else {
    email.classList.remove("active");
    email.nextElementSibling.classList.remove("active");
  }
  // !Изменить проверку на пароль
  if (
    /(?=.*[0-9])(?=.*[а-я])(?=.*[А-Я])[0-9а-яА-Я]{6,16}/g.test(
      password.value
    ) == false ||
    password.value == name.value ||
    password.value == email.value
  ) {
    event.preventDefault();
    password.classList.add("active");
  } else {
    password.classList.remove("active");
  }
});

// Для того чтобы показать пароль
let eye = document.querySelector(".fa-eye");
eye.addEventListener("click", function EyeFunction(event) {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

// Для того чтобы не отображалось popap и закрывать попап
let linka = document.querySelectorAll(".header-top__a");
let regist = document.querySelectorAll(".popup-avtorization");
let closeX = document.querySelectorAll(".popup-avtorization__close");
let closearea = document.querySelectorAll(".popup-avtorization__area");
linka.forEach(function popap(linka) {
  linka.addEventListener("click", function (event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    document.querySelector(id).classList.add("active");
    //
  });
});

// ! для закрывания на нажатия по области
//! popap для  callback
//! для закрывания попапа на крестик

closearea.forEach((item) => {
  item.addEventListener("click", Register);
});

closeX.forEach((item) => {
  item.addEventListener("click", Register);
});

function Register() {
  regist.forEach((element) => {
    element.classList.remove("active");
  });
}

let regisrationCallback = document.querySelector(
  ".popup-avtorization__feedback-button"
);

regisrationCallback.addEventListener("click", function Callback(event) {
  let name = document.querySelector(".popupfeedback-name");
  let tel = document.querySelector(".popupfeedback-telephone");
  let flag = 0;
  // Для имени
  if (name.value.length < 3) {
    event.preventDefault();
    flag++;
    name.classList.add("active");
    name.nextElementSibling.classList.add("active");
  } else if (name.value.length >= 3) {
    name.classList.remove("active");
    name.nextElementSibling.classList.remove("active");
  }
  if (tel.value.search(/[a-z]/g) != -1 || tel.value.search(/[а-я]/g) != -1) {
    event.preventDefault();
    flag++;
    tel.classList.add("active");
    tel.nextElementSibling.classList.add("active");
  } else if (tel.value.length != 10) {
    event.preventDefault();
    flag++;
    tel.classList.add("active");
    tel.nextElementSibling.classList.add("active");
  } else if (
    tel.value.length == 10 &&
    (tel.value.search(/[a-z]/g) == -1 || tel.value.search(/[а-я]/g != -1))
  ) {
    tel.classList.remove("active");
    tel.nextElementSibling.classList.remove("active");
  }
  if (flag == 0) {
    Register();
    document.getElementById("feedback2").classList.add("active");
  }
});

//! Переход на другой попап
// ! Регистрация и авторизация
let linkaa = document.querySelectorAll(".popup-avtorization__registration");

linkaa.forEach((item) => {
  item.addEventListener("click", function linkAA(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    Register();
    document.querySelector(id).classList.add("active");
  });
});
