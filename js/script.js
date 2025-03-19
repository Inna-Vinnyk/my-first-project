// console.log("Hallo!", 555, "why?");
// console.log(123);
// console.log("Hallo naw");

// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(`Username ${username} is ${username.length} characters long`);

// const product = "Repair droid";
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]);

// const product = "Repair droid";
// console.log(product[0]);
// console.log(product[5]);
// console.log(product[11]);

// const product = "Repair droid";
// console.log(product[product.length - 1]);

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);

// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);

// console.log(5 == 5);
// console.log(5 == 3);
// console.log(5 != 3);
// console.log(5 != 5);

// Функція для перевірки віку
// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult"; // Додано: повертає рядок, якщо вік 18 або більше
//   }
//   // Якщо вік менше 18, повертає undefined (за замовчуванням)
// }

// // Виклики функції
// console.log(checkAge(20)); // "You are an adult"
// console.log(checkAge(17)); // undefined
// console.log(checkAge(10)); // undefined
// console.log(checkAge(30)); // "You are an adult"

// Функція для перевірки пароля
// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return password === correctPassword
//     ? "Access granted"
//     : "Access denied, wrong password!"; // Додано: тернарний оператор для перевірки пароля
// }

// Виклики функції
// console.log(checkPassword("jqueryismyjam")); // "Access granted"
// console.log(checkPassword("wrongpassword")); // "Access denied, wrong password!"

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }

// //  Variant #1
// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// Variant #2
// function checkForName(fullName, firstName) {
//   const normalizedFullName = fullName.toLowerCase();
//   const normalizedFirstName = firstName.toLowerCase();
//   return normalizedFullName.includes(normalizedFirstName);
// }

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }

// function getFileName(file) {
//   const dotIndex = file.indexOf("."); // Знаходимо позицію крапки
//   if (dotIndex === -1) {
//     return file; // Якщо крапки немає, повертаємо ім'я файлу без змін
//   }
//   return file.slice(0, dotIndex); // Повертаємо ім'я файлу без розширення
// }

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext}`;
// }

// Цикл while
// function calculateTotal(number) {
//   let total = 0;
//   let i = 1; // Инициализация счетчика

//   while (i <= number) {
//     // Цикл продолжается, пока i меньше или равно number
//     total += i; // Добавляем текущее значение i к total
//     i++; // Увеличиваем i на 1
//   }

//   return total; // Возвращаем итоговую сумму
// }

// Примеры вызовов функции
// console.log(calculateTotal(1)); // Возвращает 1
// console.log(calculateTotal(3)); // Возвращает 6
// console.log(calculateTotal(0)); // Возвращает 0
// console.log(calculateTotal(18)); // Возвращает 171
// console.log(calculateTotal(24)); // Возвращает 300

// Цикл do…while виконується тіло циклу do...while Принаймні один раз на початку виконання циклу.
// А далі — стільки разів, скільки умова буде перетворюватися на true
// let count = 0;

// do {
//   console.log(`Count: ${count}`);
//   count += 1;
// } while (count < 5);

// Цикл и работа с debugger (1:35:54 Урок Модуль 2.Розгалуження і цикли/ 10 січня)
console.log("Before");

debugger;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("After");
