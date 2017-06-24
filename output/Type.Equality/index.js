"use strict";

// | This type class asserts that types `a` and `b`

// | are equal.

// |

// | The functional dependencies and the single

// | instance below will force the two type arguments

// | to unify when either one is known.

// |

// | Note: any instance will necessarily overlap with

// | `refl` below, so instances of this class should

// | not be defined in libraries.
var TypeEquals = function (from, to) {
    this.from = from;
    this.to = to;
};

// | This type class asserts that types `a` and `b`

// | are equal.

// |

// | The functional dependencies and the single

// | instance below will force the two type arguments

// | to unify when either one is known.

// |

// | Note: any instance will necessarily overlap with

// | `refl` below, so instances of this class should

// | not be defined in libraries.
var to = function (dict) {
    return dict.to;
};
var refl = new TypeEquals(function (a) {
    return a;
}, function (a) {
    return a;
});

// | This type class asserts that types `a` and `b`

// | are equal.

// |

// | The functional dependencies and the single

// | instance below will force the two type arguments

// | to unify when either one is known.

// |

// | Note: any instance will necessarily overlap with

// | `refl` below, so instances of this class should

// | not be defined in libraries.
var from = function (dict) {
    return dict.from;
};
module.exports = {
    TypeEquals: TypeEquals, 
    from: from, 
    to: to, 
    refl: refl
};
