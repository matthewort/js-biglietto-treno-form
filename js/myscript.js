// nome e cognome
var nomeCognome = document.getElementById("fname");
console.log("nome e cognome: ", nomeCognome);

// km da percorrere
var km = document.getElementById("fkm");
console.log("km da percorrere: ", km);

// età
var eta = document.getElementById("feta");
console.log("età: ", feta);

// nome passeggero
var nomePasseggero = document.getElementById("nome_passeggero");
var nomePasseggero = nomeCognome;
console.log("nome passeggero: ", nomePasseggero);


// prezzo biglietto
var price = 0.21;
console.log("prezzo: ", 0.21 * km);

// sconto minorenne
var scontoMinorenne = 80 * (km * 0.21) / 100;

// sconto over65
var scontoOver65 = 60 * (km * 0.21) / 100;

// condizioni età
if (eta <= 17) {
  // sconto 20%
  elementoOutput.innerHTML = "Sconto Minorenne";
  console.log("minorenne!", scontoMinorenne);
} else if (eta >= 66) {
  // sconto 40%
  elementoOutput.innerHTML = "Sconto Over65";
  console.log("over 65!", scontoOver65);
} else {
  elementoOutput.innerHTML = "Nessuno sconto";
  console.log("nessuno sconto");
}

var elementoOutput = document.getElementById("sconto");

// costo biglietto
if (eta <= 17) {
  // sconto 20%
  elementoOutput.innerHTML = scontoMinorenne.toFixed(2) + "€";
  console.log("prezzo :", scontoMinorenne.toFixed(2) + "€");
} else if (eta >= 66) {
  // sconto 40%
  elementoOutput.innerHTML = scontoOver65.toFixed(2) + "€";
  console.log("prezzo :", scontoOver65.toFixed(2) + "€");
} else {
  elementoOutput.innerHTML = "Nessuno sconto";
  console.log("nessuno sconto");
}

var elementoOutput = document.getElementById("costo_biglietto");
