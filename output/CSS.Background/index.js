// Generated by purs version 0.11.5
"use strict";
var CSS_Box = require("../CSS.Box");
var CSS_Color = require("../CSS.Color");
var CSS_Common = require("../CSS.Common");
var CSS_Property = require("../CSS.Property");
var CSS_Size = require("../CSS.Size");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var Control_Apply = require("../Control.Apply");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var Side = function (x) {
    return x;
};
var Location = function (x) {
    return x;
};
var Direction = function (x) {
    return x;
};
var BackgroundSize = function (x) {
    return x;
};
var BackgroundRepeat = function (x) {
    return x;
};
var BackgroundPosition = function (x) {
    return x;
};
var BackgroundOrigin = function (x) {
    return x;
};
var BackgroundImage = function (x) {
    return x;
};
var BackgroundClip = function (x) {
    return x;
};
var BackgroundAttachment = function (x) {
    return x;
};
var Background = function (Val0, background) {
    this.Val0 = Val0;
    this.background = background;
};
var Loc = function (Val0, location) {
    this.Val0 = Val0;
    this.location = location;
};
var valSide = new CSS_Property.Val(function (v) {
    return v;
});
var valLocation = new CSS_Property.Val(function (v) {
    return v;
});
var valDirection = new CSS_Property.Val(function (v) {
    return v;
});
var valBackgroundSize = new CSS_Property.Val(function (v) {
    return v;
});
var valBackgroundRepeat = new CSS_Property.Val(function (v) {
    return v;
});
var xyRepeat = function (a) {
    return function (b) {
        return CSS_Property.value(CSS_Property.valTuple(valBackgroundRepeat)(valBackgroundRepeat))(new Data_Tuple.Tuple(a, b));
    };
};
var valBackgroundPosition = new CSS_Property.Val(function (v) {
    return v;
});
var valBackgroundOrigin = new CSS_Property.Val(function (v) {
    return v;
});
var valBackgroundImage = new CSS_Property.Val(function (v) {
    return v;
});
var valBackgroundClip = new CSS_Property.Val(function (v) {
    return v;
});
var valBackgroundAttachment = new CSS_Property.Val(function (v) {
    return v;
});
var url = function (u) {
    return CSS_Property.value(CSS_Property.valString)("url(\"" + (u + "\")"));
};
var straight = function (a) {
    return CSS_Property.value(valSide)(a);
};
var space = BackgroundRepeat(CSS_String.fromString(CSS_Property.isStringValue)("space"));
var sideTop = Side(CSS_String.fromString(CSS_Property.isStringValue)("top"));
var sideRight = Side(CSS_String.fromString(CSS_Property.isStringValue)("right"));
var sideMiddle = Side(CSS_String.fromString(CSS_Property.isStringValue)("middle"));
var sideLeft = Side(CSS_String.fromString(CSS_Property.isStringValue)("left"));
var sideCenter = Side(CSS_String.fromString(CSS_Property.isStringValue)("center"));
var sideBottom = Side(CSS_String.fromString(CSS_Property.isStringValue)("bottom"));
var round = BackgroundRepeat(CSS_String.fromString(CSS_Property.isStringValue)("round"));
var repeat = BackgroundRepeat(CSS_String.fromString(CSS_Property.isStringValue)("repeat"));
var positioned = function (a) {
    return function (b) {
        return CSS_Property.value(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Size.valSize))(new Data_Tuple.Tuple(a, b));
    };
};
var placed = function (a) {
    return function (b) {
        return CSS_Property.value(CSS_Property.valTuple(valSide)(valSide))(new Data_Tuple.Tuple(a, b));
    };
};
var otherSide = new CSS_Common.Other(Side);
var otherLocation = new CSS_Common.Other(Location);
var otherDirection = new CSS_Common.Other(Direction);
var otherBackgroundSize = new CSS_Common.Other(BackgroundSize);
var otherBackgroundRepeat = new CSS_Common.Other(BackgroundRepeat);
var otherBackgroundPosition = new CSS_Common.Other(BackgroundPosition);
var otherBackgroundOrigin = new CSS_Common.Other(BackgroundOrigin);
var otherBackgroundImage = new CSS_Common.Other(BackgroundImage);
var otherBackgroundClip = new CSS_Common.Other(BackgroundClip);
var otherBackgroundAttachment = new CSS_Common.Other(BackgroundAttachment);
var origin = function (b) {
    return CSS_Property.value(CSS_Box.valBoxType)(b);
};
var noRepeat = BackgroundRepeat(CSS_String.fromString(CSS_Property.isStringValue)("no-repeat"));
var repeatX = xyRepeat(repeat)(noRepeat);
var repeatY = xyRepeat(noRepeat)(repeat);
var location = function (dict) {
    return dict.location;
};
var locTuple = function (dictLoc) {
    return function (dictLoc1) {
        return new Loc(function () {
            return CSS_Property.valTuple(dictLoc.Val0())(dictLoc1.Val0());
        }, function ($235) {
            return Location(CSS_Property.value(CSS_Property.valTuple(dictLoc.Val0())(dictLoc1.Val0()))($235));
        });
    };
};
var locSize = new Loc(function () {
    return CSS_Size.valSize;
}, function ($236) {
    return Location(CSS_Property.value(CSS_Size.valSize)($236));
});
var locSide = new Loc(function () {
    return valSide;
}, function ($237) {
    return Location(CSS_Property.value(valSide)($237));
});
var isStringSide = new CSS_String.IsString(function ($238) {
    return Side(CSS_String.fromString(CSS_Property.isStringValue)($238));
});
var isStringBackgroundSize = new CSS_String.IsString(function ($239) {
    return BackgroundSize(CSS_String.fromString(CSS_Property.isStringValue)($239));
});
var isStringBackgroundRepeat = new CSS_String.IsString(function ($240) {
    return BackgroundRepeat(CSS_String.fromString(CSS_Property.isStringValue)($240));
});
var noneBackgroundRepeat = new CSS_Common.None(CSS_String.fromString(isStringBackgroundRepeat)("none"));
var isStringBackgroundPosition = new CSS_String.IsString(function ($241) {
    return BackgroundPosition(CSS_String.fromString(CSS_Property.isStringValue)($241));
});
var isStringBackgroundOrigin = new CSS_String.IsString(function ($242) {
    return BackgroundOrigin(CSS_String.fromString(CSS_Property.isStringValue)($242));
});
var isStringBackgroundImage = new CSS_String.IsString(function ($243) {
    return BackgroundImage(CSS_String.fromString(CSS_Property.isStringValue)($243));
});
var noneBackgroundImage = new CSS_Common.None(CSS_String.fromString(isStringBackgroundImage)("none"));
var isStringBackgroundClip = new CSS_String.IsString(function ($244) {
    return BackgroundClip(CSS_String.fromString(CSS_Property.isStringValue)($244));
});
var isStringBackgroundAttachment = new CSS_String.IsString(function ($245) {
    return BackgroundAttachment(CSS_String.fromString(CSS_Property.isStringValue)($245));
});
var inheritSide = new CSS_Common.Inherit(CSS_String.fromString(isStringSide)("inherit"));
var inheritBackgroundSize = new CSS_Common.Inherit(CSS_String.fromString(isStringBackgroundSize)("inherit"));
var inheritBackgroundRepeat = new CSS_Common.Inherit(CSS_String.fromString(isStringBackgroundRepeat)("inherit"));
var inheritBackgroundPosition = new CSS_Common.Inherit(CSS_String.fromString(isStringBackgroundPosition)("inherit"));
var inheritBackgroundOrigin = new CSS_Common.Inherit(CSS_String.fromString(isStringBackgroundOrigin)("inherit"));
var inheritBackgroundImage = new CSS_Common.Inherit(CSS_String.fromString(isStringBackgroundImage)("inherit"));
var inheritBackgroundClip = new CSS_Common.Inherit(CSS_String.fromString(isStringBackgroundClip)("inherit"));
var inheritBackgroundAttachment = new CSS_Common.Inherit(CSS_String.fromString(isStringBackgroundAttachment)("inherit"));
var genericSide = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.Side" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Side))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.Side", [ {
        sigConstructor: "CSS.Background.Side", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.Side", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericLocation = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.Location" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Location))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.Location", [ {
        sigConstructor: "CSS.Background.Location", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.Location", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericDirection = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.Direction" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Direction))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.Direction", [ {
        sigConstructor: "CSS.Background.Direction", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.Direction", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericBackgroundSize = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.BackgroundSize" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(BackgroundSize))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.BackgroundSize", [ {
        sigConstructor: "CSS.Background.BackgroundSize", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.BackgroundSize", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericBackgroundRepeat = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.BackgroundRepeat" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(BackgroundRepeat))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.BackgroundRepeat", [ {
        sigConstructor: "CSS.Background.BackgroundRepeat", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.BackgroundRepeat", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericBackgroundPosition = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.BackgroundPosition" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(BackgroundPosition))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.BackgroundPosition", [ {
        sigConstructor: "CSS.Background.BackgroundPosition", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.BackgroundPosition", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericBackgroundOrigin = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.BackgroundOrigin" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(BackgroundOrigin))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.BackgroundOrigin", [ {
        sigConstructor: "CSS.Background.BackgroundOrigin", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.BackgroundOrigin", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericBackgroundImage = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.BackgroundImage" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(BackgroundImage))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.BackgroundImage", [ {
        sigConstructor: "CSS.Background.BackgroundImage", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.BackgroundImage", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericBackgroundClip = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.BackgroundClip" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(BackgroundClip))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.BackgroundClip", [ {
        sigConstructor: "CSS.Background.BackgroundClip", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.BackgroundClip", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var genericBackgroundAttachment = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Background.BackgroundAttachment" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(BackgroundAttachment))(Data_Generic.fromSpine(CSS_Property.genericValue)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Background.BackgroundAttachment", [ {
        sigConstructor: "CSS.Background.BackgroundAttachment", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(CSS_Property.genericValue)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("CSS.Background.BackgroundAttachment", [ function ($dollarq) {
        return Data_Generic.toSpine(CSS_Property.genericValue)(v);
    } ]);
});
var eqSide = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordSide = new Data_Ord.Ord(function () {
    return eqSide;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqLocation = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordLocation = new Data_Ord.Ord(function () {
    return eqLocation;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqDirection = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordDirection = new Data_Ord.Ord(function () {
    return eqDirection;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqBackgroundSize = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordBackgroundSize = new Data_Ord.Ord(function () {
    return eqBackgroundSize;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqBackgroundRepeat = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordBackgroundRepeat = new Data_Ord.Ord(function () {
    return eqBackgroundRepeat;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqBackgroundPosition = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordBackgroundPosition = new Data_Ord.Ord(function () {
    return eqBackgroundPosition;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqBackgroundOrigin = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordBackgroundOrigin = new Data_Ord.Ord(function () {
    return eqBackgroundOrigin;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqBackgroundImage = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordBackgroundImage = new Data_Ord.Ord(function () {
    return eqBackgroundImage;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqBackgroundClip = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordBackgroundClip = new Data_Ord.Ord(function () {
    return eqBackgroundClip;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var eqBackgroundAttachment = new Data_Eq.Eq(function (x) {
    return function (y) {
        return Data_Eq.eq(CSS_Property.eqValue)(x)(y);
    };
});
var ordBackgroundAttachment = new Data_Ord.Ord(function () {
    return eqBackgroundAttachment;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(CSS_Property.ordValue)(x)(y);
    };
});
var cover = BackgroundSize(CSS_String.fromString(CSS_Property.isStringValue)("cover"));
var contain = BackgroundSize(CSS_String.fromString(CSS_Property.isStringValue)("contain"));
var by = function (a) {
    return function (b) {
        return CSS_Property.value(CSS_Property.valTuple(CSS_Size.valSize)(CSS_Size.valSize))(new Data_Tuple.Tuple(a, b));
    };
};
var boxClip = function (b) {
    return CSS_Property.value(CSS_Box.valBoxType)(b);
};
var backgroundTuple = function (dictBackground) {
    return function (dictBackground1) {
        return new Background(function () {
            return CSS_Property.valTuple(dictBackground.Val0())(dictBackground1.Val0());
        }, CSS_Stylesheet.key(CSS_Property.valTuple(dictBackground.Val0())(dictBackground1.Val0()))(CSS_String.fromString(CSS_Property.isStringKey)("background")));
    };
};
var backgroundSizes = CSS_Stylesheet.key(CSS_Property.valList(valBackgroundSize))(CSS_String.fromString(CSS_Property.isStringKey)("background-size"));
var backgroundSize$prime = new Background(function () {
    return valBackgroundSize;
}, CSS_Stylesheet.key(valBackgroundSize)(CSS_String.fromString(CSS_Property.isStringKey)("background")));
var backgroundSize = CSS_Stylesheet.key(valBackgroundSize)(CSS_String.fromString(CSS_Property.isStringKey)("background-size"));
var backgroundRepeats = CSS_Stylesheet.key(CSS_Property.valList(valBackgroundRepeat))(CSS_String.fromString(CSS_Property.isStringKey)("background-repeat"));
var backgroundRepeat = CSS_Stylesheet.key(valBackgroundRepeat)(CSS_String.fromString(CSS_Property.isStringKey)("background-repeat"));
var backgroundPositions = CSS_Stylesheet.key(CSS_Property.valList(valBackgroundPosition))(CSS_String.fromString(CSS_Property.isStringKey)("background-position"));
var backgroundPosition$prime = new Background(function () {
    return valBackgroundPosition;
}, CSS_Stylesheet.key(valBackgroundPosition)(CSS_String.fromString(CSS_Property.isStringKey)("background")));
var backgroundPosition = CSS_Stylesheet.key(valBackgroundPosition)(CSS_String.fromString(CSS_Property.isStringKey)("background-position"));
var backgroundOrigins = CSS_Stylesheet.key(CSS_Property.valList(valBackgroundOrigin))(CSS_String.fromString(CSS_Property.isStringKey)("background-origin"));
var backgroundOrigin = CSS_Stylesheet.key(valBackgroundOrigin)(CSS_String.fromString(CSS_Property.isStringKey)("background-origin"));
var backgroundImages = CSS_Stylesheet.key(CSS_Property.valList(valBackgroundImage))(CSS_String.fromString(CSS_Property.isStringKey)("background-image"));
var backgroundImage = CSS_Stylesheet.key(valBackgroundImage)(CSS_String.fromString(CSS_Property.isStringKey)("background-image"));
var backgroundColor$prime = new Background(function () {
    return CSS_Property.valColor;
}, CSS_Stylesheet.key(CSS_Property.valColor)(CSS_String.fromString(CSS_Property.isStringKey)("background")));
var backgroundColor = CSS_Stylesheet.key(CSS_Property.valColor)(CSS_String.fromString(CSS_Property.isStringKey)("background-color"));
var backgroundClips = CSS_Stylesheet.key(CSS_Property.valList(valBackgroundClip))(CSS_String.fromString(CSS_Property.isStringKey)("background-clip"));
var backgroundClip = CSS_Stylesheet.key(valBackgroundClip)(CSS_String.fromString(CSS_Property.isStringKey)("background-clip"));
var backgroundBackgroundRepeat = new Background(function () {
    return valBackgroundRepeat;
}, CSS_Stylesheet.key(valBackgroundRepeat)(CSS_String.fromString(CSS_Property.isStringKey)("background")));
var backgroundBackgroundOrigin = new Background(function () {
    return valBackgroundOrigin;
}, CSS_Stylesheet.key(valBackgroundOrigin)(CSS_String.fromString(CSS_Property.isStringKey)("background")));
var backgroundBackgroundImage = new Background(function () {
    return valBackgroundImage;
}, CSS_Stylesheet.key(valBackgroundImage)(CSS_String.fromString(CSS_Property.isStringKey)("background")));
var backgroundBackgroundClip = new Background(function () {
    return valBackgroundClip;
}, CSS_Stylesheet.key(valBackgroundClip)(CSS_String.fromString(CSS_Property.isStringKey)("background")));
var backgroundBackgroundAttachment = new Background(function () {
    return valBackgroundAttachment;
}, CSS_Stylesheet.key(valBackgroundAttachment)(CSS_String.fromString(CSS_Property.isStringKey)("background")));
var backgroundAttachments = CSS_Stylesheet.key(CSS_Property.valList(valBackgroundAttachment))(CSS_String.fromString(CSS_Property.isStringKey)("background-attachment"));
var backgroundAttachment = CSS_Stylesheet.key(valBackgroundAttachment)(CSS_String.fromString(CSS_Property.isStringKey)("background-attachment"));
var backgroundArray = function (dictBackground) {
    return new Background(function () {
        return CSS_Property.valList(dictBackground.Val0());
    }, CSS_Stylesheet.key(CSS_Property.valList(dictBackground.Val0()))(CSS_String.fromString(CSS_Property.isStringKey)("background")));
};
var background = function (dict) {
    return dict.background;
};
var autoBackgroundSize = new CSS_Common.Auto(by(CSS_Common.auto(CSS_Size.autoSize))(CSS_Common.auto(CSS_Size.autoSize)));
var attachScroll = BackgroundAttachment(CSS_String.fromString(CSS_Property.isStringValue)("scroll"));
var attachFixed = BackgroundAttachment(CSS_String.fromString(CSS_Property.isStringValue)("fixed"));
var angular = function (a) {
    return CSS_Property.value(CSS_Size.valAngle)(a);
};
module.exports = {
    Background: Background, 
    Loc: Loc, 
    angular: angular, 
    attachFixed: attachFixed, 
    attachScroll: attachScroll, 
    background: background, 
    backgroundAttachment: backgroundAttachment, 
    backgroundAttachments: backgroundAttachments, 
    backgroundClip: backgroundClip, 
    backgroundClips: backgroundClips, 
    backgroundColor: backgroundColor, 
    backgroundImage: backgroundImage, 
    backgroundImages: backgroundImages, 
    backgroundOrigin: backgroundOrigin, 
    backgroundOrigins: backgroundOrigins, 
    backgroundPosition: backgroundPosition, 
    backgroundPositions: backgroundPositions, 
    backgroundRepeat: backgroundRepeat, 
    backgroundRepeats: backgroundRepeats, 
    backgroundSize: backgroundSize, 
    backgroundSizes: backgroundSizes, 
    boxClip: boxClip, 
    by: by, 
    contain: contain, 
    cover: cover, 
    location: location, 
    noRepeat: noRepeat, 
    origin: origin, 
    placed: placed, 
    positioned: positioned, 
    repeat: repeat, 
    repeatX: repeatX, 
    repeatY: repeatY, 
    round: round, 
    sideBottom: sideBottom, 
    sideCenter: sideCenter, 
    sideLeft: sideLeft, 
    sideMiddle: sideMiddle, 
    sideRight: sideRight, 
    sideTop: sideTop, 
    space: space, 
    straight: straight, 
    url: url, 
    xyRepeat: xyRepeat, 
    backgroundArray: backgroundArray, 
    backgroundTuple: backgroundTuple, 
    "backgroundColor'": backgroundColor$prime, 
    "backgroundPosition'": backgroundPosition$prime, 
    "backgroundSize'": backgroundSize$prime, 
    backgroundBackgroundRepeat: backgroundBackgroundRepeat, 
    backgroundBackgroundOrigin: backgroundBackgroundOrigin, 
    backgroundBackgroundClip: backgroundBackgroundClip, 
    backgroundBackgroundAttachment: backgroundBackgroundAttachment, 
    backgroundBackgroundImage: backgroundBackgroundImage, 
    eqBackgroundPosition: eqBackgroundPosition, 
    ordBackgroundPosition: ordBackgroundPosition, 
    genericBackgroundPosition: genericBackgroundPosition, 
    isStringBackgroundPosition: isStringBackgroundPosition, 
    valBackgroundPosition: valBackgroundPosition, 
    otherBackgroundPosition: otherBackgroundPosition, 
    inheritBackgroundPosition: inheritBackgroundPosition, 
    eqBackgroundSize: eqBackgroundSize, 
    ordBackgroundSize: ordBackgroundSize, 
    genericBackgroundSize: genericBackgroundSize, 
    isStringBackgroundSize: isStringBackgroundSize, 
    valBackgroundSize: valBackgroundSize, 
    otherBackgroundSize: otherBackgroundSize, 
    inheritBackgroundSize: inheritBackgroundSize, 
    autoBackgroundSize: autoBackgroundSize, 
    eqBackgroundRepeat: eqBackgroundRepeat, 
    ordBackgroundRepeat: ordBackgroundRepeat, 
    genericBackgroundRepeat: genericBackgroundRepeat, 
    isStringBackgroundRepeat: isStringBackgroundRepeat, 
    valBackgroundRepeat: valBackgroundRepeat, 
    otherBackgroundRepeat: otherBackgroundRepeat, 
    inheritBackgroundRepeat: inheritBackgroundRepeat, 
    noneBackgroundRepeat: noneBackgroundRepeat, 
    eqBackgroundImage: eqBackgroundImage, 
    ordBackgroundImage: ordBackgroundImage, 
    genericBackgroundImage: genericBackgroundImage, 
    isStringBackgroundImage: isStringBackgroundImage, 
    valBackgroundImage: valBackgroundImage, 
    otherBackgroundImage: otherBackgroundImage, 
    inheritBackgroundImage: inheritBackgroundImage, 
    noneBackgroundImage: noneBackgroundImage, 
    eqBackgroundOrigin: eqBackgroundOrigin, 
    ordBackgroundOrigin: ordBackgroundOrigin, 
    genericBackgroundOrigin: genericBackgroundOrigin, 
    isStringBackgroundOrigin: isStringBackgroundOrigin, 
    valBackgroundOrigin: valBackgroundOrigin, 
    otherBackgroundOrigin: otherBackgroundOrigin, 
    inheritBackgroundOrigin: inheritBackgroundOrigin, 
    eqBackgroundClip: eqBackgroundClip, 
    ordBackgroundClip: ordBackgroundClip, 
    genericBackgroundClip: genericBackgroundClip, 
    isStringBackgroundClip: isStringBackgroundClip, 
    valBackgroundClip: valBackgroundClip, 
    otherBackgroundClip: otherBackgroundClip, 
    inheritBackgroundClip: inheritBackgroundClip, 
    eqBackgroundAttachment: eqBackgroundAttachment, 
    ordBackgroundAttachment: ordBackgroundAttachment, 
    genericBackgroundAttachment: genericBackgroundAttachment, 
    isStringBackgroundAttachment: isStringBackgroundAttachment, 
    valBackgroundAttachment: valBackgroundAttachment, 
    otherBackgroundAttachment: otherBackgroundAttachment, 
    inheritBackgroundAttachment: inheritBackgroundAttachment, 
    eqSide: eqSide, 
    ordSide: ordSide, 
    genericSide: genericSide, 
    isStringSide: isStringSide, 
    valSide: valSide, 
    otherSide: otherSide, 
    inheritSide: inheritSide, 
    eqDirection: eqDirection, 
    ordDirection: ordDirection, 
    genericDirection: genericDirection, 
    valDirection: valDirection, 
    otherDirection: otherDirection, 
    eqLocation: eqLocation, 
    ordLocation: ordLocation, 
    genericLocation: genericLocation, 
    valLocation: valLocation, 
    otherLocation: otherLocation, 
    locSide: locSide, 
    locSize: locSize, 
    locTuple: locTuple
};
