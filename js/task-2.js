'use strict';
/*jshint -W097*/

const user = {
    name: 'Vlad',
    position: 'Developer'
};

function checkProperty(str, obj) {
    return str in obj;
}

console.log(checkProperty('position', user));