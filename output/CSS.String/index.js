// Generated by purs version 0.11.5
"use strict";
var Control_Category = require("../Control.Category");
var Prelude = require("../Prelude");
var IsString = function (fromString) {
    this.fromString = fromString;
};
var isStringString = new IsString(Control_Category.id(Control_Category.categoryFn));
var fromString = function (dict) {
    return dict.fromString;
};
module.exports = {
    IsString: IsString, 
    fromString: fromString, 
    isStringString: isStringString
};
