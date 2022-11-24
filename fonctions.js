/**
 * funtion nom(parametre1, parametre2)
 * {
 * code
 * }
 * PR EXECUTER LA FONCTION "nom()"
 * 
 * nom(valeur1, valeur2)
 */

// DECLARATION DE LA FONCTION addition() SANS PARAMETRE
function addition(){
  var a = 2;
  var b = 4;
  var c = a+b
  alert(c);
}
// DECLARATION DE LA FONCTION addition2() AVEC PARAMETRE
 function addition2(a,b){
   alert(a+b);
 }

 addition2(10,20);
 addition2(30,40);

 function addition2(a,b,C=""){
   alert(a+b);
 }

 addition2(10,20,30);
 addition2(30,40);