// function updateTime() {
//     const now = new Date(); // Получаем текущее время
//     const hours = String(now.getHours()).padStart(2, '0'); // Получаем часы
//     const minutes = String(now.getMinutes()).padStart(2, '0'); // Получаем минуты
//     const seconds = String(now.getSeconds()).padStart(2, '0'); // Получаем секунды

//     // Форматируем время
//     const formattedTime = `${hours}:${minutes}:${seconds}`;
//     document.getElementById("currentTime").innerText = formattedTime; // Обновляем текст на странице
// }

// updateTime(); // Вызываем функцию сразу, чтобы сразу показать текущее время
// setInterval(updateTime, 1000); // Обновляем время каждую секунду

// const tablo = document.querySelector(".calculator__input")
// const buttons = document.querySelector(".calculator-button")

// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// const operators = ["%", ",", "+", "-", "/", "x","-/+"];
// const result = ["="]
// const clear = ["AC"]

// let num1 = null
// let num2 = null

// buttons.addEventListener("click", (act) =>{ //по клику слушаем событие (действие)

// })

// const tablo = document.querySelector(".calculator__input");
// const buttons = document.querySelector(".calculator-button");

// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// const operators = ["%", ",", "+", "-", "/", "*", "-/+"];
// const result = "=";
// const clear = "AC"; //очистка (reset) текущего ввода или всей операции

// let num1 = null;
// let num2 = null;
// let currentOperator = null; //текущий оператор
// let shouldReset = false; // сброс чисел

// buttons.addEventListener("click", (event) => { //слушаем событие
//   const target = event.target;

//   // кнопка очистки
//   if (clear.includes(target.innerText)) { //цикл: если константа очистки содержит в себе полученный текст, то
//     tablo.value = ""; // очистка табло
//     num1 = null;
//     num2 = null;
//     currentOperator = null;
//     return; // возврат к началу
//   }

//   // кнопка число
//   if (numbers.includes(target.innerText)) { //цикл: если константа числа содержит в себе полученный текст, то
//     if (tablo.value === "" || shouldReset) { //цикл: если значение табло пустое или сброшенно, то
//       tablo.value = target.innerText; // новое число
//     } else { // в ином случае
//       tablo.value += target.innerText; // добавляем новое значение в табло
//     }
//     shouldReset = false; // сброс результата = ошибка, возврат к началу
//     return;
//   }

//   // кнопка результата
//   if (result.includes(target.innerText)) { //цикл: если константа результата содержит в себе полученный текст, то
//     if (num1 !== null && currentOperator !== null) { //цикл: если число_1 не равно нулу и оператор не равен нулю, то выполняется
//       num2 = parseFloat(tablo.value); // число_2 пишется следующим (всплытие)
//       const finalResult = calculateResult(num1, num2, currentOperator);
//       tablo.value = finalResult; // отображаем результат
//       num1 = finalResult; // сохраняем результат для дальнейших расчетов
//       num2 = null; // сбрасываем второе число
//       currentOperator = null; // сбрасываем оператор
//       shouldReset = true; // устанавливаем флаг для сброса
//     }
//     return;
//   }

//   // Если нажата одна из кнопок операторов
//   if (operators.includes(target.innerText)) {
//     if (num1 === null) {
//       num1 = parseFloat(tablo.value); // сохраняем первое число
//     } else if (currentOperator !== null) {
//       num2 = parseFloat(tablo.value); // сохраняем второе число
//       const resultValue = calculateResult(num1, num2, currentOperator);
//       tablo.value = resultValue; // отображаем промежуточный результат
//       num1 = resultValue; // обновляем первое число
//       num2 = null; // сбрасываем второе число
//     }
//     currentOperator = target.innerText; // сохраняем оператор
//     shouldReset = true; // устанавливаем флаг для сброса
//   }
// });

// // Функция для вычисления результата
// function calculateResult(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       if (num2 === 0) {
//         console.log("Error: Деление на 0 невозможно!"); // обработка деления на ноль
//         return num1; // возвращаем первое число
//       }
//       return num1 / num2;
//     case "%":
//       return num1 % num2; // остаток от деления
//     default:
//       return 0; // возвращаем 0 для неработающих операторов
//   }
// }

const tablo = document.querySelector(".calculator__input");
const buttons = document.querySelector(".calculator-button");

const button = document.createElement('button')

console.log(buttons);

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["%", ",", "+", "-", "/", "*", "-/+"];
const result = "=";
const clear = "AC"; //очистка (reset) текущего ввода или всей операции

let num1 = null;
let num2 = null;
// let currentOperator = null; //текущий оператор
// let shouldReset = false; // сброс чисел
let operator = null;



button.addEventListener("click", (event) => {
  //слушаем событие
  let contex = event.target.innerText;
  if (numbers.includes(contex) && operator == "") {
    if (tablo.value == 0) tablo.value = contex;
    else tablo.value += contex;
    num1 = +tablo.value;
  }
  if (numbers.includes(contex) && operator != "") {
    if (tablo.value == 0) tablo.value = contex;
    else tablo.value += contex;
    num2 = +tablo.value;
  }
  if (num1 != 0 && operator != "") {
    operator = contex;
    tablo.value = 0;
  }
  if (num1 != 0 && num2 != 0 && operator != "") {
    tablo.value = calculateResult(num1, num2, operator);
    num1 = +tablo.value;
    num2 = 0;
  }
  console.log("num1: ${num1}");
  console.log("num2: ${num2}");
  console.log("operator: ${operator}");
});

function calculateResult(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        console.log("Error: Деление на 0 невозможно!"); //  деление на ноль
        return num1; // возврат к вводу первого числа
      }
      return num1 / num2;
  }
}

// function calculateResult(num1, num2, operator) {
//     switch (operator) {
//       case "+":
//         return +num1 + +num2;
//       case "-":
//         return +num1 - +num2;
//       case "*":
//         return +num1 * +num2;
//       case "/":
//         if (num2 === 0) {
//           console.log("Error: Деление на 0 невозможно!"); //  деление на ноль
//           return num1; // возврат к вводу первого числа
//         }
//         return +num1 / +num2;
//     }
//   }
