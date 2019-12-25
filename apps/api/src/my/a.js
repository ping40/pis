"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var bSubject = new rxjs_1.BehaviorSubject("a");
bSubject.next("b");
bSubject.subscribe(function (value) {
    console.log("Subscription got", value); // Subscription got b, 
    // ^ This would not happen 
    // for a generic observable 
    // or generic subject by default
});
bSubject.next("c"); // Subscription got c
bSubject.next("d"); // Subscription got d
