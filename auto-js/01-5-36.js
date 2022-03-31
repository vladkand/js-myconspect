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
//   // Change code below this line
//   const passed = age >= 18 ;

//   // Change code above this line
//   return passed;
// }
// =======================================