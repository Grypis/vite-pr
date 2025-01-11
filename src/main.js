/* import validator from "validator";

console.log(
  "Is mango@mail.com a valid email?:",
  validator.isEmail("mango@mail.com")
);

console.log(
  "Is Mangodogmail.com a valid email?",
  validator.isEmail("Mangodogmail.com")
); */

/* import makeMessage from "./makeMessage.js";
console.log(makeMessage("Jacob")); */

import { makeMessage, levels } from "./makeMessage.js";
console.log(makeMessage("Jsc"));
console.log(levels);

import { original as renamed } from "./myMolude.js";
console.log(renamed);
