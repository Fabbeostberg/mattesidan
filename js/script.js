console.log("hejsan");
// var p = 5;
// var q = 4;

//anropar funktionen med indata

//funktionen
function PQformel(p, q) {
  var del1 = p * -0.5;
  var del2 = Math.pow(p * 0.5, 2) - q;

  var svar1 = del1 + Math.sqrt(del2);
  var svar2 = del1 - Math.sqrt(del2);

  console.log(svar1);
  console.log(svar2);
  document.getElementById("svar1").innerHTML = svar1;
  document.getElementById("svar2").innerHTML = svar2;
}
function getValue() {
  var p_str = document.getElementById("p").value;
  var p = parseInt(p_str);
  var q_str = document.getElementById("q").value;
  var q = parseInt(p_str);

  PQformel(p, q);
}

function pytagoras(a, b) {
  var pizza1 = a * a;
  var pizza2 = b * b;

  var pizza3 = pizza1 + pizza2;
  console.log(pizza3);
}

function lutning(y2, y1, x2, x1) {
  var yvärde = y2 - y1;
  var xvärde = x2 - x1;
  var kvärde = yvärde / xvärde;
  console.log(kvärde);
}
