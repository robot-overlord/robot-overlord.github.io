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
var TextWhitespace = function (x) {
    return x;
};
var whitespacePreWrap = TextWhitespace(CSS_String.fromString(CSS_Property.isStringValue)("pre-wrap"));
var whitespacePreLine = TextWhitespace(CSS_String.fromString(CSS_Property.isStringValue)("pre-line"));
var whitespacePre = TextWhitespace(CSS_String.fromString(CSS_Property.isStringValue)("pre"));
var whitespaceNormal = TextWhitespace(CSS_String.fromString(CSS_Property.isStringValue)("normal"));
var whitespaceNoWrap = TextWhitespace(CSS_String.fromString(CSS_Property.isStringValue)("nowrap"));
var valTextWhitespace = new CSS_Property.Val(function (v) {
    return v;
});
var textWhitespace = CSS_Stylesheet.key(valTextWhitespace)(CSS_String.fromString(CSS_Property.isStringKey)("white-space"));
var genericTextWhitespace = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Text.Whitespace.TextWhitespace" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(TextWhitespace))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Text.Whitespace.TextWhitespace", [ {
        sigConstructor: "CSS.Text.Whitespace.TextWhitespace", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Text.Whitespace.TextWhitespace", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var eqTextWhitespace = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordTextWhitespace = new Data_Ord.Ord(function () {
    return eqTextWhitespace;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
module.exports = {
    textWhitespace: textWhitespace, 
    whitespaceNoWrap: whitespaceNoWrap, 
    whitespaceNormal: whitespaceNormal, 
    whitespacePre: whitespacePre, 
    whitespacePreLine: whitespacePreLine, 
    whitespacePreWrap: whitespacePreWrap, 
    eqTextWhitespace: eqTextWhitespace, 
    ordTextWhitespace: ordTextWhitespace, 
    genericTextWhitespace: genericTextWhitespace, 
    valTextWhitespace: valTextWhitespace
};
