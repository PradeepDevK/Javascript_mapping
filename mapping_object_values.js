"use strict";

//Object.values() which is used to transform the values of an object into an array while keeping the keys intact. 

const marks = {
    english: 50,
    science: 30,
    maths: 70
};

const mappedMarks = Object.values(marks).map((value) => value + 5);

module.exports = { mappedMarks };