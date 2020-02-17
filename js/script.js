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

function getValuePQ() {
  var p_str = document.getElementById("p").value;
  var p = parseInt(p_str);
  var q_str = document.getElementById("q").value;
  var q = parseInt(q_str);

  PQformel(p, q);
}
//
function pytagoras(a, b) {
  var pizza1 = a * a;
  var pizza2 = b * b;

  var pizza3 = pizza1 + pizza2;
  var pizza4 = Math.sqrt(pizza3);
  console.log(pizza4);
  document.getElementById("svar4").innerHTML = pizza4;
}

function getValue() {
  var a_str = document.getElementById("a").value;
  var a = parseInt(a_str);
  var b_str = document.getElementById("b").value;
  var b = parseInt(b_str);
  pytagoras(a, b);
}

function lutning(y2, y1, x2, x1) {
  var yvärde = y2 - y1;
  var xvärde = x2 - x1;
  var kvärde = yvärde / xvärde;
  var mvärde = y2 - kvärde * x2;

  console.log(mvärde);
  console.log(kvärde);
  document.getElementById("svar6").innerHTML = kvärde;
  document.getElementById("svar5").innerHTML = mvärde;
}

function getValuelutning() {
  var y2_str = document.getElementById("y2").value;
  var y2 = parseInt(y2_str);

  var y1_str = document.getElementById("y1").value;
  var y1 = parseInt(y1_str);

  var x2_str = document.getElementById("x2").value;
  var x2 = parseInt(x2_str);

  var x1_str = document.getElementById("x1").value;
  var x1 = parseInt(x1_str);

  lutning(y2, y1, x2, x1);
}
