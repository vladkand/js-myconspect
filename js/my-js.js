// ! Head
console.log('--My js');

// * Кости :)

// 1) Случайное число в пределах от min to max
//  от 1 до 6

// вилка значений
// const max = 6;
// const min = 1;

// // получаем случ. число методом  Math.random
// let dice1 = Math.round(Math.random() * (max - min) + min);
// let dice2 = Math.round(Math.random() * (max - min) + min);

// console.log(dice1, dice2); // выводим


// // округляем с поиощюь метода Math.round и выводим
// console.log(Math.round(dice1));
// console.log(Math.round(dice2));

// console.log(Number.parseInt(dice1.toFixed(0)));
// console.log(Number.parseInt(dice2.toFixed(0)));

//* Зарплата
const minSalary = 500; // min зарплата
const maxSalary = 1500; // max зарплата
const emloyees = 4; // к-во работников
let totalSalary =0;

// цикл к-ва работников
for (let i = 1; i <= emloyees; i +=1) {
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

  totalSalary += salary; // Прибавляем в общий 

  console.log(`ЗП раба ${i} -- ${salary}`);
}
  console.log(' Вся ЗП --', totalSalary);









