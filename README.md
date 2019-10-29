## Omschrijving concept 
Jongen mensen zijn steeds meer geïnteresseerd in tatoeages. Tatoeages vertellen vaak een verhaal of hebben een specifieke betekenis die zich in het verleden heeft afgespeeld: de geschiedenis. Uit de korte desk research blijkt dat tatoeages vroeger als brandmerk dienden voor slaven. Ook was het populair onder de zeelieden. Het museum gaat echter over de geschiedenis van bepaalde dingen. Daarom  wil ik een applicatie maken die beeldmateriaal van tatoeages aanbiedt. Het dient dus als een inspiratiebron voor mensen die een tatoeage willen zetten.
Dit beeldmateriaal kan afkomstig zijn van verschillende culturen uit verschillende landen, afhankelijk van de voorkeuren van de gebruiker.

## Target audience (doelgroep)
Het is de bedoeling om een nieuwe (jonge) doelgroep aan te spreken die geïnteresseerd zijn in unieke tatoeages van verschillende culturen.

## Wat haal ik uit mijn database? 
Ik heb in Sparql een query gebruikt die foto's zoekt. Hierbij heb ik een filter toegevoegd zodat alleen foto's met de termen "tatoeage" of "tatoeages" worden weergegeven. Het is de bedoeling dat gebruikers deze data kunnen filteren op basis van culturen (of landen). Ik heb de volgende query in Sparql gebruikt:

> PREFIX dc: <http://purl.org/dc/elements/1.1/> <br>
> PREFIX dct: <http://purl.org/dc/terms/> <br>
> PREFIX skos: <http://www.w3.org/2004/02/skos/core#> <br>
> SELECT ?cho ?title ?type WHERE { <br>
>   VALUES ?type { "Foto" "foto" "Negatief" "negatief" "Glasnegatief" "glasnegatief" "Dia" "dia" "Kleurendia" "kleurendia" "Lichtbeeld" "lichtbeeld"} <br>
>   ?cho dc:type ?type ; <br>
>         dc:title ?title . <br>
>    FILTER langMatches(lang(?title), "ned") <br>
>    FILTER (REGEX (?title, "tatoeage")) <br>
> }


## Aan de slag met Ember
Bij het ontwikkelen van dit concept heb ik het framework Ember gebruikt.

## Resultaat (met link)
Dit is het resultaat:


[Klik hier om een live versie te bekijken](hier moet de link)

## Bronnen
Tijdens het proces (van idee bedenken tot een uiteindelijke applicatie) heb ik gebruikgemaakt van de volgende bronnen:
https://isgeschiedenis.nl/nieuws/geschiedenis-van-de-tatoeage <br> 
https://collectie.wereldculturen.nl/ <br>
https://guides.emberjs.com/release/ <br>
http://demo.netwerkdigitaalerfgoed.nl/stories/nmvw/ <br> 



