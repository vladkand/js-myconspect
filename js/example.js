/* 
*Синтаксис  
*/

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

// *prompt()

// const hotelName = prompt("Please enter desired hotel name(название)");
// console.log(hotelName);// -> "5"
// console.log(`typeof всегда строка`,typeof hotelName);// ->string2
// ==============================

// * Перевод строки в число
// let quantity = prompt('введите количество'); // если ввести буквы ->NaN
// quantity = Number(quantity);
// console.log(quantity);

// console.log(typeof quantity);
// ================================

// let x = '12.2 px';
// x = Number(x);
// console.log(typeof x);//-> number
// console.log(x); //-> NaN
// ============================

// * Проверка на число NaN
// Number.isNaN(val)
/* 
const invalidNum = '52';
console.log(isNaN(invalidNum)); 
*/
// const myNum = Number('52');
// console.log(myNum);


// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line

//   const totalPrice = orderedQuantity *  pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// console.log(Number(true));//->1

//* логическое И '&&'
/* 
console.log(5 && 'pipl' && 22);// -> 22
console.log(NaN && 'pipl' && 22);//-> NaN
console.log(5 && 'pipl' && 0 && 22); //-> 0
console.log(5 && 'false' && 0 && 22);
 */

//* логическое И '||'
/* 
console.log(5 || 4 || 0); //-> 0
console.log(null || NaN || false); //-> false
 */

//* логическое И '!'

// console.log(!0); //->true
/* console.log(Number.parseInt(25.6));
// console.log(toFixed(25.6));

// variant #1
let value = 130.42634;
value = Number(value.toFixed(0)); // получаем string!!!
console.log(value);
 */









