// Generated by purs version 0.11.5
"use strict";
var Data_Eq = require("../Data.Eq");
var Data_Functor = require("../Data.Functor");
var Data_Functor_Contravariant = require("../Data.Functor.Contravariant");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Data_Profunctor = require("../Data.Profunctor");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Prelude = require("../Prelude");
var Clown = function (x) {
    return x;
};
var showClown = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Clown " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var profunctorClown = function (dictContravariant) {
    return new Data_Profunctor.Profunctor(function (f) {
        return function (g) {
            return function (v) {
                return Data_Functor_Contravariant.cmap(dictContravariant)(f)(v);
            };
        };
    });
};
var ordClown = function (dictOrd) {
    return dictOrd;
};
var newtypeClown = new Data_Newtype.Newtype(function (n) {
    return n;
}, Clown);
var functorClown = new Data_Functor.Functor(function (v) {
    return function (v1) {
        return v1;
    };
});
var eqClown = function (dictEq) {
    return dictEq;
};
module.exports = {
    Clown: Clown, 
    newtypeClown: newtypeClown, 
    eqClown: eqClown, 
    ordClown: ordClown, 
    showClown: showClown, 
    functorClown: functorClown, 
    profunctorClown: profunctorClown
};
