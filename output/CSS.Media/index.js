"use strict";
var CSS_Property = require("../CSS.Property");
var CSS_Size = require("../CSS.Size");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Function = require("../Data.Function");
var Data_Maybe = require("../Data.Maybe");
var Prelude = require("../Prelude");
var screen = CSS_Stylesheet.MediaType(CSS_String.fromString(CSS_Property.isStringValue)("screen"));
var maxWidth = function ($0) {
    return CSS_Stylesheet.Feature.create("max-width")(Data_Maybe.Just.create(CSS_Property.value(CSS_Size.valSize)($0)));
};
module.exports = {
    maxWidth: maxWidth, 
    screen: screen
};
