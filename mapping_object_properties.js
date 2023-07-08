"use strict";

//Object.entries() which returns each key-value pair as a separate array. So our final output is basically an array of arrays! 

const marks = {
    english: 50,
    science: 30,
    maths: 70
};

const mappedMarks = Object.entries(marks).map(([subject, mark]) => ({
    subject,
    mark: (mark >= 40) ? "PASS" : "FAIL"
}));

module.exports = { mappedMarks };