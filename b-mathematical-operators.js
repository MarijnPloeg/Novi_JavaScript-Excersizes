// ==========================================
// --> LOG DE WAARDE VAN IEDER ANTWOORD DIRECT IN DE TERMINAL <--
// ==========================================

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9
// ==========================================

let optellen = 4+5

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364
// ==========================================

let vermenigvuldigen = 7*52

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49
// ==========================================

let optellenVermenigvuldigen = (4+3)*7

// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12
// ==========================================

let delen = (36/6)*2

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig'
// ==========================================

let zoet = "zoet"
let sappig = "sappig"
let zoetSappig = zoet + sappig

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters'
// ==========================================

let voornaam = "Marijn"
let achternaam= "Ploeg"
let volledigeNaam= voornaam + " " + achternaam

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg
// ==========================================

let stad = "Haarlem"
let provincie = "Noord-Holland"
let locatie = stad+", "+provincie

console.log(optellen, vermenigvuldigen, optellenVermenigvuldigen, delen, zoetSappig, volledigeNaam, locatie)