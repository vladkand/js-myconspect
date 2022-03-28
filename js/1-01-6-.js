// Взаимодействие с пользователем

// let foo = { id: 1, verified: true, color: 'green' };
// let bar = { id: 2, verified: false, color: 'red' };

// выражение можно записать двумя способами
// 1-->

// console.table({foo, bar});


// console.log(foo);
// console.log(bar);

/* получим in console -->

{id: 1, verified: true, color: 'green'}
{id: 2, verified: false, color: 'red'}
 */

// 2-->
// console.log({foo, bar});

/* {foo: {…}, bar: {…}}
bar: {id: 2, verified: false, color: 'red'}
foo: {id: 1, verified: true, color: 'green'}
[[Prototype]]: Object */

// *получим табличку

// ! ПОЛУЧЕНИЕ ДАННЫХ:

/* 
*confirm() 
- выводит модальное окно с сообщением, и две кнопки, Ok и Cancel. При нажатии на Ok, результатом будет true, при нажатии на Cancel - возвращается false. */

// let isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// let myName = 'Vold';
// let isComing = confirm(myName);
// console.log(isComing);



/* 
*prompt()
 - выводит модальное окно с полем ввода и кнопками Ok и Cancel. При нажатии Ok, резул5+2ьтатом будет то, что ввел пользователь, при Cancel - возвращается null. */

// const hotelName = prompt("Please enter desired hotel name(название)");
// console.log(hotelName);// -> "5"
// console.log(`typeof всегда строка`,typeof hotelName);// ->string2


/* Важная особенность prompt в том, что не зависимо что ввел пользователь, всегда вернется строка. То есть, если пользователь ввел 5, то вернется не число 5, а строка "5". для преобразования string --> number, есть оператор "Number" 
*/

// let quantity = prompt('Введите количество товаров'); // 15
// console.log(quantity); //--> 15
// console.log(typeof quantity); //--> stringwert
// quantity = Number.parseInt(quantity);
// console.log(quantity); //--> 15
// console.log(typeof quantity); //-->number
// ++++++++++++++++++++++++++++++

// *другой способ:
// const quantity = prompt('Введите количество товаров'); // 15it
// console.log(quantity); //--> 15it
// console.log(typeof quantity); //--> string
// console.log(Number.parseInt(quantity)); // --> временно "15"
// console.log(typeof Number(quantity)); //--> временно "number"

// console.log(quantity);
/* Но фактически <<quantity>> остается как string!!!
по-тому КАК при новом запросе  */
// console.log(typeof quantity); // !-->string
// ====================================================

// let myProfile = {name: 'Vlad', age: 22, sex: 'male'};
// youProfile = {name: 'Вадим', age: 35, sex: 'male'}paris
// console.table({myProfile, youProfile });

// let myProf = 'study';
// youProf = 'work'
// console.table({ myProf, youProf });

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Добро пожаловать ${guestName},
//  вы поселены в номер ${ roomNumber }`;
// console.log(greeting);
// =================================






