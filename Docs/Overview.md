# Wishing others well dokumentasjon

## Table of conents
1. [Prinsipper](#prinsipper)
2. [Controllere](#controllere)

### Prinsipper
    1. Immutability først, når du skriver kode, prøve å unngå unødvendig mutasjon og sideffekter.
    2. Funksjonsnavn skal gi mening, fortell hva funksjonen gjør, ikke hvordan den gjør det.
    3. MVC er design paradigme som brukes i prosjektet, dette vil si at vi lagrer all delt state i en model, all mutasjon av modelen skjer via controllere og vi presanterer den respektive dataen i views.
### Controllere
* #### meldingController.js
    Melding controlleren brukes for å kontrollere meldinger sendt mellom brukere.
    ved behov laster vi inn alle meldinger en bruker har mottatt fra medelever via firebase.
    Controllere inneholder også noe logikk for autocompletion på innskriving av navn og, en måte å 
    registrere poeng for å sende meldinger. Merk at innhenting og utsending av meldinger er async. 

    ##### Funksjoner det er verdt å nevne
    * `searchName(input: string): string || null` </br> searchName tar inn en string som input og retunerer
        et elev navn om den finner en match, eller null.
    * `makeSuggestions(terms: Array<string>): Array<HTMLElement>` </br> makeSuggestions tar inn et string array, og retunerer et array med ulike forslag 
        formatert som en HTML liste.
    * `findUserName(searchVal: string): string || null` </br> denne funskjonen søker gjennom instanser arrayet og forsøker å finne en match på søkeverdien vi har sendt inn. 
* #### <s>papaparse.js</s> *deprecated*
    - Ikke lenger i bruk. 
* #### poengController.js 
    Poeng controlleren brukes til å beregne poeng til klassen/skolen, og til å holde styr på at
    elever ikke overgår gresen på 3 oppgaver per dag, per kategori. Den inneholder en del hjelpe
    funksjoner for å gjøre koden lettere å lese. 

    ##### Funksjoner det er verdt å nevne
    * `addPoints(): void` </br> Funksjonen addPoints tar ingen parametere og brukes til å beregne poeng for alle instanser i applikasjonen. For øyeblikket er den o(n<sup>2</sup>). Resultatet blir lagret i modellen. Dette er dataen som vises til brukeren. 
    * `findPerson(person: string): Instanse || null` </br> En hjelpe funksjon for å søke gjennom instanser arrayet og retunere instansen som deler brukernavn med søkeverdien.
* #### videoController.js
    Navnet på video controller kan være litt forvirrende, men videoController brukes til å styre
    hvilke side vi er på. Hver side er en node i en node-liste, vi bruker controlleren til dette.