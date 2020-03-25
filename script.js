var unos = "6*2";
var delovi;
var rezultat;
if(unos.indexOf("+") != -1) {
  delovi = unos.split("+");
  rezultat = parseInt(delovi[0]) + parseInt(delovi[1]);
}
if(unos.indexOf("-") != -1) {
  delovi = unos.split("-");
  rezultat = parseInt(delovi[0]) - parseInt(delovi[1]);
}
if(unos.indexOf("*") != -1) {
  delovi = unos.split("*");
  rezultat = parseInt(delovi[0]) * parseInt(delovi[1]);
}
if(unos.indexOf("/") != -1) {
  delovi = unos.split("/");
  rezultat = parseInt(delovi[0]) / parseInt(delovi[1]);
}
console.log(rezultat);
