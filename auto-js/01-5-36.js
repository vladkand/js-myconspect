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

// function add(a, b, c) {
//   console.log(`Результат ${a + b + c}`);
// }

// add(15, 4, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// =======================================


