// Generated by purs version 0.11.5
"use strict";
var Data_Bounded = require("../Data.Bounded");
var Data_Enum = require("../Data.Enum");
var Data_Eq = require("../Data.Eq");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Show = require("../Data.Show");
var Prelude = require("../Prelude");
var NETWORK_EMPTY = (function () {
    function NETWORK_EMPTY() {

    };
    NETWORK_EMPTY.value = new NETWORK_EMPTY();
    return NETWORK_EMPTY;
})();
var NETWORK_IDLE = (function () {
    function NETWORK_IDLE() {

    };
    NETWORK_IDLE.value = new NETWORK_IDLE();
    return NETWORK_IDLE;
})();
var NETWORK_LOADING = (function () {
    function NETWORK_LOADING() {

    };
    NETWORK_LOADING.value = new NETWORK_LOADING();
    return NETWORK_LOADING;
})();
var NETWORK_NO_SOURCE = (function () {
    function NETWORK_NO_SOURCE() {

    };
    NETWORK_NO_SOURCE.value = new NETWORK_NO_SOURCE();
    return NETWORK_NO_SOURCE;
})();
var toEnumNetworkState = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(NETWORK_EMPTY.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(NETWORK_IDLE.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(NETWORK_LOADING.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just(NETWORK_NO_SOURCE.value);
    };
    return Data_Maybe.Nothing.value;
};
var showNetworkState = new Data_Show.Show(function (v) {
    if (v instanceof NETWORK_EMPTY) {
        return "NETWORK_EMPTY";
    };
    if (v instanceof NETWORK_IDLE) {
        return "NETWORK_IDLE";
    };
    if (v instanceof NETWORK_LOADING) {
        return "NETWORK_LOADING";
    };
    if (v instanceof NETWORK_NO_SOURCE) {
        return "NETWORK_NO_SOURCE";
    };
    throw new Error("Failed pattern match at DOM.HTML.HTMLMediaElement.NetworkState line 30, column 3 - line 31, column 3: " + [ v.constructor.name ]);
});
var fromEnumNetworkState = function (v) {
    if (v instanceof NETWORK_EMPTY) {
        return 0;
    };
    if (v instanceof NETWORK_IDLE) {
        return 1;
    };
    if (v instanceof NETWORK_LOADING) {
        return 2;
    };
    if (v instanceof NETWORK_NO_SOURCE) {
        return 3;
    };
    throw new Error("Failed pattern match at DOM.HTML.HTMLMediaElement.NetworkState line 46, column 3 - line 50, column 26: " + [ v.constructor.name ]);
};
var eqNetworkState = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof NETWORK_EMPTY && y instanceof NETWORK_EMPTY) {
            return true;
        };
        if (x instanceof NETWORK_IDLE && y instanceof NETWORK_IDLE) {
            return true;
        };
        if (x instanceof NETWORK_LOADING && y instanceof NETWORK_LOADING) {
            return true;
        };
        if (x instanceof NETWORK_NO_SOURCE && y instanceof NETWORK_NO_SOURCE) {
            return true;
        };
        return false;
    };
});
var ordNetworkState = new Data_Ord.Ord(function () {
    return eqNetworkState;
}, function (x) {
    return function (y) {
        if (x instanceof NETWORK_EMPTY && y instanceof NETWORK_EMPTY) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof NETWORK_EMPTY) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof NETWORK_EMPTY) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof NETWORK_IDLE && y instanceof NETWORK_IDLE) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof NETWORK_IDLE) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof NETWORK_IDLE) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof NETWORK_LOADING && y instanceof NETWORK_LOADING) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof NETWORK_LOADING) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof NETWORK_LOADING) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof NETWORK_NO_SOURCE && y instanceof NETWORK_NO_SOURCE) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at DOM.HTML.HTMLMediaElement.NetworkState line 14, column 1 - line 14, column 52: " + [ x.constructor.name, y.constructor.name ]);
    };
});
var enumNetworkState = new Data_Enum.Enum(function () {
    return ordNetworkState;
}, Data_Enum.defaultPred(toEnumNetworkState)(fromEnumNetworkState), Data_Enum.defaultSucc(toEnumNetworkState)(fromEnumNetworkState));
var boundedNetworkState = new Data_Bounded.Bounded(function () {
    return ordNetworkState;
}, NETWORK_EMPTY.value, NETWORK_NO_SOURCE.value);
var boundedEnumNetworkState = new Data_Enum.BoundedEnum(function () {
    return boundedNetworkState;
}, function () {
    return enumNetworkState;
}, 4, fromEnumNetworkState, toEnumNetworkState);
module.exports = {
    NETWORK_EMPTY: NETWORK_EMPTY, 
    NETWORK_IDLE: NETWORK_IDLE, 
    NETWORK_LOADING: NETWORK_LOADING, 
    NETWORK_NO_SOURCE: NETWORK_NO_SOURCE, 
    eqNetworkState: eqNetworkState, 
    ordNetworkState: ordNetworkState, 
    boundedNetworkState: boundedNetworkState, 
    enumNetworkState: enumNetworkState, 
    boundedEnumNetworkState: boundedEnumNetworkState, 
    showNetworkState: showNetworkState
};
