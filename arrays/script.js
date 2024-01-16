// 1. Написать функцию, которая будет принимать массив и возвращать новый массив с уникальными элементами

// function getUniqueArr(arr) {
//   return Array.from(new Set(arr));
// }

// 2. Написать кастомный метод map -> customMap, первым параметром он принимает массив а вторым - функцию, как оригинальный метод map

// function customMap(arr, func) {
//   const customArr = [];
//   for (const item of arr) {
//     customArr.push(func(item));
//   }

//   for (let i = 0; i < arr.length; i++) {
//     customArr.push(func(arr[i], i, arr));
//   }

//   return customArr;
// }

//  3. Написать кастомные метод reduce -> customReduce

// function customReduce(arr, func, initial) {
//   let accumulator = initial === undefined ? arr[0] : initial;

//   const cycleCondition = initial === undefined ? 1 : 0;
//   for (let i = cycleCondition; i < arr.length; i++) {
//     accumulator = func(accumulator, arr[i], i, arr);
//   }

//   return accumulator;
// }
