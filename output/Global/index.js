
// | This module defines types for some global Javascript functions

// | and values.
"use strict";
var $foreign = require("./foreign");
module.exports = {
    "decodeURI": $foreign["decodeURI"], 
    "decodeURIComponent": $foreign["decodeURIComponent"], 
    "encodeURI": $foreign["encodeURI"], 
    "encodeURIComponent": $foreign["encodeURIComponent"], 
    infinity: $foreign.infinity, 
    "isFinite": $foreign["isFinite"], 
    "isNaN": $foreign["isNaN"], 
    nan: $foreign.nan, 
    readFloat: $foreign.readFloat, 
    readInt: $foreign.readInt
};
