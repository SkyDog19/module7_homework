'use strict';
/*jshint -W097*/

const user = {
    name: 'ivan',
    dream: 'win',
    age: 21,
    position: 'active',
    hello: function () {
        console.log(`Hello ${user.name}, you are ${user.age} ,you want to ${user.dream}`);
    }
};

user.job = 'developer'; //добавляем свойство job со значением 'developer' в объект user

delete user.position; //удаляем свойство position внутри объекта user

console.log(user);

console.log(user.hello()); //используем метод для объекта