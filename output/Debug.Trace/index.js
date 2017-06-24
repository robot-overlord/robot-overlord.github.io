// Generated by purs version 0.11.5
"use strict";
var $foreign = require("./foreign");
var Control_Applicative = require("../Control.Applicative");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Show = require("../Data.Show");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var DebugWarning = {};
var warn = function (dictWarn) {
    return DebugWarning;
};
var traceShowM = function (dictDebugWarning) {
    return function (dictShow) {
        return function (dictMonad) {
            return function (s) {
                return $foreign.traceAny(dictDebugWarning)(Data_Show.show(dictShow)(s))(function (v) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(s);
                });
            };
        };
    };
};
var traceShow = function (dictDebugWarning) {
    return function (dictShow) {
        return function ($21) {
            return $foreign.traceAny(dictDebugWarning)(Data_Show.show(dictShow)($21));
        };
    };
};
var traceAnyM = function (dictDebugWarning) {
    return function (dictMonad) {
        return function (s) {
            return $foreign.traceAny(dictDebugWarning)(s)(function (v) {
                return Control_Applicative.pure(dictMonad.Applicative0())(s);
            });
        };
    };
};
var traceAnyA = function (dictDebugWarning) {
    return function (dictApplicative) {
        return function (s) {
            return $foreign.traceAny(dictDebugWarning)(s)(function (v) {
                return Control_Applicative.pure(dictApplicative)(Data_Unit.unit);
            });
        };
    };
};
var traceShowA = function (dictDebugWarning) {
    return function (dictShow) {
        return function (dictApplicative) {
            return function ($22) {
                return traceAnyA(dictDebugWarning)(dictApplicative)(Data_Show.show(dictShow)($22));
            };
        };
    };
};
var traceA = function (dictDebugWarning) {
    return function (dictApplicative) {
        return traceAnyA(dictDebugWarning)(dictApplicative);
    };
};
var trace = function (dictDebugWarning) {
    return $foreign.traceAny(dictDebugWarning);
};
var spy = function (dictDebugWarning) {
    return function (a) {
        return $foreign.traceAny(dictDebugWarning)(a)(function (v) {
            return a;
        });
    };
};
module.exports = {
    DebugWarning: DebugWarning, 
    spy: spy, 
    trace: trace, 
    traceA: traceA, 
    traceAnyA: traceAnyA, 
    traceAnyM: traceAnyM, 
    traceShow: traceShow, 
    traceShowA: traceShowA, 
    traceShowM: traceShowM, 
    warn: warn, 
    traceAny: $foreign.traceAny
};
