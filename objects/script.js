// #1

// function getDictionary(str) {
//   const lettersParse = {};
//   console.log(lettersParse);

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       const countedLetter = str[i].toLowerCase();
//       lettersParse[countedLetter] = (lettersParse[countedLetter] || 0) + 1;
//     }
//   }
// }

// getDictionary("Some string");

// #2

// const obj = {
//   someFieldKey: "someFieldValue",
//   someMethod() {},
// };

// function getObjCopy(obj) {
//   const copiedObj = {};

//   for (let key in obj) {
//     if (typeof obj[key] != "function") {
//       copiedObj[key] = obj[key];
//     }
//   }

//   return copiedObj;
// }

// const copiedObj = getObjCopy(obj);
// alert(copiedObj.someFieldKey);
// alert(copiedObj.someMethod); // undefined
// alert(obj === copiedObj); // false

// #3

// rectangle = {
//   length: 5,
//   width: 6,
//   height: 7,

//   getArea() {
//     return this.length * this.width;
//   },
//   getPerimeter() {
//     return (this.length + this.width) * 2;
//   },
//   getVolume() {
//     return this.length * this.width * this.height;
//   },
// };

// alert(rectangle.getArea());
// alert(rectangle.getPerimeter());
// alert(rectangle.getVolume());

//4

// const laptops = {
//   "7d708189-2cda-4aba-8da9-8b3766bb572b": {
//     name: "Laptop 1",
//     price: "$1050",
//     brand: "Brand 1",
//     processor: "Processor Type 1",
//     ram: "10GB",
//     storage: "512GB",
//     screenSize: '14"',
//     batteryLife: "6 hours",
//     qtyLeft: 5,
//   },
//   "941327bf-8a42-41f9-8309-780c1af08431": {
//     name: "Laptop 2",
//     price: "$1100",
//     brand: "Brand 2",
//     processor: "Processor Type 2",
//     ram: "12GB",
//     storage: "768GB",
//     screenSize: '15"',
//     batteryLife: "7 hours",
//     qtyLeft: 2,
//   },
//   "6a121953-034f-4c91-9097-e58d29425e35": {
//     name: "Laptop 3",
//     price: "$1150",
//     brand: "Brand 3",
//     processor: "Processor Type 0",
//     ram: "14GB",
//     storage: "256GB",
//     screenSize: '13"',
//     batteryLife: "8 hours",
//     qtyLeft: 1,
//   },
//   "ad0815a5-6d81-4489-8754-98589a800315": {
//     name: "Laptop 4",
//     price: "$1200",
//     brand: "Brand 4",
//     processor: "Processor Type 1",
//     ram: "8GB",
//     storage: "512GB",
//     screenSize: '14"',
//     batteryLife: "5 hours",
//     qtyLeft: 10,
//   },
//   "dcae527c-9c3d-4d9c-8f28-bf1bd93b1ed1": {
//     name: "Laptop 5",
//     price: "$1250",
//     brand: "Brand 0",
//     processor: "Processor Type 2",
//     ram: "10GB",
//     storage: "768GB",
//     screenSize: '15"',
//     batteryLife: "6 hours",
//     qtyLeft: 0,
//   },
//   "fb445092-548a-4e33-9ce5-9227c89adfe4": {
//     name: "Laptop 6",
//     price: "$1300",
//     brand: "Brand 1",
//     processor: "Processor Type 0",
//     ram: "12GB",
//     storage: "256GB",
//     screenSize: '13"',
//     batteryLife: "7 hours",
//     qtyLeft: 7,
//   },
//   "f2ab049e-aaef-4778-b147-b1fce9b6c626": {
//     name: "Laptop 7",
//     price: "$1350",
//     brand: "Brand 2",
//     processor: "Processor Type 1",
//     ram: "14GB",
//     storage: "512GB",
//     screenSize: '14"',
//     batteryLife: "8 hours",
//     qtyLeft: 3,
//   },
//   "692fbb56-ce11-43f4-a904-2b19a94f39b5": {
//     name: "Laptop 8",
//     price: "$1400",
//     brand: "Brand 3",
//     processor: "Processor Type 2",
//     ram: "8GB",
//     storage: "768GB",
//     screenSize: '15"',
//     batteryLife: "5 hours",
//     qtyLeft: 2,
//   },
//   "ea3d80a7-9c04-48ff-a6d7-5a764f8e549c": {
//     name: "Laptop 9",
//     price: "$1450",
//     brand: "Brand 4",
//     processor: "Processor Type 0",
//     ram: "10GB",
//     storage: "256GB",
//     screenSize: '13"',
//     batteryLife: "6 hours",
//     qtyLeft: 7,
//   },
// };

// const clients = {};

// function buyLaptop(name, laptopId) {
//   function generateUserId() {
//     const segment = () =>
//       Math.floor((1 + Math.random()) * 0x10000)
//         .toString(16)
//         .substring(1);
//     return `'${segment()}${segment()}-${segment()}-${segment()}-${segment()}-${segment()}${segment()}${segment()}'`;
//   }

//   const userId = generateUserId();

//   if (laptops[laptopId].qtyLeft === 0) {
//     alert("Закончились ноуты");
//   } else {
//     clients[userId] = {
//       name,
//       laptop: {},
//     };
//     Object.assign(clients[userId].laptop, laptops[laptopId]);
//     delete clients[userId].laptop.qtyLeft;

//     laptops[laptopId].qtyLeft--;
//   }
// }

// function sellLaptop(userId) {
//   if (clients[userId]) {
//     for (let key in laptops) {
//       if (laptops[key].name === clients[userId].laptop.name) {
//         laptops[key].qtyLeft++;
//       }
//     }
//     delete clients[userId];
//   } else {
//     alert("Пользователя не сущевствует!");
//   }
// }

// buyLaptop("Ananas", "7d708189-2cda-4aba-8da9-8b3766bb572b");
// console.log(clients);
// console.log(laptops);
// sellLaptop("7d708189-2cda-4aba-8da9-8b3766bb572b");
// console.log(clients);
// console.log(laptops);
