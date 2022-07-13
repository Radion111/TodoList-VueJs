export default class Post {
  constructor(title) {
    this.title = title;
    this.date = new Date();
  }
  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
    });
  }
}
//! console.log("Здесь находится метод пост и весь таймер");

//?Таймер

// // перемение
// let minutes = document.querySelector(".timer__minutes");
// let second = document.querySelector(".timer__second");
// let minisecond = document.querySelector(".timer__minisecond");
// // Даные
// let minutesValue = +minutes.innerHTML;
// let secondValue = +second.innerHTML;
// let minisecondValue = +minisecond.innerHTML;
// // Тут функция
// let Mytimer = setInterval(function Timer() {
//   if (minisecondValue == 0 && secondValue == 0 && minutesValue == 0) {
//     clearTimeout(Mytimer);
//     return true;
//   }
//   if (minisecondValue == 0) {
//     secondValue--;
//     minisecondValue = 99;
//   }
//   if (secondValue == 0) {
//     secondValue = 0;
//   }
//   minisecondValue--;
//   //  Для того чтобы ставить ноль при значении меньше 10
//   if (minisecondValue < 10) {
//     minisecond.innerHTML = "0" + minisecondValue;
//   } else {
//     minisecond.innerHTML = minisecondValue;
//   }
//   if (secondValue < 10) {
//     second.innerHTML = "0" + secondValue;
//   } else {
//     second.innerHTML = secondValue;
//   }
//   if (minutesValue < 10) {
//     minutes.innerHTML = "0" + minutesValue;
//   } else {
//     minutes.innerHTML = minutesValue;
//   }
// }, 10.1);

// //? timer по дате
// // ! Баг при изменении секунд не меняютья минути и часи
// // ! Нужно исправить
// // Переменая настоящего времени
// let now = new Date();

// //!new Date(year, month, date, hours, minutes, seconds, ms)
// //! Если  на дате указано меньше 30 минут с даного времени то таймер выключается

// //! Дата которую нужно менять для нормальной роботы таймера
// let after24 = new Date(2022, 1, 23, 22, 20, 0);

// // Берем время  и вставляем в переменые

// // Используем добавления каждой секунды по одному разу
// let dayafter = after24.getDate();
// let day = now.getDate();
// let hourseafter = after24.getHours();
// let hourse = now.getHours();
// let minuteafter = after24.getMinutes();
// let minut = now.getMinutes();
// let secondafter = after24.getSeconds();
// let ssecond = now.getSeconds();

// // Проверка времени
// console.log(after24 + " " + now);

// let timerr = setInterval((event) => {
//   // перемение для обновления

//   // Проверка на окончания даты

//   if (
//     dayafter - day <= 0 &&
//     hourseafter - hourse <= 0 &&
//     minuteafter - minut < 30
//   ) {
//     document.querySelector(".timer__day-data").innerHTML = 0;
//     document.querySelector(".timer__hour-data").innerHTML = 0;
//     document.querySelector(".timer__minutes-data").innerHTML = 0;
//     document.querySelector(".timer__second-data").innerHTML = 0;
//     clearTimeout(timerr);
//     return true;
//   }

//   // Прошло секунд
//   ssecond++;

//   if (secondafter - ssecond < 0) {
//     secondafter = secondafter + 60;
//     minuteafter--;
//     document.querySelector(".timer__second-data").innerHTML =
//       secondafter - ssecond;
//   } else {
//     document.querySelector(".timer__second-data").innerHTML =
//       secondafter - ssecond;
//   }

//   if (minuteafter - minut < 0) {
//     hourseafter--;
//     minuteafter = minuteafter + 60;
//     document.querySelector(".timer__minutes-data").innerHTML =
//       minuteafter - minut;
//   } else {
//     document.querySelector(".timer__minutes-data").innerHTML =
//       minuteafter - minut;
//   }
//   //  прошло время
//   if (hourseafter - hourse < 0) {
//     dayafter--;
//     hourseafter = hourseafter + 24;
//     document.querySelector(".timer__hour-data").innerHTML =
//       hourseafter - hourse;
//   } else {
//     document.querySelector(".timer__hour-data").innerHTML =
//       hourseafter - hourse;
//   }
//   // прошло дней
//   document.querySelector(".timer__day-data").innerHTML = dayafter - day;
// }, 1000);
