// Generated by purs version 0.11.5
"use strict";
var CSS_Property = require("../CSS.Property");
var CSS_Size = require("../CSS.Size");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var Data_Function = require("../Data.Function");
var Data_Tuple_Nested = require("../Data.Tuple.Nested");
var width = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("width"));
var top = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("top"));
var right = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("right"));
var paddingTop = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("padding-top"));
var paddingRight = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("padding-right"));
var paddingLeft = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("padding-left"));
var paddingBottom = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("padding-bottom"));
var padding = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return CSS_Stylesheet.key(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valUnit)))))(CSS_String.fromString(CSS_Property.isStringKey)("padding"))(Data_Tuple_Nested.tuple4(a)(b)(c)(d));
            };
        };
    };
};
var minWidth = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("min-width"));
var minHeight = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("min-height"));
var maxWidth = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("max-width"));
var maxHeight = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("max-height"));
var marginTop = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("margin-top"));
var marginRight = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("margin-right"));
var marginLeft = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("margin-left"));
var marginBottom = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("margin-bottom"));
var margin = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return CSS_Stylesheet.key(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Property.valUnit)))))(CSS_String.fromString(CSS_Property.isStringKey)("margin"))(Data_Tuple_Nested.tuple4(a)(b)(c)(d));
            };
        };
    };
};
var lineHeight = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("line-height"));
var left = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("left"));
var height = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("height"));
var bottom = CSS_Stylesheet.key(CSS_Size.valSize)(CSS_String.fromString(CSS_Property.isStringKey)("bottom"));
module.exports = {
    bottom: bottom, 
    height: height, 
    left: left, 
    lineHeight: lineHeight, 
    margin: margin, 
    marginBottom: marginBottom, 
    marginLeft: marginLeft, 
    marginRight: marginRight, 
    marginTop: marginTop, 
    maxHeight: maxHeight, 
    maxWidth: maxWidth, 
    minHeight: minHeight, 
    minWidth: minWidth, 
    padding: padding, 
    paddingBottom: paddingBottom, 
    paddingLeft: paddingLeft, 
    paddingRight: paddingRight, 
    paddingTop: paddingTop, 
    right: right, 
    top: top, 
    width: width
};
