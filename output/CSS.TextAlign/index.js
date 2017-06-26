// Generated by purs version 0.11.5
"use strict";
var CSS_Property = require("../CSS.Property");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var Control_Apply = require("../Control.Apply");
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var TextAlign = function (x) {
    return x;
};
var valTextAlign = new CSS_Property.Val(function (v) {
    return v;
});
var textAlign = CSS_Stylesheet.key(valTextAlign)(CSS_String.fromString(CSS_Property.isStringKey)("text-align"));
var startTextAlign = TextAlign(CSS_String.fromString(CSS_Property.isStringValue)("start"));
var rightTextAlign = TextAlign(CSS_String.fromString(CSS_Property.isStringValue)("right"));
var leftTextAlign = TextAlign(CSS_String.fromString(CSS_Property.isStringValue)("left"));
var justify = TextAlign(CSS_String.fromString(CSS_Property.isStringValue)("justify"));
var inheritTextAlign = TextAlign(CSS_String.fromString(CSS_Property.isStringValue)("inherit"));
var genericTextAlign = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.TextAlign.TextAlign" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(TextAlign))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.TextAlign.TextAlign", [ {
        sigConstructor: "CSS.TextAlign.TextAlign", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.TextAlign.TextAlign", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var eqTextAlign = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordTextAlign = new Data_Ord.Ord(function () {
    return eqTextAlign;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var endTextAlign = TextAlign(CSS_String.fromString(CSS_Property.isStringValue)("end"));
var center = TextAlign(CSS_String.fromString(CSS_Property.isStringValue)("center"));
module.exports = {
    TextAlign: TextAlign, 
    center: center, 
    endTextAlign: endTextAlign, 
    inheritTextAlign: inheritTextAlign, 
    justify: justify, 
    leftTextAlign: leftTextAlign, 
    rightTextAlign: rightTextAlign, 
    startTextAlign: startTextAlign, 
    textAlign: textAlign, 
    eqTextAlign: eqTextAlign, 
    ordTextAlign: ordTextAlign, 
    genericTextAlign: genericTextAlign, 
    valTextAlign: valTextAlign
};
