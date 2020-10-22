// nome e cognome passeggero
var nomePasseggero = document.getElementById("nome_passeggero");

// form nome e cognome
var nomeCognomeInput = document.getElementById("fname");

// bottone genera
var bottoneGenera = document.getElementById("genera");

// bottone annulla
var bottoneAnnulla = document.getElementById("annulla");

// km da percorrere
var km = document.getElementById("fkm");

// età
var eta = document.getElementById("feta");

// prezzo biglietto
var price = 0.21;

// sconto minorenne
var scontoMinorenne = 80 * (km * 0.21) / 100;

// sconto over65
var scontoOver65 = 60 * (km * 0.21) / 100;

// risultato sconto
var costoBiglietto = document.getElementById("costo_biglietto");

// sconto minorenne o over65
var scontomin = document.getElementById("sconto");

// numero carrozza
var numcarrozza = document.getElementById('carrozza')

// codice BIGLIETTO
var codic = document.getElementById('codice')

// FUNZIONE NOME
bottoneGenera.addEventListener("click",
function() {
  nomePasseggero.innerHTML = nomeCognomeInput.value;

  // CONDIZIONE KM
  if (eta.value <= 17) {
    // sconto 20%
    costoBiglietto.innerHTML = scontoMinorenne.toFixed(2).value + "€";
    scontomin.innerHTML ="Sconto Minorenne";
  } else if (eta.value >= 66) {
    // sconto 40%
    costoBiglietto.innerHTML = scontoOver65.toFixed(2).value + "€";
    scontomin.innerHTML ="Sconto Over65";
  } else {
    costoBiglietto.innerHTML = "Nessuno sconto"

  }

  // FUNZIONE CARROZZA
  numcarrozza.innerHTML = Math.floor(Math.random() *10);

  // FUNZIONE CODICE
  codic.innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;

  

} );
