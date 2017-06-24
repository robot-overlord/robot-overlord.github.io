// Generated by purs version 0.11.5
"use strict";
var Color = require("../Color");
var Data_Ring = require("../Data.Ring");
var Prelude = require("../Prelude");
var triad = function (c) {
    return [ c, Color.rotateHue(-120.0)(c), Color.rotateHue(120.0)(c) ];
};
var tetrad = function (c) {
    return [ c, Color.rotateHue(30.0)(c), Color.rotateHue(180.0)(c), Color.rotateHue(210.0)(c) ];
};
var splitComplementary = function (c) {
    return [ c, Color.rotateHue(-165.0)(c), Color.rotateHue(165.0)(c) ];
};
var shades = function (c) {
    return [ Color.lighten(0.2)(c), c, Color.darken(0.2)(c) ];
};
var analogous = function (c) {
    return [ Color.rotateHue(-30.0)(c), c, Color.rotateHue(30.0)(c) ];
};
module.exports = {
    analogous: analogous, 
    shades: shades, 
    splitComplementary: splitComplementary, 
    tetrad: tetrad, 
    triad: triad
};
