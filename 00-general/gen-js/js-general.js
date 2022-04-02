// ! BOOLEAN
// *7 значений, которые всегда =false=
/* 
console.log(Boolean(0)); //-> false
console.log(Boolean(NaN)); //-> false
console.log(Boolean(null)); //-> false
console.log(Boolean(undefined)); //-> false
console.log(Boolean()); //-> false
console.log(Boolean(false)); //-> false
console.log(Boolean('0')); //-> true
console.log(Boolean(' ')); //-> true
 */
// !Логические операторы

/*
 * оператор И = && = спотыкается на первом FALSE, или выодит последний элемент
запинается на первом false и возвр. его значение. Если все true тогда последнее
значение
 */
// console.log(NaN && 'string'); //->NaN
// console.log('1' && 'mango'); //->mango
// console.log(1 && 5); // true && true -> 5
// console.log(2 && 0); // true && false -> 0
// console.log('Poly' && 'Mango'); // true && true -> "Mango"
// console.log(0 && 'Mango'); //-> 0
/* 
console.log(5 && 'pipl' && 22);// -> 22
console.log(NaN && 'pipl' && 22);//-> NaN
console.log(5 && 'pipl' && 0 && 22); //-> 0
console.log(5 && 'false' && 0 && 22);
 */

// * оператор И =||=
/* 
Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд если его можно привести к true, и правый в остальных случаях.
* т.е он запинается на TRUE и выводит егою
если true нет, тогда последнее значение
*/
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || 'name'); // 3
// console.log(false || 3); // 3
// console.log('name' || true); // name
// console.log('mango2' || false || true); // mango2

// более сложные
// console.log(('false' && 'Mango0') || null); //->Mango0
// console.log('false' || ('Mango0' && null)); // -> (true || null) ->true
// console.log(false || ('Mango' && null)); // -> (false || null) --> null
// console.log(false || 'Mango' > null); // false
// console.log((false || 'Mango') > null);
console.log('Mango' < 'null'); // true
// console.log(('false' && 'Mango') || 'null'); //-> Mango
// console.log((1 && 'mango3' && 2) > 0); // null > 0 // true
// console.log((1 && null && 2) > 0); // null > 0 // false
