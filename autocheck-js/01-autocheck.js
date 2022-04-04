console.log('----AUTOCHECK');
/* Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом. Шаблонная строка заключена в обратные (косые) кавычки вместо двойных или одинарных и может содержать местозаполнители, которые обозначаются знаком доллара и фигурными скобками - ${выражение}. */

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);
// --> You picked Droid, price per item is 3500 credits

// ===============================
// *6/36
/* Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

pricePerDroid - цена одного дроида, значение 800
orderedQuantity - количество дроидов в заказе, значение 6
deliveryFee - стоимость доставки, значение 50
totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price." */

// let orderedQuantity = 6;
// const pricePerDroid = 800;
// let deliveryFee  = 50;
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = (`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);
// console.log(message);
/* ============================================================= */

// *7/36
// function sayHi() {
//     console.log('Hello, this is my first function!');
// }
// sayHi(); //--> Hello, this is my first function!
// ===================================================

// *8/36
// Теория: 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// multiply(1, 2, 3); //-->Результат умножения равен 6

/* Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел. */
// =======================================

// *9/36
// function add(a, b, c) {
//   console.log(`Результат ${a + b + c}`);
// }

// add(15, 4, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// =======================================

// * 12/36
// Условие
/* 
Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество дроидов в заказе
pricePerDroid - цена одного дроида
deliveryFee - стоимость доставки
Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.
*/
// Тесты
/* 
Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
*/
// *Решение
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// let message = (`You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee } credits) is included in total price.`);

// // Change code above this line
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);
// =================================================

// * 13/36
/*  ''' УСЛОВИЕ  '''
Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.
*/
/*  '''  ТЕСТЫ  '''
Объявлена функция isAdult(age)
В выражении проверки используется оператор >=
Вызов isAdult(20) возвращает true
Вызов isAdult(14) возвращает false
Вызов isAdult(8) возвращает false
Вызов isAdult(37) возвращает true
*/
// * РЕШЕНИЕ:
// function isAdult(age) {
//   const passed = age >= 18 ;

//   return passed;
// }

// =======================================

// * 15/36
/* 
Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
В противном случае должен выполняться блок else и записывается строка "You are a minor".
*/
//* решение

// function checkAge(age) {
//   let message;
//   let age = prompt('Введите возраст');
//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else if (age !== null) {
//     message = 'You are a minor';
//   } else {
//     message = 'ВВЕДИ ЧИСЛО ';
//   }
//   alert(message);
// }
// checkAge(age);

// *16/36

/* 
Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

pricePerDroid - цена одного дроида
orderedQuantity - кол-во заказанных дроидов
customerCredits - сумма средств на счету клиента
Дополни её следующим функционалом:

Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
Добавь проверку сможет ли клиент оплатить заказ:
если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".
*/
//
// * вывод = functiot = в консоль
/* 
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;

  let totalPrice = pricePerDroid * orderedQuantity;
  // console.log(totalPrice);

  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  return message;
}
console.log(makeTransaction(1000, 3, 20000));
 */
// =========================

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let inPassword = prompt('INPUT');
// console.log(inPassword);

// if (inPassword == null) {
//   // Change this line
//   message = 'Canceled by user!';
// } else if (ADMIN_PASSWORD === inPassword) {
//   // Change this line
//   message = 'Welcome!';
// } else {
//   message = 'Access denied, wrong password!';
// }
// console.log(message);
// =============================

// *30/36
/* 
Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.
===========================
*задание 
Объявлена функция getNameLength(name)
Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"
 */

/* function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}
console.log(getNameLength('Harambe'));
 */
// =====================================

// *31/36 свойства строки [индекс знака]
/* 
Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

courseTopicLength - длина строки.
firstElement - первый символ строки.
lastElement - последний символ строки.
*/
// *решение:
/* 
const courseTopic = 'JavaScript essentials';
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(courseTopic.length);
console.log('два ', courseTopic[-4 + 6]); //-> вычисляет сумму -4+6=2
// console.log(courseTopic[20]);
// * пишут более гибко
console.log(courseTopic[courseTopic.length - 1]); // -1 это посл символ с конца
 */
// ========================================
// * 32/36
/* 
Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

string - оригинальная строка
length - количество символов с начала строки для подстроки
Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string. */
// *Решение
/* 
function getSubstring(string, length) {
  const substring = string.slice(string, length); // Change this line

  return substring;
}
console.log(getSubstring('длинной length символов (от начала)', -3)); //3-й симв с конца
 */
// =======================

// * 33/36
/* 
Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

Дополни код функции так, что если длина строки:

не превышает maxLength, функция возвращает её в исходном виде.
больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
*/
// *Решение
/* 
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line

  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + '...';
  }
  /// Change code above this line
  return result;
}
console.log(formatMessage('Тут находится вся строка!', 15));
 */
// ==========================================

// * 36/36
/* 
Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещенных слов, функция возвращает буль false.
*/
// * Решение
/* 
function checkForSpam(message) {
  let result;
  // Change code below this line
  result =
    message.toLocaleLowerCase().includes('spam') ||
    message.toLocaleLowerCase().includes('sale');
  // Change code above this line
  return result;
}
console.log(checkForSpam('Amazing SalE, only tonight!')); // ->true SaLE

// * вариант через if

const message = 'Get best speaM saLE offers now!';
console.log(
  message.toLocaleLowerCase().includes('spam') ||
    message.toLocaleLowerCase().includes('sale'),
);
 */
