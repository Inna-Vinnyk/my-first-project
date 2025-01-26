// function calculateEvenTotal(number) {
//   debugger;
//   let sum = 0;

//   for (let i = 2; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(27));

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log("Met the number 5, interrupt the execution of the cycle");
//     break;
//   }
// }

// console.log("Log after cycle");

// const start = 6;
// const end = 17;
// let number;

// for (number = start; number < end; number++) {
//   if (number % 5 === 0) {
//     console.log(number);
//     break;
//   }
// }

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

// const planets = ["Earth", "Mars", "Venus"];
// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'

// console.log(planets[3]); // undefined
// console.log(planets[999]); // undefined

// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// planets[0] = "Jupiter";
// planets[2] = "Neptune";
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.length); // 3

// const planets = ["Earth", "Mars", "Venus"];

// if (planets.length >= 3) {
//   console.log("3 or more elements");
// } else {
//   console.log("3 or less elements");
// }

// function getOrderQuantity(order) {
//   return order.length; // Возвращаем длину массива order
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); // 4
// console.log(getOrderQuantity(["apple", "banana"])); // 2
// console.log(getOrderQuantity(["apple", "banana", "pear"])); // 3
// console.log(getOrderQuantity([])); // 0

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];

//   return [lastIndex, lastElement];
// }

// function getExtremeElements(array) {
//   const ferstElement = array[0];
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];

//   return [ferstElement, lastElement];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// const array = [1, true, "Poly"];
// console.log(String(array)); // "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// function transformString(string) {
//   const words = string.split("_");
//   return words.join("-");
// }

// console.log(transformString("user_age")); // "user-age"
// console.log(transformString("price_per_droid")); // "price-per-droid"

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

// let text = "яблоко; груша, банан. апельсин";
// let fruits = text.split(/[,;.\s]+/); // Разделяем по запятой, точке, точке с запятой и пробелу
// console.log(fruits); // ["яблоко", "груша", "банан", "апельсин"]

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   const numberOfWords = words.length;
//   const totalPrice = numberOfWords * pricePerWord;

//   return totalPrice;
// }

// Примеры вызова функции
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // 80

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray));
// // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray));
// // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

// function getSlice(array, value) {
//   const index = array.indexOf(value); // Находим индекс элемента value в массиве
//   if (index === -1) {
//     // Если элемент не найден
//     return []; // Возвращаем пустой массив
//   }
//   return array.slice(0, index + 1); // Возвращаем подмассив от начала до найденного элемента
// }

// function createArrayOfNumbers(min, max) {
//   const arrayOfNumbers = [];
//   for (let i = min; i <= max; i++) {
//     arrayOfNumbers.push(i);
//   }
//   return arrayOfNumbers;
// }
// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

// function createArrayOfEvenNumbers(min, max) {
//   const evenNumbers = []; // Создаем пустой массив для четных чисел

//   for (let i = min; i <= max; i++) {
//     // Проходим от min до max
//     if (i % 2 === 0) {
//       // Проверяем, является ли число четным
//       evenNumbers.push(i); // Добавляем четное число в массив
//     }
//   }

//   return evenNumbers; // Возвращаем массив четных чисел
// }
// console.log(createArrayOfEvenNumbers(1, 10)); //[2, 4, 6, 8, 10]
// console.log(createArrayOfEvenNumbers(14, 20)); // [14, 16, 18, 20]
// console.log(createArrayOfEvenNumbers(29, 34)); // [30, 32, 34]

// const fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]); // Выводим каждый элемент массива
// }

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// console.log(fillArray(2, 10));

// const fruits = [
//   "banana",
//   "apple",
//   "orange",
//   "watermelon",
//   "apple",
//   "orange",
//   "grape",
//   "apple",
// ];
// fruits.length = 0;
// console.log(fruits); // поверне []

// function getCommonElements(array1, array2) {
//   const commonElements = [];

//   for (let i = 0; i < array1.length; i++) {
//     const element = array[i];
//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //повертає [2]
