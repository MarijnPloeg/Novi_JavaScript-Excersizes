// ==========================================
// 1. Declareer een variabele om jouw naam in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

let name = "Marijn";

// ==========================================
// 2. Declareer een variabele om de kleur van jouw ogen in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

let eyeColor = "bruin";

// ==========================================
// 3. Declareer een variabele om jouw leeftijd in op te slaan en zet de waarde erin. De variabele moet later overschreven kunnen worden.
// ==========================================

let leeftijd = 22;

// ==========================================
// 4. Declareer een variabele om jouw beroep in op te slaan en zet de waarde erin. De variabele moet later overschreven kunnen worden.
// ==========================================

let beroep = "Programmeur";

// ==========================================
// 5. Declareer een variabele om jouw schoenmaat in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

let schoenMaat = 46;

// ==========================================
// 6. Declareer een variabele om in op te slaan of je een partner hebt of niet. De variabele moet later overschreven kunnen worden.
// ==========================================

let getrouwd = false;
let welGetrouwd = "getrouwd.";
let nietGetrouwd = "niet getrouwd."
function isGetrouwd(getrouwd){
    if (getrouwd){
        return welGetrouwd
    }
    else if (!getrouwd) {
        return nietGetrouwd
    }
}


// ==========================================
// 7. Declareer een variabele om het aantal kinderen in op te slaan. De variabele moet later overschreven kunnen worden.
// ==========================================

let aantalKinderen = 0;

// ==========================================
// 8. Gebruik jouw variabelen nu om hun waardes te loggen in de terminal. Klopt het allemaal?
// ==========================================

console.log("Ik heet "+name+", mijn ogen zijn "+eyeColor+" en ik ben "+leeftijd+" jaar oud. Ik ben "+beroep+" en ik ben "+isGetrouwd(getrouwd)+ " Mijn schoenmaat is "+schoenMaat+" en ik heb "+aantalKinderen+ " kinderen")
