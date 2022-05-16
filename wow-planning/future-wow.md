# Litt om videre utvikling av WoW-plattformen

## Backend:

For øyeblikket virker det som om den meste attraktive løsning er [DigitalOcean](https://www.digitalocean.com/pricing),
selv om DigitalOcean er rimilig dyrt(150kr i månden), tror jeg at det ville vært en god innvistering ettersom at det ville gitt mer forutsigbarhet i forhold til hva som må betales hver måned.
Med firebase som vi i dag bruker, er det ikke lett å si hvor mye det kommer til å koste før regningen kommer. Ved bruk at DigitalOcean lar det meg også implementere et dotnet mellomlag(En slags måte å kommunisere mellom databasen vår og
det en bruker ser.) Jeg tror også det hadde vært lurt å bruke en relasjons-database som MySQL - noe DigitalOcean tilbyr.

Noen eksempler på ulike query opperasjoner vi kommer til å trenge:
```sql
select * from points

select * from points 
where userId = student.id
      and performedDate = GETDATE()
      
select * from messages
where userId = reciverId

IF EXSISTS(select * from points 
where userId = student.id 
and category = 'messages'
and performedDate = GETDATE()
and reciver = student.reciver)
BEGIN
  insert into points(userId, category, performedDate, reciver, points)
  values($userId, 'messages', GETDATE(), student.reciver, 5)
END
ELSE
BEGIN
  insert into points(userId, category, performedDate, reciver, points)
    values($userId, 'messages', GETDATE(), student.reciver, 15)
END
```

Så er det dette med tidsberegninger da, jeg tror nok det kommer til å ta **rundt 60-80 timer** å implementere en solid og sikker backend med DigitalOcean. 


## Frontend:

Per dags data bruker vi ikke noe rammeverk, og alt er skrevet i vanilla js, dette har sine fordeler når det gjelder prestasjon og størrelse på prosjektet, men det har også en del ulemper.
Det er slik at mange av problemene jeg har i dag med kodebasen - uoversiktlig kode/rare hacky løsninger etc kunne vært løst med å refaktorere mye av koden i prosjektet, men jeg tror også at
det ville gjort det **mye** lettere å videre utvikle applikasjonen, implementere nye funksjoner og gjøre utvikler opplevelsen et hakk bedre ved å ta i bruk et rammeverk.

Jeg tror rammeverket som er best for denne oppgaven er React. Jeg tror ikke dette er like mye jobb som backend biten, etter som at vi alt har koden og _bare_ er nødt til å skrive det om til React. Når det kommer til tidsberegning tenker jeg
at dette tar **rundt 10-20 timer**.
