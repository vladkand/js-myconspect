// ! СТРОКИ
// const message = 'B этой строке 26 символов.';//->26
// console.log(message.length);
// ===========================================

// *Конкатенация
/* 
let messageOne = 'JavaScript_'; 
let messageTwo = 'is ' + 'awesome!'; //c пробелами
let messageAll = messageOne + messageTwo;
console.log(messageAll, messageAll.length); // -> JavaScript_is awesome! 22
 */
// ! при конкатенации всегда СТРОКА
/* 
let myVar = (1 + '2'); //-> 12 (string)
console.log(myVar); //-> 12 (string)
console.log(typeof myVar); //-> 

console.log(1 + '2' + 4); //-> 124 (string)
console.log(1 + 2 + '4'); //-> 34 (string) 
 */
// =================================

// * Шаблонная строка (template string)
/* 
const quantity = 33;
const orderItem = `Заказали ${quantity} утюга!`;
console.log(orderItem); 
*/
// ===================================

// * Нормализация строк (normalized) - toLowerCase, toUpperCase
/* 
const brand = 'Samsung';
const normalisedBrand = brand.toUpperCase(); //->SAMSUNG
console.log(normalisedBrand);
 */
// =================== уще 
/* 
let name = prompt('Введи имя');
console.log(name);
name = name.toUpperCase();
console.log(name.toLowerCase());
 */