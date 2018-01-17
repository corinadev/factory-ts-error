"use strict";
exports.__esModule = true;
var Factory = require("factory.ts");
var personFactory = Factory.makeFactory({
    id: Factory.each(function (i) { return i; }),
    firstName: 'Bob',
    lastName: 'Smith',
    fullName: 'Robert J. Smith, Jr.',
    age: Factory.each(function (i) { return 20 + (i % 10); })
});
