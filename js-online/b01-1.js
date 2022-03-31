//
/* let value = 100;
value += 50;
console.log(value); //-150 */
// ==============================

// * Округление чисел

let value = 27.3;
console.log(Math.floor(value)); // просто обрезка до точки
console.log(Math.ceil(value)); // всегда в большую сторону
console.log(Math.round(value)); // по математике

// =========================

// *шаблонная строка
/* 

//  *преобразование запятой в точку
*/
let weight = '86,67';// 8->0 || 8->1 || ,->2 || 3->3 || 7->4
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