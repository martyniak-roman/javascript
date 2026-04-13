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

for (let i = 9; i > array.length; i--){
    console.log(array[i])
}