//Module 6: OOP/Classes

//Контекст виконання функції. Ключове слово "this"

// Метод showName — це функція, яка викликається в контексті об'єкта user. Під час її виклику в this записується посилання на об'єкт user, і ми можемо звертатися до його властивостей і методів. Під час виклику функції у this записується посилання на об'єкт, у контексті якого вона була викликана. Таким чином, у тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

//Пример №1: Глобальний контекст/Контекст методу об'єкта:
// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

//Пример №2: Прототип об'єкта/ Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Розгляньмо приклад:
//#1
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

//#2
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(child);

//Пример №3: Перевірка прототипу: objA.isPrototypeOf(objB). Метод перевіряє, чи є об'єкт objA прототипом для об'єкта objB. Якщо так, повертає true, в іншому разі повертає false.
// const customer = {
//   username: "Jacob",
// };

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

//Що поверне x.isPrototypeOf(y)?
//true, якщо x — це прототип для y, і false, якщо ні

//Пример №4: Власні і невласні властивості. Для того щоб перевірити, чи є в об'єкті власна властивість, використовується метод obj.hasOwnProperty(key). Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// Перебір власних властивостей. Оператор in, який використовується в циклі for...in, не розрізняє власні властивості об'єкта і його прототипу. Ця особливість заважає, оскільки зазвичай потрібно перебрати тільки власні властивості.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }

// Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key). Цей метод повертає true, якщо властивість з іменем key належить об'єкту obj, а не його прототипу, в іншому разі — false. Розгляньмо приклад:

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

//Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }

//Пример №5: Ланцюжки прототипів
// Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип. Отже, існують ланцюжки прототипів. Давайте реалізуємо це в коді. Ланцюжок прототипів будується з кінця, тобто справа наліво.

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined
//Пошук властивостей відбувається до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті:
//Якщо інтерпретатор не знаходить власну властивість, то звертається до властивості [[Prototype]], тобто переходить за посиланням до об'єкта-прототипу, а потім — до прототипу прототипу за ланцюжком.Якщо інтерпретатор доходить до кінця ланцюжка і не знаходить властивості з таким ім'ям, то повертається undefined.

//Пример №6: ООП/Процедурне програмування/
//Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування, в якій програми структуровані як сукупність об'єктів. Ці об'єкти представляють реальні або абстрактні сутності: користувач, магазин, автомобіль тощо. Кожен з об'єктів містить дані (властивості) і методи для взаємодії з ними.

//Клас — це спосіб опису сутності, що визначає структуру та поведінку об'єктів, а також правила для взаємодії з цією сутністю (контракт). Вони виступають в якості шаблонів для створення нових об'єктів.

//У нашому прикладі клас визначає сутність: автомобіль.
//Властивостями класу будуть запчастини: двигун, колеса, фари тощо.
//Методами класу будуть дії: відчинити двері, завести двигун, збільшити швидкість тощо.

//Оголошення класу. Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте часто є потреба створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями й методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи.

//Оголошення класу має такий синтаксис:
// - ключове слово class;
// - ім'я класу (у прикладі: User);
// - тіло класу у фігурних дужках.

//class User { Тіло класу}.
// !!!Класи прийнято називати з великої літери, а в назві відображати тип об'єкта (іменника), що створюється.

//Після того як клас було оголошено, можна створити його екземпляр за допомогою спеціального оператора new, поставивши його перед викликом класу. Результатом виклику new User() буде екземпляр класу User. Він буде містити дані і мати поведінку, що описані у класі.

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

//Конструктор класу. Для ініціалізації екземпляра класу використовується метод constructor.
//Якщо його не визначити в явному вигляді, то буде створений конструктор за замовчуванням — порожня функція, яка не змінює екземпляр класу.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor() {
//     // ...
//   }
// }

//Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного виклику методу constructor.
// class User {
//   constructor() {
//     console.log("constructor call");
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}

//Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.
//Mетод constructor викликається в контексті створюваного екземпляра.
//Метод constructor використовується для ініціалізації власних властивостей екземпляра класу.

// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.table(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.table(poly); // { name: 'Poly', email: 'poly@mail.com' }
//Таким чином, this усередині конструктора посилається на новостворений об'єкт. Це дозволяє надавати кожному об'єкту властивості з однаковими іменами, але різними значеннями. Властивості name та email називаються публічними властивостями, оскільки вони є власними властивостями об'єкта-екземпляра.

//При створенні екземпляра першим викликається метод constructor.

//Пример №7: Об'єкт параметрів/Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
//До них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями, замість непов'язаного набору аргументів.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

//Пример №8: Методи класу
//Для роботи з властивостями майбутнього екземпляра використовуються методи класу. Методи визначаються (викликаються) в середині класу.
//Методи класу — це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора. На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними символами.
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   // Метод getEmail
//   getEmail() {
//     // ...
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     // ...
//   }
// }

//Для доступу до властивостей у методах використовується ключове слово this, оскільки методи будуть викликані в контексті об'єкта-екземпляра.
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
//Правильний спосіб звернутися до властивості username класу Customer у його методі — це this.username. У методі класу this використовується для посилання на поточний об'єкт, тобто на екземпляр класу Customer.

//Пример №9: Прототип екземпляру/Приватні властивості
//Інкапсуляція. Додаючи до імені властивості на початку символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі є обов'язковим.
// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

//Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи.
// #1:
// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

//#2:
// class Car {
//   #brand;
//   model;
//   price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

//Приватні властивості та приватні методи використовуються, щоб приховати деталі реалізації класу. Це дозволяє ізолювати (інкапсулювати) внутрішню реалізацію класу від зовнішнього коду й забезпечити контроль доступу до деяких властивостей і методів, щоб гарантувати безпеку та стабільність програми.

//Пример №10: Геттери і сеттери
//Геттери і сеттери — це спеціальний синтаксис оголошення методів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу, але дозволяють взаємодіяти з іншими властивостями зручнішим способом.
// #1:
// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email/ повертаємо значення приватної властивості #email за допомогою геттера
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email/ змінюємо її значення за допомогою сеттера
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// #2:
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

//Пример №11: Статичні властивості
//Крім публічних і приватних властивостей майбутнього екземпляра, у класі можна оголосити його власні властивості. Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості. Вони корисні для зберігання інформації, що стосується класу.

//Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static. Статичні властивості можна використовувати як у методах класу, так і поза класом.
// class MyClass {
//   static myProp = "value";
// }

// console.log(MyClass.myProp); // "value"

//У екземпляра немає доступу до статичних властивостей класу.
// class MyClass {
//   static myProp = "value";
// }

// const inst = new MyClass();
// console.log(inst.myProp); // undefined

// #1:
//Додамо класу користувача приватну властивість role — його роль, що визначає набір прав, наприклад: адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість roles — об'єкт із властивостями.
// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
//     basic: "basic",
//   };

//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

// #2:
// class Car {
//   static maxPrice = 50000;

//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//Пример №12: Статичні методи
//У класі можна оголосити не тільки методи майбутнього екземпляра, а й статичні методи. Статичні методи — це методи, доступні тільки класу. Вони можуть бути публічні та приватні.
//Синтаксис оголошення статичних методів майже аналогічний статичним властивостям. Єдина відмінність — значенням буде метод.
// class MyClass {
//   static myMethod() {
//     console.log("A static method");
//   }
// }

// MyClass.myMethod(); // "A static method"

// #1:
//Додамо у клас User:
// - статичну властивість takenEmails для зберігання зайнятих пошт користувачів;
// - статичний метод isEmailTaken, який перевіряє, чи доступна пошта;

//Під час ініціалізації екземпляра в конструкторі класу будемо додавати пошту в список зайнятих.
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true

//Пример №13: Наслідування класів
//Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського).
// class Parent {}

// class Child extends Parent {
//   // ...
// }

//Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також приватну властивість #email.
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

//*
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

//Пример №14: Конструктор дочірнього класу
//У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу.

//В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка.
//Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.
//Що буде. якщо не викликати super у конструкторі дочірнього класу? кщо не викликати super у конструкторі дочірнього класу, при спробі звернутися до this в конструкторі дочірнього класу виникне помилка.
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email);

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
// 	email: "mango@mail.com",
// 	posts: []
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"

//Пример №15:
