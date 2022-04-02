//=====================
console.log('Онлайн module 1');
/* let value = 100;
value += 50;
console.log(value); //-150 */
// ==============================

// * Округление чисел

// let value = 27.3;
// console.log(Math.floor(value)); // просто обрезка до точки
// console.log(Math.ceil(value)); // всегда в большую сторону
// console.log(Math.round(value)); // по математике

// =========================

// *шаблонная строка
/* 

//  *преобразование запятой в точку
*/
let weight = '86,67'; // 8->0 || 8->1 || ,->2 || 3->3 || 7->4
let height = '1.66';

// *1) найти порядк номер запятой (indexOf)
// const index = weight.indexOf(','); // опеределяем индекс запятой
// console.log(index);
// *2) отделить число до запятой (slice)
// const weightWithoutComma = weight.slice(0, index);// получили цифры до /,/
// console.log(weightWithoutComma);
//  *или
// отделяем целую часть
// let valueBeforeComma = (Number.parseInt(weight));
// // преобразуем в строку и определяем к-во символов
// let index = (String(valueBeforeComma)).length;
// console.log(index); // -> 2

// *3)отделить после запятой (slice)
// const weightAfterComma = weight.slice(index + 1); // -> цифры после ',' с первого знака
// *или
// const valueAfterComma =();

// console.log(weightAfterComma);
// *4) получить дробь (template string)
// const newWeight = Number(`${weightWithoutComma}.${weightAfterComma}`);// собираем дробь
// console.log(newWeight);
// 5) пльзуем
// const bmi = newWeight / Math.pow(height, 2);
// console.log(bmi);

// var fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
//*                0          1          2         3        4
// var citrus = fruits.slice(1, 3);// ->[Апельсин, Лимон]
// console.log(citrus);

// ===============================
// let weight = ('88,65');

// * часть 2
// =============================
// ## Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений?

// ```js
// console.log(5 > 4);

// console.log(10 >= '7');
// 1) конвертує в число строку "7"
// 1.1) Number("7") => 7
// 2) порівнює числа між собою

// console.log("2" > "12");

// const a = "1";
// const b = 2;

// console.log("Bob" > "Alice");
// console.log('B' > 'A');
// console.log("A" > "B");

// "Bob".charCodeAt(1); // 50
// "Blice".charCodeAt(1); // 49

// console.log(50 > 49);

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true); // 1 == 1

// console.log(1 === true);

// console.log('0' == false); // 0 == 0

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// ```

// ## Example 8 - Логические операторы

// Каким будет результат выражений?

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```

// ## Example 10 - Опертор % и методы строк

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```

// # Модуль 1. Занятие 2. Ветвления. Циклы

// ## Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// `"Какое официальное название JavaScript?"`. Если пользователь вводит
// `ECMAScript`, то показывай alert со строкой `"Верно!"`, в противном случае -
// `"Не знаете? ECMAScript!"`

// 1) Запитати в користувача дані
// 2) Зробити перевірку на відповідь

// const answer = prompt("Какое официальное название JavaScript?").toLowerCase();
// const rightAnswer = "ecmascript";

// if (answer === rightAnswer) {
//   alert("Верно!");
// } else {
//   alert(`Не знаете? ${rightAnswer}!`);
// }

// ## Example 2 - Отображение времени (if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки
// формата `"14 ч. 26 мин."`. Если значение переменной `minutes` равно `0`, то
// выводи строку `"14 ч."`, без минут.

// ```js
// const hours = 14;
// const minutes = 0;
// let timeString;

// if (minutes === 0) {
//   timeString = `${hours} год.`;
// } else {
//   timeString = `${hours} год. ${minutes} хв.`;
// }

// console.log(timeString);
// ```

// ## Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку `"Это положительное число"`,
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи
// в консоль строку `"Это ноль"`. Если передали отрицательное число, в консоли
// должна быть строка `"Это отрицательное число"`.

// ```js
// const userInput = prompt("Введите число"); // null
// ```

// if (userInput === 0) {
//   console.log("Это ноль");
// } else if (userInput > 0) {
//   console.log("Это положительное число");
// } else {
//   console.log("Это отрицательное число");
// }
// if (userInput === null) {
//   console.log("Вы ничего не ввели");
// } else if (Number(userInput) === 0) { // '0' === 0
//   console.log("Это ноль");
// } else if (userInput > 0) {
//   console.log("Это положительное число");
// } else if (userInput < 0) {
//   console.log("Это отрицательное число");
// } else {
//   console.log("Введите число");
// }

// ## Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных `a` и `b`. Если оба
// значения больше `100`, то выведи в консоль максимальное из них. В противном
// случае в консоли должна быть сумма значения `b` и числа 512.

// ```js
// const a = 120;
// const b = 18;
// ```

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   if (a > b) {
//     // 120 > 180
//     console.log(a);
//   } else {
//     console.log(b); // 180
//   }
// } else {
//   console.log(b + 512);
// }

// ## Example 8 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
// значения переменной `hours`.

// Если значение переменной `hours`:

// - меньше `17`, выводи строку `"Pending"`
// - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
// - больше `24` , выводи строку `"Overdue"`

// ```js
// const hours = 10;
// ```

// ## Example 9 - Дедлайн сдачи проекта (if...else)

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
// конструкцию `if...else`.

// - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
// - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
// - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
// - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`

// ```js
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// ```

// ## Example 10 - Дедлайн сдачи проекта (switch)

// Выполни рефакторинг кода задачи номер 5 используя `switch`.

// ```js
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }
// ```

// ## Example 11 - Цикл for

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от `min`
// до `max`, но только если число кратное `5`.

// ```js
// const max = 100;
// const min = 20;
// ```

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 !== 0) {
//     continue;
//   }
//   console.log(i);
// }
// let total = 0;
// for (let i = 0; i <= 1000; i += 1) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     total += i;
//   }
// }
// console.log(total);
// ## Example 12 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`

// const login = prompt('Enter login').toLowerCase();

// if (
//   login === 'адмін' ||
//   login === 'admin' ||
//   login === 'адміністратор' ||
//   login === 'administrator'
// ) {
//   const password = prompt('Enter password').toLowerCase();
//   if (password === 'я адмін') {
//     console.log('Вітаю');
//   } else {
//     console.log('Невірний пароль');
//   }
// } else {
//   console.log('Відміна');
// }

// const age = prompt('Enter your age');

// *var-01
// let message = '';

// if (age >= 21) {
//   message = 'Wellcome';
// } else {
//   message = 'You are not allowed';
// }

// *var-02
// const message = age >= 21 ? 'Wellcome' : 'You are not allowed';
// console.log(message);
