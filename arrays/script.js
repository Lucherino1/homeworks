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

// 4. Написать функцию filterObjects, которая принимает первым аргументом массив с объектами,
// а вторым - название поля, она должна возвращать новый массив, при этом все объекты у которых одинаковое значение этого поля
//  соединять в один

// function filterObjects(arr, field) {
//   const result = [];

//   arr.forEach((obj) => {
//     const existingObj = result.find((item) => item[field] === obj[field]);

//     if (existingObj) {
//       Object.assign(existingObj, obj);
//     } else {
//       result.push({ ...obj });
//     }
//   });

//   return result;
// }

// 5. Написать фукнцию getAverage, которая будет принимать массив объектов,
// у каждого объекта будут поля age, gender, income. Задача вернуть из функции объект,
// где ключами будут все gender, а значениями объект со средним значением возраста и зарплаты для этого гендера

// function getAverage(arr) {
//   const map = new Map();

//   arr.forEach((obj) => {
//     const newArr = arr.filter((item) => item.gender === obj.gender);
//     const avgAge =
//       Math.floor(
//         (newArr.reduce((sum, item) => sum + item.age, 0) / newArr.length) * 10
//       ) / 10;
//     const avgIncome =
//       Math.floor(
//         (newArr.reduce((sum, item) => sum + item.income, 0) / newArr.length) *
//           10
//       ) / 10;

//     const objOfAvg = {
//       avgAge: avgAge,
//       avgIncome: avgIncome,
//     };
//     map.set(obj.gender, objOfAvg);
//   });

//   return Object.fromEntries(map);
// }

//  6. Написать функцию getCommon, которая принимает аргументом два массива и возвращает новых массив
// только из элементов которые есть в обоих массивах.

// function getCommon(arr1, arr2) {
//   const set = new Set();

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (JSON.stringify(arr1[i]) === JSON.stringify(arr2[j])) {
//         set.add(arr1[i]);
//       }
//     }
//   }

//   return Array.from(set);
// }

//  7. Написать функцию, которая будет принимать дату строкой и возвращать какой это день недели в сокращенном варианте

// function getWeekDay(str) {
//   const arrDateNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const dateIndex = new Date(Date.parse(str)).getDay();
//   return arrDateNames[dateIndex];
// }

// 8. Написать функцию, которая принимает двумя аргументами две даты строкой и возвращает разницу в днях между ними

// function getWeekDay(date1, date2) {
//   const day1 = new Date(Date.parse(date1)).getDate();
//   const day2 = new Date(Date.parse(date2)).getDate();

//   return Math.abs(day2 - day1);
// }
