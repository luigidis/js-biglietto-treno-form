// console.log('hello')
//VARIABILI COSTANTI
const priceKm = 0.21
const discountTeen = 0.20
const discountOver65 = 0.40

//PRENDO IL MIO TAG HTML DOVE DEVO STAMPARE IL PREZZO
const testoDaRestituire = document.getElementById('testo_da_restituire')
// console.dir(testoDaRestituire)
// RECUPERO L'INPUT IN CUI L'UTENTE METTE QUANTI KM DOVRA' PERCORRERE E LO METTERO' DENTRO UNA VARIABILE
const inputElementDistance = document.querySelector('input[name="distance"]')
// console.log(inputElementDistance.value)
// RECUPERO LA FASCIA D'ETA' DELL'UTENTE E LO METTERO' IN UNA VARIABILE
let inputUserAge =  document.querySelector('#user_age') 
// console.log(inputUserAge.value)
let inputUserAgeValue = parseFloat(inputUserAge.value)
// RECUPERO input del NOME E COGNOME utente e lo metto in una variabile
const inputUserName = document.querySelector('input[name="username"]')
console.log(inputUserName.value)

// SE L'USERNAME CLICCA SUL TASTO GENERA
const buttonElement = document.querySelector('input[type="submit"]')
// console.log(buttonElement)
buttonElement.addEventListener('click',function () {
    // CALCOLO IL PREZZO PIENO DEL BIGLIETTO E LO METTO IN UNA VARIABILE
    const fullPrice = parseFloat(inputElementDistance.value) * priceKm
    // console.log(fullPrice)
    // A QUESTO PUNTO INIZIO IL MIO ALGORITMO PER LO SCONTO 
    if (inputUserAgeValue === 1) {
        const discount = fullPrice * discountTeen
        // console.log(discount)
        const finalPrice = fullPrice - discount
        // alert(finalPrice)
        testoDaRestituire.innerHTML = "Il tuo biglietto ha un prezzo di: " + finalPrice.toFixed(2) + "€"
    } else if (inputUserAgeValue === 3) {
        const discount = fullPrice * discountOver65
        // console.log(discount)
        const finalPrice = fullPrice - discount
        // alert(finalPrice)
        testoDaRestituire.innerHTML = "Il tuo biglietto ha un prezzo di: " + finalPrice.toFixed(2) + "€"
    } else if (inputUserAgeValue === 2) {
        // alert(fullPrice)
        testoDaRestituire.innerHTML = "Il tuo biglietto ha un prezzo di: " + fullPrice.toFixed(2) + "€"
    } else {
        alert('Inserisci età valida')
    }
})
   
//Recuperare l'elemento del button Annulla
const resetElement = document.querySelector('input[type="button"]')
// console.log(resetElement)
// agganciare un event listener che ascolta il click su Annulla
resetElement.addEventListener('click', function(){
    inputUserAge.value = '---'
    inputElementDistance.value = '0'
    inputUserName.value = ''

})
// Una volta cliccato dobbiamo resettare i valori del form







    
    

    

        
        










// GENERO IL PREZZO FINALE

// STAMPO IL RISULTATO NEL MIO FILE HTML





