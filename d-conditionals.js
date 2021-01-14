// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false
// ==========================================
const tien = 10;
function checkDigits(tien){
    if (tien>20){
        return true
    }
    else {
        return false
    }
}

console.log(checkDigits(tien))


// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true
// ==========================================

function isGelijk(){
    if (tien === 11){
        return false
    }
    else {
        return true
    }
}

console.log(isGelijk());
// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false
// ==========================================

const zoet = 'zoet';
const sappig = 'sappig';
function vergelijkStrings(){
    if (zoet === sappig){
        return true
    }
    else {
        return true
    }
}

console.log(vergelijkStrings())

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!'
// ==========================================

const cijfer = 9;
function vergelijkCijfer(){
    if (cijfer > 8){
        return 'cum laude!'
    }
}

console.log(vergelijkCijfer())

// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================

let isRaining = false;
let temperature = 23;
function checkWeather(){
    if (temperature > 21 && isRaining === false){
        return 'Je kunt een korte broek aan!'
    }
    else if (temperature < 12 || isRaining === true){
        return 'Doe een jas aan!'
    }
}

console.log(checkWeather())
