"use strict";

const marks = {
    english: 50,
    science: 30,
    maths: 70
};

async function update(object) {
    const newObject = {};
    for (let key in object) {
        if(object.hasOwnProperty(key)) {
            const value = object[key];
            newObject[key] = value + 10;
        }
    }
    return newObject;
}

let mappedMarks = update(marks);

module.exports = { mappedMarks };