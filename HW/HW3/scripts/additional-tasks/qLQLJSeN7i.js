const array = [2,17,13,6,22,31,45,66,100,-18]

// TODO: 1. перебрати його циклом while
//
// let i = 0;
//
// while (i < array.length){
//     console.log(array[i])
//     i++
// }

// TODO: 2. перебрати його циклом for

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// TODO: 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
//
// while (i < array.length){
//     if(i % 2 !== 0){
//         console.log(array[i])
//     }
//     i++
// }

// TODO: 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0){
//         console.log(array[i])
//     }
// }

// TODO: 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
//
// while (i < array.length){
//     if(i % 2 === 0){
//         console.log(array[i])
//     }
//     i++
// }

// TODO: 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0){
//         console.log(array[i])
//     }
// }


// TODO: 7. замінити кожне число, кратне 3, на слово “okten”
//
//  for (let i = 0; i < array.length; i++) {
//      if (array[i] % 3 === 0){
//          array[i] = 'okten'
//      }
//      console.log(array[i])
//  }

// TODO: 8. вивести масив у зворотньому порядку.

// for (let i = array.length - 1; i >= 0; i--){
//     console.log(array[i])
// }

// TODO: 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

// 1-2
// let i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i]);
//     i--;
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

// 3-4

// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(i, array[i]);
//     }
// }
//
// 5-6

// let i = array.length - 1;
//     while (i >= 0) {
//         if (typeof array[i] === 'number' && array[i] % 2 === 0) {
//             console.log(array[i]);
//         }
//         i--;
// }
//
// 7

// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
// }
// console.log(array);