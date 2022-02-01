do {
  let i = prompt('Скільки вам років?', 30)
  if (i < 12) {
    alert("Ви дитина.");
  } else if (i < 18) {
    alert("Ви підліток.");
  } else if (i < 60) {
    alert("Ви дорослий.");
  } else if (i <= 120) {
    alert("Ви пенсіонер.");
  } else if (i > 120) {
    alert("Можливо ви помилилися, будь ласка, введіть ваш вік ще раз.");
  } else if (i < 0) {
    alert("Можливо ви помилилися, будь ласка, введіть ваш вік ще раз.");
  } else {
    alert("Можливо ви помилилися, будь ласка, введіть ваш вік ще раз.");
  }
} while (confirm("Продовжити?"))

do {
  let n = prompt('Введіть число від 0 до 9')
  if (n === 0) {
    alert(")");
  } else if (n == 1) {
    alert("!");
  } else if (n == 2) {
    alert("@");
  } else if (n == 3) {
    alert("#");
  } else if (n == 4) {
    alert("$");
  } else if (n == 5) {
    alert("%");
  } else if (n == 6) {
    alert("^");
  } else if (n == 7) {
    alert("&");
  } else if (n == 8) {
    alert("*");
  } else if (n == 9) {
    alert("(");
  } else {
    alert("Можливо ви помилилися, будь ласка, введіть число від 0 до 9 ще раз.");
  }
} while (confirm("Продовжити?"))


// підрахунок кількості елементів, що лежать в заданому діапазоні

let i = true;
let j = 0;

while (i) {
  let n = prompt('Введи діапазон чисел в форматі 0 - 100 \n Числа тільки додатні', '');

  if (n === null) {
    i = false;
  } else {
    let arrn = n.split('-');
    console.log(arrn);

    if (arrn.length <= 1 || arrn.length > 2) {
      alert('Дані введені не вірно');
      console.log('Дані введені не вірно');
    } else {

      for (let i = 0; i < arrn.length; i++) {
        arrn[i] = arrn[i].trim();

        if (arrn[i].length === 0) {
          alert('Дані введені не вірно');
          console.log('Дані введені не вірно');
        }
      }

      if (+arrn[0] !== +arrn[0] || +arrn[1] !== +arrn[1]) {
        alert('Дані введені не вірно');
        console.log('Дані введені не вірно');
      } else if (+arrn[1] < arrn[0]) {
        alert('Діапазон чисел повинен бути від меншого до більшого');
      } else {
        for (let i = +arrn[0]; i <= +arrn[1]; i++) {
          j += i;
        }
        alert(`Сума чисел ${j}`);
        i = false;
      }
      console.log(arrn);
    }
  }
}



// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let n = true;

while (n) {
  let user1 = prompt('Введи перше число (числа тільки додатні)', '');
  let user2 = prompt('Введи друге число (числа тільки додатні)', '');

  if (user1 === null || user2 === null) {
    n = false;
  } else if (user1.trim().length === 0 || user2.trim().length === 0 || +user1 !== +user1 || +user2 !== +user2) {
    alert('Введи в форматі число');
  } else {
    if (+user1 === 0) {
      alert(`Найбільший спільний дільник ${user2}`);
    } else {
      while (+user2 !== 0) {
        if (+user1 > +user2) {
          user1 = +user1 - +user2;
        } else {
          user2 = +user2 - +user1;
        }
      }
      alert(`Найбільший спільний дільник ${user1}`);
    }
    n = false;
  }
}