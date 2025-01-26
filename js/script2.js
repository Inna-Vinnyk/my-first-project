// js module #4

// Пример №1:
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };
// console.log(book);

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // изменение значений свойств объекта:
// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama"); //добавление элемента в конец массива

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

// // Додавання властивостей. Операція додавання нічим не відрізняється від зміни значення вже існуючої властивості.
// //Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена:
// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

// Пример №2:
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);

// Variante #1 вызов свойства объекта через точку "." :
// const aptRating = apartment.rating;
// console.log(apartment.rating);
// const aptDescr = apartment.descr;
// console.log(apartment.descr);
// const aptPrice = apartment.price;
// console.log(apartment.price);
// const aptTags = apartment.tags;
// console.log(apartment.tags);

// вызов свойства объекта из объекта или массива:
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// Variante #2 вызов свойства объекта через [""] :
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// изменение (перевизначення) значений свойств объекта:
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted"); //добавление элемента в конец массива

// Додавання нових властивостей до вже існуючого об'єкта
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {}; //щоб додати нові елементи до не існуючого об'єкта в об'єкті, спочатку створюємо новий порожній об'єкт в об'єкті
// apartment.location.country = "Jamaica"; // потім додаємо нові еленти нового об'єекту в існуючий об'єкт
// apartment.location.city = "Kingston"; // потім додаємо нові еленти нового об'єекту в існуючий об'єкт

// Пример №3:
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// console.log(user);

// Пример №4:
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// Пример №5:
//Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему,
// дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості:
// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// const user = {
//   name,
//   age,
// };
//Замість name: name, використали name. А замість age: age, — age.
// Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості,
// а значення буде взято зі змінної з аналогічним ім'ям.

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// Пример №6:
//Синтаксис коротких властивостей
// const userName = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   userName,
//   price,
//   image,
//   tags,
// };
// console.log(userName); //"Repair Droid"
// console.log(price); //2500
// console.log(image); //"https://via.placeholder.com/640x480"
// console.log(tags); //["on sale", "trending", "best buy"]

// Пример №7:
//Обчислювальні властивості
// const propName = "name";
// const user1 = {
//   age: 25,
// };

// user[propName] = "Henry Sibola";
// console.log(user1.name); // "Henry Sibola"

// const propName = "name";
// const user1 = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user1.name); // "Henry Sibola"

// Пример №8:
//Обчислювальні властивості. Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість
// з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної
// або як результат виконання функції.
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

//Пример №9:
// Перебір об'єкта // Цикл for...in
// for (key in object) {
//   // інструкції
// }

// Змінна key доступна тільки в тілі циклу.
// На кожній ітерації в неї буде записано значення ключа (ім'я) властивості.
// Для того щоб отримати значення властивості з таким ключем (ім'ям),
//  використовується синтаксис квадратних дужок [].

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// Пример №10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// // Инициализируем пустые массивы
// const keys = [];
// const values = [];

// Перебираем объект с помощью цикла for...in
// for (const key in apartment) {
//   keys.push(key); // Добавляем ключ в массив keys
//   values.push(apartment[key]); // Добавляем значение в массив values
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// Пример №11
// Метод Object.keys()
// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.
// Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей.
//  Якщо в об'єкті немає властивостей, метод поверне порожній масив.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

//Скомбінувавши результат Object.keys() і цикл for...of,
// можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// Пример №12:
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment); // Получаем массив ключей

// for (const key of keys) {
//   // Перебираем ключи
//   values.push(apartment[key]); // Добавляем значения в массив values
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// Пример №13: Метод Object.keys()
//Object.keys(object)
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

//Скомбінувавши результат Object.keys() і цикл for...of,
// можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }
//Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо ключ і значення властивості.

// function countProps(object) {
//   const keys = Object.keys(object);

//   return keys.length;
// }
//Функція має повернути кількість властивостей в об'єкті object.

//Пример №14: Метод Object.values()
//Якщо метод Object.keys(object) повертає масив імен властивостей об'єкта (тобто ключі),
// то метод Object.values(object) повертає масив значень його властивостей.
//Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

//Масив значень властивостей також можна перебрати циклом for...of,
// наприклад для отримання загальної суми числових значень.

//Пример №15:
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment); //масив ключів властивостей об'єкта apartment
// const values = Object.values(apartment); //масив значень властивостей об'єкта apartment

//Пример №16: Масив об'єктів
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
// ];

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

//Пример №17:
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

//Пример №18:
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Grip")); //1200
// console.log(getProductPrice("Radar")); //1300
// console.log(getProductPrice("Scanner")); //2700
// console.log(getProductPrice("Droid")); //400
// console.log(getProductPrice("Engine")); //null;

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   // Перебираем каждый продукт в массиве products
//   for (let product of products) {
//     // Если имя продукта совпадает с переданным параметром
//     if (product.name === productName) {
//       // Возвращаем цену продукта
//       return product.price; // Исправлено: возвращаем price найденного продукта
//     }
//   }

//   // Если продукт не найден, возвращаем null
//   return null; // Исправлено: возвращаем null после завершения цикла
// }

// // Примеры вызова функции
// console.log(getProductPrice("Radar"));   // 1300
// console.log(getProductPrice("Grip"));     // 1200
// console.log(getProductPrice("Scanner"));  // 2700
// console.log(getProductPrice("Droid"));    // 400
// console.log(getProductPrice("Engine"));    // null

//Пример №19: отримаємо список назв усіх книг у колекції books.
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 6.8,
//   },
// ];

// const titles = [];

// for (const book of books) {
//   titles.push(book.title);
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

//Пример №20: Дізнаємося середній рейтинг усієї нашої колекції.
//  Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

//Пример №21:
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const values = []; // Изменено имя переменной на values

//   for (const product of products) {
//     // Исправлено имя переменной на products
//     if (product.hasOwnProperty(propName)) {
//       // Проверяем, существует ли свойство
//       values.push(product[propName]); // Добавляем значение свойства в массив
//     }
//   }

//   return values; // Возвращаем массив значений
// }

// // Примеры вызова функции
// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []

//Пример №22:
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   // Перебираем массив продуктов
//   for (const product of products) {
//     // Проверяем, совпадает ли имя продукта
//     if (product.name === productName) {
//       // Возвращаем общую стоимость
//       return product.price * product.quantity;
//     }
//   }

//   // Если продукт не найден, возвращаем сообщение
//   return `Product ${productName} not found!`;
// }

// // Примеры вызова функции
// console.log(calculateTotalPrice("Blaster")); // "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800
// console.log(calculateTotalPrice("Scanner")); // 8100

//Пример №23: Методи об'єкта
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return `List of all available potions`;
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

//Пример №24: Методи об'єкта (this)
// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     // console.log(this);
//     return this.books;
//   },
// };

// // bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

//Пример №25: Зміна за посиланням
// const bookShelf = {
//   books: ["The Last Kingdom"],
// };

// bookShelf.books.push("The Mist");
// console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

//Пример №26: Зміна за посиланням
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

//Пример №27: Масив об'єктів
// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });

//Пример №28: Масив об'єктів
// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7

//Пример №29:   метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

//Пример №30:   Зміна об'єкта в масиві
// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         book.rating = newRating;
//       }
//     }
//   },
// };

// Після виклику методу changeRating властивість rating об'єкта з назвою,
//  що збігається з bookName, буде оновлено на newRating.

//Пример №31:   Зміна об'єкта в масиві
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName; // Исправлено
//       }
//     }
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions());
// // [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }]

// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.getPotions());
// // [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }]
