## Status for WoW 

### Views
WoW består for øyeblikket av 4 hovedviews og 2 mer sekundære views.
#### Primær views:

  + [Main-page](https://github.com/qqgameover/Wishing-others-Well/blob/main/VIEW/mainView.js)
    er hoved viewet for applikasjonen, og fungerer også som en navigasjonshub hvor en bruker kan bevege seg rundt i applikasjonen.
    viewet fungerer også som en status side hvor en bruker kan se hvor mange oppgaver de har gjort i løp av dagen, og hvor mange flere
    oppgaver de kan gjøre før de er nødt til å vente til den daglige reseten kommer. 
  + [Kategorier](https://github.com/qqgameover/Wishing-others-Well/blob/main/VIEW/kategorierViews.js)
    er viewet en bruker vil se når de trykker seg inn på en av de 3 kategoriene, og er viewet som er brukt til å vise fram de ulike oppgavene
    som for øyeblikket er hardkodet inn i model.js(dette er noe jeg har lyst til å endre på) og kanskje bruke en database til å hente ut de ulike oppgavene istedet.
    dette kunne gjort innholdet litt mer dynamisk.
  + [Meldinger](https://github.com/qqgameover/Wishing-others-Well/blob/main/VIEW/meldingView.js)
    er viewet en bruker vil se når de trykker seg inn på meldinger fra hoved viewet. Viewet består av en søkefelt hvor en bruker kan søke opp elever i klassen sin,
    og få forslag basert på hva de har skrevet, de kan så lage en melding ut av forhåndsskrevet alternativer(disse alternativene er også hardkodet inn i model.js
    og det kan være ønskelig å også hente ut disse fra en database).
  + [Lederbrett](https://github.com/qqgameover/Wishing-others-Well/blob/main/VIEW/leaderboardView.js)
    er det eneste viewet som i dag er 100% dynamisk generert fra data i firebase databasen. Her kan brukere se hvordan de ligger ann i forhold til andre elever i sin klasse
    og de kan også se hvordan deres klasse ligger ann iforhold til andre klasser som deltar i konkurransen.

#### Sekundære views:
  
  + [Login](https://github.com/qqgameover/Wishing-others-Well/blob/main/VIEW/googleView.js)
    er et super simpelt view som bare implementerer gAuth.
  + [Inbox](https://github.com/qqgameover/Wishing-others-Well/blob/main/VIEW/inboxView.js)
    er også et veldig simpelt view som henter ut fra modellen sin inbox og viser brukeren meldinger
    som er sendt til dem.


### Controllere:

  + [Meldinger](https://github.com/qqgameover/Wishing-others-Well/blob/main/CONTROLLER/meldingController.js) 
    innholder 7 funksjoner som brukes til å søke opp elever i brukerens klasse, gi forslag og inserte meldingene
    inn i databasen, slik at motakkeren kan hente den ut i sitt inbox view.  
  + [Poeng](https://github.com/qqgameover/Wishing-others-Well/blob/main/CONTROLLER/poengController.js)
    inneholder en del funksjoner som brukes til å telle poeng i klassen, skolen og per elev. De brukes også til å holde oversikt på antall opptjente poeng per dag.
    det er en del stygg kode der, som jeg veldig gjerne skulle hatt fikset men jeg har ikke funnet tiden til det, og det er ekstra vanskelig siden det ikke var jeg som skrev mye av det.
  + [Video/Kategorier](https://github.com/qqgameover/Wishing-others-Well/blob/main/CONTROLLER/videoController.js)
    inneholder en 4 funksjoner som brukes til navigasjon i de ulike kategorie viewsene. Noen av funksjonene brukes også til å skrive inn poeng i databasen når en bruker har gjort en oppgave. 
  + (([Model](https://github.com/qqgameover/Wishing-others-Well/blob/main/model.js)
    valgte å legge til modellen her, ettersom at et symptom av at applikasjonen gikk fra prototype til en faktisk brukenes applikasjon så fort er at modellen veldig fort ble en "gud-klasse".
    Modellen gjør alt, og det har blitt lagt veldig mange funksjoner i modellen som ellers var vanskelig å plassere andre steder. Det har skapt noen små problemer gjennom utviklingsprossesen men det har ikke vært
    uoverkommelig. Jeg tror dette er noe som virkelig kan forbedres senere.))

