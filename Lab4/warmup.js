


console.log("7" + 3); // it will produce "73"
console.log("7" - 3); // it will produce 4
console.log(7 + 3 + "1"); // it will produce "101"

console.log("7" * "2"); // it will produce 14
console.log(10 / 3); // it will produce 3.33333...
console.log(typeof null); // it will produce "object"

console.log(typeof NaN); // it will produce "number"
console.log(Boolean("false")); // it will produce "true" (it suprised me that all non empty strings are truthy even when explicitly stating false)
console.log(Boolean("0")); // it will produce "true"

console.log(0 || "fallback"); // it will produce "fallback"
console.log(0 ?? "fallback"); // it will produce 0
console.log("" || "empty"); // it will produce "empty"

console.log("10" == 10); // it will produce "true"
console.log("10" === 10); // it will produce "false"
console.log(Number("12abc")); // it will produce "NaN"

console.log(parseInt("12abc")); // it will produce 12
console.log(" hi ".trim()); // it will produce "hi"
console.log("cat".includes("a")); // it will produce true
