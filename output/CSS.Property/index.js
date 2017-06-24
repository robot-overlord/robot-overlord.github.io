// Generated by purs version 0.11.5
"use strict";
var CSS_String = require("../CSS.String");
var Color = require("../Color");
var Control_Alternative = require("../Control.Alternative");
var Control_Apply = require("../Control.Apply");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_Monoid = require("../Data.Monoid");
var Data_NonEmpty = require("../Data.NonEmpty");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Profunctor_Strong = require("../Data.Profunctor.Strong");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var Prefixed = (function () {
    function Prefixed(value0) {
        this.value0 = value0;
    };
    Prefixed.create = function (value0) {
        return new Prefixed(value0);
    };
    return Prefixed;
})();
var Plain = (function () {
    function Plain(value0) {
        this.value0 = value0;
    };
    Plain.create = function (value0) {
        return new Plain(value0);
    };
    return Plain;
})();
var Value = function (x) {
    return x;
};
var Literal = function (x) {
    return x;
};
var Key = function (x) {
    return x;
};
var Val = function (value) {
    this.value = value;
};
var value = function (dict) {
    return dict.value;
};
var valValue = new Val(Control_Category.id(Control_Category.categoryFn));
var semigroupPrefixed = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        if (v instanceof Plain && v1 instanceof Plain) {
            return Plain.create(v.value0 + v1.value0);
        };
        if (v instanceof Plain && v1 instanceof Prefixed) {
            return Prefixed.create(Data_Functor.map(Data_Functor.functorArray)(Data_Profunctor_Strong.second(Data_Profunctor_Strong.strongFn)(function (v2) {
                return v.value0 + v2;
            }))(v1.value0));
        };
        if (v instanceof Prefixed && v1 instanceof Plain) {
            return Prefixed.create(Data_Functor.map(Data_Functor.functorArray)(Data_Profunctor_Strong.second(Data_Profunctor_Strong.strongFn)(function (v2) {
                return v1.value0 + v2;
            }))(v.value0));
        };
        if (v instanceof Prefixed && v1 instanceof Prefixed) {
            return Prefixed.create(Data_Semigroup.append(Data_Semigroup.semigroupArray)(v.value0)(v1.value0));
        };
        throw new Error("Failed pattern match at CSS.Property line 26, column 3 - line 26, column 46: " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var semigroupValue = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        return Value(Data_Semigroup.append(semigroupPrefixed)(v)(v1));
    };
});
var quote = function (s) {
    return "\"" + (s + "\"");
};
var plain = function (v) {
    if (v instanceof Prefixed) {
        return Data_Maybe.fromMaybe("")(Data_Tuple.lookup(Data_Foldable.foldableArray)(Data_Eq.eqString)("")(v.value0));
    };
    if (v instanceof Plain) {
        return v.value0;
    };
    throw new Error("Failed pattern match at CSS.Property line 35, column 1 - line 35, column 50: " + [ v.constructor.name ]);
};
var monoidPrefixed = new Data_Monoid.Monoid(function () {
    return semigroupPrefixed;
}, new Plain(Data_Monoid.mempty(Data_Monoid.monoidString)));
var monoidValue = new Data_Monoid.Monoid(function () {
    return semigroupValue;
}, Data_Monoid.mempty(monoidPrefixed));
var isStringPrefixed = new CSS_String.IsString(Plain.create);
var isStringValue = new CSS_String.IsString(function ($145) {
    return Value(CSS_String.fromString(isStringPrefixed)($145));
});
var noCommas = function (dictVal) {
    return function ($146) {
        return Data_Foldable.intercalate(Data_Foldable.foldableArray)(monoidValue)(CSS_String.fromString(isStringValue)(" "))((function (v) {
            return Data_Functor.map(Data_Functor.functorArray)(value(dictVal))(v);
        })($146));
    };
};
var valColor = new Val(function ($147) {
    return CSS_String.fromString(isStringValue)(Color.cssStringHSLA($147));
});
var valList = function (dictVal) {
    return new Val(function ($148) {
        return Data_Foldable.intercalate(Data_Foldable.foldableArray)(monoidValue)(CSS_String.fromString(isStringValue)(", "))((function (v) {
            return Data_Functor.map(Data_Functor.functorArray)(value(dictVal))(v);
        })($148));
    });
};
var valNonEmpty = function (dictVal) {
    return new Val(function ($149) {
        return value(valList(dictVal))(Data_NonEmpty.oneOf(Control_Alternative.alternativeArray)($149));
    });
};
var valLiteral = new Val(function (v) {
    return CSS_String.fromString(isStringValue)(quote(v));
});
var valNumber = new Val(function ($150) {
    return CSS_String.fromString(isStringValue)(Data_Show.show(Data_Show.showNumber)($150));
});
var valString = new Val(CSS_String.fromString(isStringValue));
var valTuple = function (dictVal) {
    return function (dictVal1) {
        return new Val(function (v) {
            return Data_Semigroup.append(semigroupValue)(value(dictVal)(v.value0))(Data_Semigroup.append(semigroupValue)(CSS_String.fromString(isStringValue)(" "))(value(dictVal1)(v.value1)));
        });
    };
};
var valUnit = new Val(function (u) {
    return CSS_String.fromString(isStringValue)("");
});
var isStringKey = new CSS_String.IsString(function ($151) {
    return Key(CSS_String.fromString(isStringPrefixed)($151));
});
var genericPrefixed = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Property.Prefixed" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Prefixed.create))(Data_Generic.fromSpine(Data_Generic.genericArray(Data_Generic.genericTuple(Data_Generic.genericString)(Data_Generic.genericString)))(v["value1"][0](Data_Unit.unit)));
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Property.Plain" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Plain.create))(Data_Generic.fromSpine(Data_Generic.genericString)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Property.Prefixed", [ {
        sigConstructor: "CSS.Property.Prefixed", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericArray(Data_Generic.genericTuple(Data_Generic.genericString)(Data_Generic.genericString)))(Data_Generic.anyProxy);
        } ]
    }, {
        sigConstructor: "CSS.Property.Plain", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    if (v instanceof Prefixed) {
        return new Data_Generic.SProd("CSS.Property.Prefixed", [ function ($dollarq) {
            return Data_Generic.toSpine(Data_Generic.genericArray(Data_Generic.genericTuple(Data_Generic.genericString)(Data_Generic.genericString)))(v.value0);
        } ]);
    };
    if (v instanceof Plain) {
        return new Data_Generic.SProd("CSS.Property.Plain", [ function ($dollarq) {
            return Data_Generic.toSpine(Data_Generic.genericString)(v.value0);
        } ]);
    };
    throw new Error("Failed pattern match at CSS.Property line 20, column 1 - line 20, column 52: " + [ v.constructor.name ]);
});
var genericValue = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Property.Value" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Value))(Data_Generic.fromSpine(genericPrefixed)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Property.Value", [ {
        sigConstructor: "CSS.Property.Value", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(genericPrefixed)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Property.Value", [ function ($dollarq) {
        return Data_Generic.toSpine(genericPrefixed)(v);
    } ]);
});
var genericLiteral = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Property.Literal" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Literal))(Data_Generic.fromSpine(Data_Generic.genericString)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Property.Literal", [ {
        sigConstructor: "CSS.Property.Literal", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Property.Literal", [ function ($dollarq) {
        return Data_Generic.toSpine(Data_Generic.genericString)(v);
    } ]);
});
var genericKey = function (dictGeneric) {
    return new Data_Generic.Generic(function (v) {
        if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Property.Key" && v.value1.length === 1)) {
            return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Key))(Data_Generic.fromSpine(genericPrefixed)(v["value1"][0](Data_Unit.unit)));
        };
        return Data_Maybe.Nothing.value;
    }, function ($dollarq) {
        return new Data_Generic.SigProd("CSS.Property.Key", [ {
            sigConstructor: "CSS.Property.Key", 
            sigValues: [ function ($dollarq1) {
                return Data_Generic.toSignature(genericPrefixed)(Data_Generic.anyProxy);
            } ]
        } ]);
    }, function (v) {
        return new Data_Generic.SProd("CSS.Property.Key", [ function ($dollarq) {
            return Data_Generic.toSpine(genericPrefixed)(v);
        } ]);
    });
};
var eqPrefixed = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Prefixed && y instanceof Prefixed) {
            return Data_Eq.eq(Data_Eq.eqArray(Data_Tuple.eqTuple(Data_Eq.eqString)(Data_Eq.eqString)))(x.value0)(y.value0);
        };
        if (x instanceof Plain && y instanceof Plain) {
            return x.value0 === y.value0;
        };
        return false;
    };
});
var eqValue = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(eqPrefixed)(x)(y);
    };
});
var ordPrefixed = new Data_Ord.Ord(function () {
    return eqPrefixed;
}, function (x) {
    return function (y) {
        if (x instanceof Prefixed && y instanceof Prefixed) {
            return Data_Ord.compare(Data_Ord.ordArray(Data_Tuple.ordTuple(Data_Ord.ordString)(Data_Ord.ordString)))(x.value0)(y.value0);
        };
        if (x instanceof Prefixed) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Prefixed) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Plain && y instanceof Plain) {
            return Data_Ord.compare(Data_Ord.ordString)(x.value0)(y.value0);
        };
        throw new Error("Failed pattern match at CSS.Property line 19, column 1 - line 19, column 44: " + [ x.constructor.name, y.constructor.name ]);
    };
});
var ordValue = new Data_Ord.Ord(function () {
    return eqValue;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(ordPrefixed)(x)(y);
    };
});
var eqLiteral = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordLiteral = new Data_Ord.Ord(function () {
    return eqLiteral;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
var eqKey = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            return Data_Eq.eq(eqPrefixed)(x)(y);
        };
    });
};
var ordKey = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqKey(dictOrd.Eq0());
    }, function (x) {
        return function (y) {
            return Data_Ord.compare(ordPrefixed)(x)(y);
        };
    });
};
var cast = function (v) {
    return v;
};
module.exports = {
    Key: Key, 
    Literal: Literal, 
    Prefixed: Prefixed, 
    Plain: Plain, 
    Value: Value, 
    Val: Val, 
    cast: cast, 
    noCommas: noCommas, 
    plain: plain, 
    quote: quote, 
    value: value, 
    eqPrefixed: eqPrefixed, 
    ordPrefixed: ordPrefixed, 
    genericPrefixed: genericPrefixed, 
    isStringPrefixed: isStringPrefixed, 
    semigroupPrefixed: semigroupPrefixed, 
    monoidPrefixed: monoidPrefixed, 
    eqKey: eqKey, 
    ordKey: ordKey, 
    genericKey: genericKey, 
    isStringKey: isStringKey, 
    eqValue: eqValue, 
    ordValue: ordValue, 
    genericValue: genericValue, 
    isStringValue: isStringValue, 
    semigroupValue: semigroupValue, 
    monoidValue: monoidValue, 
    eqLiteral: eqLiteral, 
    ordLiteral: ordLiteral, 
    genericLiteral: genericLiteral, 
    valLiteral: valLiteral, 
    valValue: valValue, 
    valString: valString, 
    valUnit: valUnit, 
    valTuple: valTuple, 
    valNumber: valNumber, 
    valList: valList, 
    valNonEmpty: valNonEmpty, 
    valColor: valColor
};
