/*
 *Синтаксис
 */
console.log('--- example');

// console.log('Hello \'my\' world!'); // --> "Hello 'my' world!"

// console.log('Hello, \n\tworld!'); // -->
/* -->   Hello,
                                        world! */

// =============================================================

// ! Match с переменными
// let orderedQuantity = 6;
// const pricePerDroid = 800;
// let deliveryFee  = 50;
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = (`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);
// console.log(message);
// ===============================

// let valueA = "5"; // вводим number как 'string'
// console.log(valueA); // -> 5
// console.log(typeof valueA); // "number"
// valueA = Number(valueA);
// console.log(Number(valueA)); // 5
// console.log(typeof valueA); // "number"

// const valueA = "5";
// *временно изменить тип
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

/* let valueB = 'world';
let valueC;
console.log(valueC = Number(valueB));//-> NaN
console.log(typeof valueC);//->number */

// *confirm
// let varName = 'two';
// const lastName = confirm(varName);
// console.log(lastName);
// ===============================

// console.log(Number(true));//->1

//* логическое И '!'

// console.log(!0); //->true
// console.log(Number.parseInt(25.6));
// console.log(toFixed(25.6));

// variant #1
// let value = 130.42634;
// value = Number(value.toFixed(3)); // получаем string!!!
// console.log(value);
// *
// ============

// *switch
// let price;
// const type = 'starter';
// // Change code below this line

// switch (type) {
//   case 'starter': // Change this line
//     price = 0; // Change this line
//     break;

//   case 'professional': // Change this line
//     price = 20; // Change this line
//     break;

//   case 'organization': // Change this line
//     price = 50; // Change this line
//     break;
// }
// console.log(price); // ->0
// // Change code above this line
// // return price;
// // }
// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const value = 27.1;
// console.log(Math.floor(value)); // -> просто обрез после ","
// console.log(Math.ceil(value)); // --> всегда целое(до запятой) в больш.
// console.log(Math.round(value)); // - > как вматематике
/* 
const message = 'Get best spawm offers now!';
const nameSale = 'sale';
const nameSpam = 'spam';
let result;

result = message.toLowerCase();
// console.log(result);

// console.log(result.includes(nameSale) || result.includes(nameSpam));

if (result.includes(nameSale) === true || result.includes(nameSpam) === true) {
  console.log('Тут спам');
} else {
  console.log('СПАМА НЕТ');
} */

// ==============
// if (result.includes(name)) {
//   console.log('ТУТ спам');
// } else {
//   console.log('СПАМА НЕТ');
// }

// const resultFinn = result.includes(name);
