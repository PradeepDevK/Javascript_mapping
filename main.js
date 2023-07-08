"use strict";

const mapping_object_keys = require('./mapping_object_keys');
const mapping_object_values = require('./mapping_object_values');
const mapping_object_properties = require('./mapping_object_properties');
const mapping_custom_functions = require('./mapping_custom_functions');


/**
 * map() method creates an new array from calling a function for every array element
 */

const numbers = [10, 20, 30, 40];

//map() with increase 10
const newNumbers = numbers.map((num) => num +10 );
console.log("#### Simple map() ####");
console.log(newNumbers);

//mapping object keys
console.log("#### mapping object keys ####");
console.log(mapping_object_keys.mappedUser);

//mapping object values
console.log("#### mapping object values ####");
console.log(mapping_object_values.mappedMarks);

//mapping object props
console.log("#### mapping object properties ####");
console.log(mapping_object_properties.mappedMarks);

//mapping custom functions
console.log("#### mapping custom functions ####");
console.log(mapping_custom_functions.mappedMarks);