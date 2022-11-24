/*
IF
SWITCH
TERNAIRE
TRY CATCH
 */

/**
 * if(condition)
 * {
 * code
 * }
 */

var a=10;
var b="10";
var d= 30;
var c=20;

if (a>b) {
  alert("OK");
}
if (a<b) {
  alert("OK");
}
if (a>=b) {
  alert("OK");
}
if (a<=b) {
  alert("OK");
}
if (a!=b) {
  alert("OK");
}
if (a!==b) {
  alert("OK");
}
if (a>b) {
  alert("OK");
}

if(a===b) {
  alert("OK");
}else{
  alert("KO")
}

if(a==b) {
  alert("OK");
}else if (c==d) {
  alert("OK");
}else{
  alert("KO")
}

// CONDITION COMBINEE
if (a==b && c==d) {
  alert("KO");
}

if(a==b || c==d) {
  alert("KO");
}
if((a==b || c==d) && a==c) {
  alert("KO");
}

/**
 * SWITCH(DONNEE)
 * {
 * CASE DONNEE :
 * CODE
 * BREACK;
 * }
 * 
 */

var salutation = "Hello";

switch (salutation) {
  case "salutation":
    alert("Hello");
    break;
    case "Bonjour":
      alert("Bonjour");
    break;
  default:
    alert("Bonsoir")
}