***1. Методы строк (Strings)***
Строки в JavaScript являются последовательностями символов и представляют собой один из самых часто используемых типов данных.
**1.1 Создание строк**
Строки можно создавать несколькими способами:
~~~javascript
let str1 = "Hello, world!"; // Двойные кавычки
let str2 = 'Hello, world!'; // Одинарные кавычки
let str3 = `Hello, world!`; // Шаблонные строки (ES6)
~~~

**1.2 Основные методы строк**
**1.2.1 Длина строки**

Метод length возвращает количество символов в строке.
~~~js
let str = "Hello, world!";
console.log(str.length); // 13
~~~
**.2.2 Доступ к символам**

+ charAt(index) — возвращает символ по указанному индексу.
~~~js
let str = "Hello, world!";
console.log(str.charAt(0)); // "H"
~~~

+ str[index] — доступ к символу через индекс.
~~~js
let str = "Hello, world!";
console.log(str[0]); // "H"
~~~
**1.2.3 Изменение регистра**

+ toUpperCase() — возвращает строку в верхнем регистре.
~~~js
let str = "Hello, world!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
~~~
+ toLowerCase() — возвращает строку в нижнем регистре.
~~~js
+ let str = "Hello, world!";
console.log(str.toLowerCase()); // "hello, world!"
~~~
**1.2.4 Поиск подстроки**

+ indexOf(searchValue, start) — возвращает индекс первого вхождения подстроки. Если не найдено, возвращает -1.
~~~js
let str = "Hello, world!";
console.log(str.indexOf("world")); // 7
~~~

+ lastIndexOf(searchValue, start) — возвращает индекс последнего вхождения подстроки.
~~~js
let str = "Hello, world!";
console.log(str.lastIndexOf("o")); // 8
~~~
+ includes(searchValue, start) — возвращает true, если подстрока найдена, иначе false.
~~~js
let str = "Hello, world!";
console.log(str.includes("world")); // true
~~~
+ startsWith(searchString, position) — возвращает true, если строка начинается с указанной подстроки.
~~~js
let str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
~~~
+ endsWith(searchString, length) — возвращает true, если строка заканчивается указанной подстрокой.
~~~js
let str = "Hello, world!";
console.log(str.endsWith("world!")); // true
~~~
**1.2.5 Извлечение подстрок**

+ slice(start, end) — возвращает часть строки от start до end (не включая end).
~~~js
let str = "Hello, world!";
console.log(str.slice(0, 5)); // "Hello"
~~~
+ substring(start, end) — возвращает часть строки от start до end (не включая end).
~~~js
let str = "Hello, world!";
console.log(str.substring(0, 5)); // "Hello"
~~~
**1.2.6 Замена подстрок**

+ replace(searchValue, newValue) — заменяет первое вхождение searchValue на newValue.
~~~js
let str = "Hello, world!";
console.log(str.replace("world", "JavaScript")); // "Hello, JavaScript!"
~~~
+ replaceAll(searchValue, newValue) — заменяет все вхождения searchValue на newValue (начиная с ES2021).
~~~js
let str = "Hello, world!";
console.log(str.replaceAll("o", "0")); // "Hell0, w0rld!"
~~~
**1.2.7 Разделение и объединение строк**

+ split(separator, limit) — разделяет строку на массив подстрок по разделителю
~~~js
let str = "Hello, world!";
let arr = str.split(", ");
console.log(arr); // ["Hello", "world!"]
~~~
**1.2.8 Удаление пробелов**

+ trim() — удаляет пробелы в начале и в конце строки.
~~~js
let str = "   Hello, world!   ";
console.log(str.trim()); // "Hello, world!"
~~~
**1.2.9 Шаблонные строки (Template Literals)**

Шаблонные строки, обозначенные косыми кавычками (`), позволяют включать переменные и выражения внутри строки и поддерживают многострочные строки.

+ Интерполяция выражений
~~~js
let name = "John";
let age = 30;
let str = `My name is ${name} and I am ${age} years old.`;
console.log(str); // "My name is John and I am 30 years old."
~~~
+ Многострочные строки
~~~js
let str = `This is a
multi-line string
in JavaScript.`;
console.log(str);
~~~
**2. Методы чисел (Numbers)**

Числа в JavaScript представляют собой примитивный тип данных и предоставляют методы для работы с арифметикой, преобразованием и форматированием чисел.

**2.2 Методы чисел**

*2.2.1 Преобразование типов*
+ Number(value) — преобразует значение в число.
~~~js
let str = "123";
let num = Number(str);
console.log(num); // 123

let invalidNum = Number("abc");
console.log(invalidNum); // NaN
~~~
+ parseInt(value, radix) — преобразует строку в целое число с указанной системой счисления (основание).
~~~js
let str = "123";
let num = parseInt(str);
console.log(num); // 123
~~~