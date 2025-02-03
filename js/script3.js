//Тема: "Колбек-функції. Функція як значення"
// Пример №1:
// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

//Пример №2:
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza(); // Значення змінної `result` - це рядок `"Your pizza is being prepared, please wait."`
// const pointer = makePizza; // Значення змінної `pointer` - це посилання на функцію `makePizza`

//Пример №3:
//Колбек-функції. Функция обратного вызова (Callback):
// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"

//name — ім'я користувача;
//callback — посилання на функцію, яку треба викликати в тілі registerGuest і передати їй ім'я користувача.
//Тепер використовуємо оголошені функції під час виклику registerGuest.

//Пример №4:
//Функция высшего порядка (Higher-Order Function):

//Пример №5:
//Метод forEach(callback)
// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

//Пример №6: Стрілочні функції: синтаксис
//Запис із фігурними дужками (явне повернення (explicit return)).
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

//Запис без фігурних дужок (неявне повернення (implicit return)).
// const add = (a, b, c) => a + b + c;
// console.log(add);

//Пример №7:  Стрілочна анонімна функція
// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

//Стрілочну колбек-функцію також можна оголошувати окремо й передавати на неї посилання. Це варто робити, якщо одна функція використовується в декількох місцях програми або якщо вона громіздка.
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

//Пример №8: Методи map() і flatMap()
//Метод map(callback). Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log("planetsLengths:", planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log("titles:", titles);

//Метод flatMap(). Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити». Метод flatMap викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив. Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений (плоский) масив і є результатом роботи flatMap()
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);
// console.log("genres:", genres);

//Пример №9: Метод filter(callback):
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

//Пример №10:
// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), шукає до першого збігу. Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined//
//array.find((element, index, array) => {
// Тіло колбек-функції
// });
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.log("bookWithTitle:", bookWithTitle);
// console.log("bookByAuthor:", bookByAuthor);

//Пример №11:
//Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції. Поелементно перебирає оригінальний масив. Повертає бульове значення. Метод every(callback) не змінює оригінальний масив.
// Що повертає метод every()? true, якщо всі елементи масиву задовольняють умову, і false, якщо хоча б один елемент масиву не задовольняє умову
// const products = [
//   { name: "apple", quantity: 2 },
//   { name: "orange", quantity: 5 },
//   { name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every((product) => product.quantity > 0);
// console.log(hasEveryProduct); // false

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const isEveryUserActive = (users) => {
//   // return users.every((user) => user.isActive > 0);
//   // return users.every((user) => user.isActive => 0);
//   // return users.every((user) => user.isActive > true);
// };
// console.log("isEveryUserActive:", isEveryUserActive, true);

//Пример №12: Метод some()
// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції. Зверни увагу на відмінність між методом every та методом some: Метод every() перевіряє, чи задовольняють усі елементи умову колбек-функції. Метод some() перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive >= true);
// };
// console.log("isAnyUserActive:", isAnyUserActive, true);

//Пример №13: Метод reduce()
//Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату. Трохи складніший за інші методи для засвоєння, але результат вартий того. Повертає все, що завгодно (об'єкт, масив, рядок, число тощо). Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію
// синтаксис Метода reduce():
// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

// Метод reduce() очікує 2 параметри:
// 1-й параметр (обов'язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов'язковий) — initialValue початкове значення акумулятора.
// Колбек-функція з параметра редьюса очікує в свою чергу чотири параметри. Ці параметри, так само як і в колбеках інших перебираючих методів масиву, можна не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:
// 1-й параметр (previousValue) — це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.
// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(total); // 12
// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

//Пример №14:
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };

// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// // Используем reduce для подсчета общего игрового времени
// const totalPlayTime = playtimes.reduce(
//   (accumulator, current) => accumulator + current,
//   0
// );

// // Теперь вычисляем среднее время
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime); // 2692
// console.log(averagePlayTime); // 673

//Пример №15: метод reduce()
// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
// };

// // Пример использования функции
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// console.log(calculateTotalBalance(users)); // 20916

//Пример №16: Метод toSorted() сортує елементи масиву.Сортує вихідний масив. Повертає новий масив. За замовчуванням сортує за зростанням
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки, тобто на основі їхніх значень у таблиці Unicode. Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа, але зрозуміло, якщо знати, що числа були перетворені на рядки.
//const scores = [27, 2, 41, 4, 7, 3, 75];
//console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]
//При такому сортуванні рядки порівнюються за символами зліва направо, тобто спочатку порівнюються рядки 2 і 27. Перший символ 2 у них однаковий, але рядок 2 містить лише 1 символ, тому він менший, ніж рядок 27, і йде першим.
//Потім порівнюються рядки 27 і 3. Перший символ у рядку 3 більший за перший символ 2 у рядку 27, тому 3 йде після 27.

//Масив рядків сортується за алфавітом.
// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

//Водночас порядковий номер великих літер менший, ніж у малих.
// const letters = ["b", "B", "a", "A", "c", "C"];
// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

//Сортування за зростанням.
//Якщо виклик compareFunction(a, b) повертає будь-яке негативне значення, тобто a менше b, сортування поставить a перед b.
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//Сортування за спаданням.
//Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a.
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

//Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів.
//Зверни увагу, що при сортуванні масиву чисел і передачі в метод toSorted() колбек-функції, числа вже не будуть приводитися до рядків, тобто їх сортування буде очікуваним і звичним.

//Пример №17:
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

//Пример №18:
// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
//firstString.localeCompare(secondString)

//"a".localeCompare("b"); // -1 //Повертає негативне значення, якщо firstString повинен бути перед secondString
// "b".localeCompare("a"); // 1 //Повертає позитивне значення, якщо firstString повинен бути після secondString
// "a".localeCompare("a"); // 0 //Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється
// "b".localeCompare("b"); // 0 //Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється

//Пример №19: метод рядків localeCompare():
// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
//Метод localeCompare() зручно використовувати для сортування рядків, оскільки метод toSorted() очікує такі самі значення від колбек-функції.

//Пример №20:
//Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив об'єктів за трьома різними сценаріями:
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// ); //за зростанням кількості балів

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// ); //за спаданням кількості балів

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// ); //за ім'ям студента в алфавітному порядку

//Пример №21:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
//масив книг, відсортований за ім'ям автора в алфавітному порядку

// const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
//масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку

// const sortedByAscendingRating = books.toSorted(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating);
//масив книг, відсортований за зростанням рейтингу

// const sortedByDescentingRating = books.toSorted(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating);
//масив книг, відсортований за спаданням рейтингу

//Пример №22: Ланцюжки методів
const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

//dovgiy variant
// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// console.log("sortedByAscendingScore:", sortedByAscendingScore);
// const names = sortedByAscendingScore.map((student) => student.name);
// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

//Ланцюжки методів
const names = students
  .toSorted((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

//Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
const uniqueSortedCourses = students
  .flatMap((student) => student.courses) //На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
  .filter((course, index, array) => array.indexOf(course) === index) //До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
  .toSorted((a, b) => a.localeCompare(b)); //На результаті методу filter() викликаємо toSorted()

console.table(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
//Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()

//
