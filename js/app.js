console.log('hello')
//VARIABILI COSTANTI
const priceKm = 0.21
const discountTeen = 0.20
const discountOver65 = 0.40
// SE L'USERNAME CLICCA SUL TASTO GENERA
const buttonElement = document.querySelector('input[type="submit"]')
console.log(buttonElement)
buttonElement.addEventListener('click',function () {
    // RECUPERO L'INPUT IN CUI L'UTENTE METTE QUANTI KM DOVRA' PERCORRERE E LO METTERO' DENTRO UNA VARIABILE
    const inputElementDistance = document.querySelector('input[name="distance"]')
    console.log(inputElementDistance.value)
    // RECUPERO LA FASCIA D'ETA' DELL'UTENTE E LO METTERO' IN UNA VARIABILE
    let inputUserAge = document.querySelector('#user_age')
    console.dir(inputUserAge)
    console.log(inputUserAge)
    // CALCOLO IL PREZZO PIENO DEL BIGLIETTO E LO METTO IN UNA VARIABILE
    const fullPrice = parseFloat(inputElementDistance.value) * priceKm
    console.log(fullPrice)

})








// CALCOLO LO SCONTO SE E' MINORENNE * 0.20
const discount = fullPrice * discountTeen
console.log(discount)
// CALCOLO LO SCONTO SE E' OVER 65 * 0.40
const discont = fullPrice * discountOver65
console.log(discount)
// GENERO IL PREZZO FINALE
const finalPrice = finalPrice - discount
// STAMPO IL RISULTATO NEL MIO FILE HTML





