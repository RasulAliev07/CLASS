**1. Область Видимости (Scope)**

Область видимости в JavaScript определяет, где переменные и функции доступны в вашем коде. В JavaScript существуют несколько уровней области видимости:

**1.1. Глобальная Область Видимости**
Глобальная область видимости охватывает весь код, который находится вне всех функций и блоков. Переменные и функции, объявленные в глобальной области, доступны из любой другой части вашего кода.

*Пример*
~~~javascript
var globalVar = "I am a global variable";

function printGlobal() {
    console.log(globalVar); // Доступно здесь
}

printGlobal(); // Выведет: "I am a global variable"
console.log(globalVar); // Выведет: "I am a global variable"
~~~

**1.2. Локальная Область Видимости**
Локальная область видимости создается внутри функций. Переменные и функции, объявленные внутри функции, не доступны вне этой функции. Это позволяет инкапсулировать данные и логику.

*Пример*
~~~javascript
function myFunction() {
    var localVar = "I am local";
    console.log(localVar); // Доступно здесь
}

myFunction();
console.log(localVar); // Ошибка: localVar не определен
~~~

**1.3. Блоковая Область Видимости**
С ES6 появились let и const, которые создают блоковую область видимости. Это означает, что переменные, объявленные с помощью let и const, доступны только внутри блока {} (например, в конструкциях if, for, и т.д.).

*Пример*
~~~javascript
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // Доступно здесь
}

console.log(blockVar); // Ошибка: blockVar не определен
~~~

**1.4. Область Видимости Замыканий (Closures)**
Замыкание — это функция, которая сохраняет доступ к переменным из своей лексической области видимости даже после того, как эта функция завершила выполнение.

*Пример*
~~~javascript
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Выведет: 1
console.log(counter()); // Выведет: 2
~~~
В этом примере, функция createCounter возвращает функцию, которая имеет доступ к переменной count, даже после того, как createCounter завершила выполнение. Это и есть замыкание.

**1.5. Лексическая Область Видимости**
Лексическая область видимости — это концепция, по которой область видимости определяется на основе положения функции в исходном коде. Это означает, что внутренние функции могут получить доступ к переменным своих внешних функций.

~~~javascript
function outerFunction() {
    let outerVar = "I am from outer";
    
    function innerFunction() {
        console.log(outerVar); // Доступ к переменной outerVar
    }
    
    innerFunction();
}

outerFunction(); // Выведет: "I am from outer"
~~~

**2. Подъем (Hoisting)**

Hoisting — это поведение JavaScript, при котором объявления переменных и функций поднимаются в начало их области видимости перед выполнением кода. Важно понимать, что поднимаются только объявления, но не инициализации.

**2.1. Подъем Переменных**

Когда вы используете var для объявления переменной, JavaScript поднимает это объявление к началу функции или глобальной области видимости. Инициализация остаётся на месте.

**Примеры**
~~~javascript
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Выведет: "I am hoisted"
~~~

В этом примере, hoistedVar доступна в функции до того, как ей было присвоено значение, но значение undefined выводится до инициализации.

С let и const, переменные также поднимаются, но они находятся в "временной мертвой зоне" до их фактического объявления. Это означает, что доступ к ним до объявления вызовет ошибку.

**Примеры**
~~~javascriipt
console.log(tempVar); // Ошибка: Cannot access 'tempVar' before initialization
let tempVar = "I am not hoisted";
~~~

**2.2. Подъем Функций**
Функции, объявленные через function declaration, полностью поднимаются. Это значит, что вы можете вызвать функцию до её определения в коде.

**Примеры**
~~~javascript
hoistedFunction(); // Работает, так как функция полностью поднимается

function hoistedFunction() {
    console.log("I am hoisted!");
}

hoistedFunction(); // Выведет: "I am hoisted!"
~~~

Функции, объявленные через function expression или стрелочные функции, не поднимаются. Их объявления поднимаются, но они не инициализируются до соответствующего места в коде.
~~~javascript
nonHoistedFunction(); // Ошибка: nonHoistedFunction is not a function

var nonHoistedFunction = function() {
    console.log("I am not hoisted!");
};

nonHoistedFunction(); // Выведет: "I am not hoisted!"
~~~

**2.3. Подъем с let и const**
let и const имеют особенности при подъеме. Объявления переменных с let и const поднимаются, но они остаются в "временной мертвой зоне" (Temporal Dead Zone) до тех пор, пока не будет достигнуто их объявление.
~~~javascript
console.log(notHoistedConst); // Ошибка: Cannot access 'notHoistedConst' before initialization
const notHoistedConst = "I am not hoisted";
~~~

**2.4. Подъем и Функции**
Функции, объявленные через function declaration, полностью поднимаются. Однако функции, объявленные через function expression, не поднимаются как таковые.
~~~javascript
console.log(hoistedFunction); // undefined
console.log(hoistedFunction()); // Ошибка: hoistedFunction is not a function

var hoistedFunction = function() {
    console.log("I am not hoisted!");
};
~~~