"use strict";
var Control_Semigroupoid = require("../Control.Semigroupoid");

// | `Category`s consist of objects and composable morphisms between them, and

// | as such are [`Semigroupoids`](#semigroupoid), but unlike `semigroupoids`

// | must have an identity element.

// |

// | Instances must satisfy the following law in addition to the

// | `Semigroupoid` law:

// |

// | - Identity: `id <<< p = p <<< id = p`
var Category = function (Semigroupoid0, id) {
    this.Semigroupoid0 = Semigroupoid0;
    this.id = id;
};

// | `Category`s consist of objects and composable morphisms between them, and

// | as such are [`Semigroupoids`](#semigroupoid), but unlike `semigroupoids`

// | must have an identity element.

// |

// | Instances must satisfy the following law in addition to the

// | `Semigroupoid` law:

// |

// | - Identity: `id <<< p = p <<< id = p`
var id = function (dict) {
    return dict.id;
};
var categoryFn = new Category(function () {
    return Control_Semigroupoid.semigroupoidFn;
}, function (x) {
    return x;
});
module.exports = {
    Category: Category, 
    id: id, 
    categoryFn: categoryFn
};
