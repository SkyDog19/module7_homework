'use strict';
/*jshint -W097*/

const person = {
    dream: 'get a good Job'
};

let user = Object.create(person);

user.name = 'Vlad';
user.hobby = 'sport';

function getOwnKeyObj(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

getOwnKeyObj(user);