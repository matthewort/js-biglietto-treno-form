var elementoOutput = document.getElementById("titolo");

// richiesta numero chilometri
var richiestaKm = prompt("Quanti km?");
console.log("quanti km: ", richiestaKm);

// richiesta età passeggero
var richiestaEta = prompt("Età?");
console.log("età: ", richiestaEta);

// prezzo biglietto
var price = 0.21;
console.log("prezzo: ", 0.21 * richiestaKm);

// sconto minorenne
var scontoMinorenne = 80 * (richiestaKm * 0.21) / 100;

// sconto over65
var scontoOver65 = 60 * (richiestaKm * 0.21) / 100;

// condizioni età
if (richiestaEta <= 17) {
  // sconto 20%
  elementoOutput.innerHTML = "Minorenne! Riceverai uno sconto di: " + scontoMinorenne.toFixed(2) + "€";
  console.log("minorenne!", scontoMinorenne);
} else if (richiestaEta >= 66) {
  // sconto 40%
  elementoOutput.innerHTML = "Over 65! Riceverai uno sconto di: " + scontoOver65.toFixed(2) + "€";
  console.log("over 65!", scontoOver65);
} else {
  elementoOutput.innerHTML = "Nessuno sconto!"
  console.log("nessuno sconto");
}
