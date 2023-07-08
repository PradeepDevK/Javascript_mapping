"use strict";

//Object.keys() to transform the keys of an Object into an array while keeping its corresponding values unchanged. 

const user = {
    name: "Pradeep Raj",
    age: 30,
    location: "Bangalore"
};

const mappedUser = Object.keys(user).map((key) => key.toUpperCase());

module.exports = { mappedUser };