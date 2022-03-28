// Hello World!
// alert('Hello World');


// ! Типы переменных
// * числа

// * Number -- целые числа  и числа с запятой
/* const age = 20;
const points = 15.8;
 */
//  * Number(val) -> преобразование к числу
// let myVal = '5';
// console.log(typeof myVal);//-> string
// myVal = Number(myVal);
// console.log(typeof myVal);//-> number
// console.log(myVal);//-> 5

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"
// ===============================================

// *Методы Number.parseInt()
/* Преобразуют строку символ за символом, пока это возможно. При возникновении ошибки возвращается число, которое получилось. */

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// let myData = '2px';
// myData = Number.parseInt(myData);
// console.log(myData);
// +++++++++++++++++++
// * Number.parseFloat()
/* тоже, плюс дробную часть */
// console.log(Number.parseFloat("12.46qwe79")); //--> 12.46
// console.log(Number.parseFloat(".46qwe79")); //--> 0.46

// let mySize = '1.67m';
// mySize = Number.parseFloat(mySize);
// console.log(mySize); // -> 1.67

// ====================================================================


// * toFixed();

// variant #1
/* let value = 130.42634;
value = value.toFixed(2); // получаем string!!!
// преобразуем в number:
value = Number(value);
console.log(value);
 */
// -> сокращенная запись ->

/* let value = 130.42934;
console.log(Number(value.toFixed(2))); // -> 130.42(number) */
// =======================================

// * возведение в степень
/* 
let base = prompt('назови число');
base = Number(base);
console.log(base);// -> основа 
let expon = prompt(' введи степень');
expon = Number(expon);
console.log(expon);//-> степень
console.log(base ** expon);
 */
// =====================================



// * String (строки)
// const userName = 'Mango';
// let width = 'vw';
// console.log(width) //--> vw



// * конкатенация строк
/* 
const message = "JavaScript " + "is " + "awesome!"; //c пробелами
console.log(message); // -> JavaScript is awesome! 
*/

/* 
console.log(1 + '2'); //-> 12 (string)
console.log(1 + '2' + 4); //-> 124 (string)
console.log(1 + 2 + '4'); //-> 34 (string) 
*/

// * шаблонные строки
// строки с косыми кавычками ``

/* const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // ->"Welcome Mango, your room number is 207!" */
// =========================================

/* 
*Bulean(),буль-переменные
true // ДА , ВЕРНО, Истина, 1
false // НЕТ, ЛОЖЬ, 0 */

/* 
*null - 
особое значение, которое по сути значит ничто. Используется в тех ситуациях, когда необходимо явно указать пустоту. К примеру если пользователь ещё ничего не выбрал, то можно сказать что значение null. */

// *infinity
/* 
let selectedProduct = null;
let infinity // бесконечность
*/


// * typeof
//let username;
//console.log(typeof username); // "undefined" 

/* Оператор typeof Используется для получения типа значения переменной. Возвращает на место своего вызова тип значения переменной указанного после него - строку в которой указан тип. */

/* let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number" */



/* const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean" */



// ================================

/* let hello = 'hello world';
let message;
message = hello;
alert(message); */

// console.log("Теперь всё в порядке");
// [1, 2].forEach(console.log);

/* let age;
console.log(age);
age = 15;
console.log(age);
age = 35;
console.log(age); */

/* let username = 22;
console.log(typeof username); */

/* let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
alert( a + b );
 */



