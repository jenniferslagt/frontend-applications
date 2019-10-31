### Omschrijving concept
Jongen mensen zijn steeds meer geïnteresseerd in tatoeages. Tatoeages vertellen vaak een verhaal of hebben een specifieke betekenis die zich in het verleden heeft afgespeeld: de geschiedenis. Uit de korte desk research blijkt dat tatoeages vroeger als brandmerk dienden voor slaven. Ook was het populair onder de zeelieden. Het museum gaat echter over de geschiedenis van bepaalde dingen. Daarom wil ik een applicatie maken die beeldmateriaal van tatoeages aanbiedt. Het dient dus als een inspiratiebron voor mensen die een tatoeage willen zetten. Dit beeldmateriaal kan afkomstig zijn van verschillende culturen uit verschillende landen, afhankelijk van de voorkeuren van de gebruiker. <br>

### Target audience (doelgroep)
Het is de bedoeling om een nieuwe (jonge) doelgroep aan te spreken die geïnteresseerd zijn in unieke tatoeages van verschillende culturen.

### Wat haal ik uit mijn database?
Ik heb in Sparql een query gebruikt die foto's zoekt. Hierbij heb ik een filter toegevoegd zodat alleen foto's met de termen "tatoeage" of "tatoeages" worden weergegeven. Het is de bedoeling dat gebruikers deze data kunnen filteren op basis van culturen (of landen). Ik heb de volgende query in Sparql gebruikt: <br>
> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> <br>
> PREFIX dc: <http://purl.org/dc/elements/1.1/> <br>
> PREFIX dct: <http://purl.org/dc/terms/> <br>
> PREFIX skos: <http://www.w3.org/2004/02/skos/core#> <br>
> PREFIX edm: <http://www.europeana.eu/schemas/edm/> <br>
> PREFIX foaf: <http://xmlns.com/foaf/0.1/> <br>
> PREFIX dbo: <http://dbpedia.org/ontology/> <br>
> SELECT ?cho ?title ?type ?placeName (SAMPLE(?description) AS ?description) (SAMPLE(?picture) AS ?picture) WHERE { <br>
> <https://hdl.handle.net/20.500.11840/termmaster7745> skos:narrower* ?place . <br>
> ?place skos:prefLabel ?placeName . <br>
> VALUES ?type { "Foto" "foto" "Negatief" "negatief" "Glasnegatief" "glasnegatief" "Dia" "dia" "Kleurendia" "kleurendia">  "Lichtbeeld" "lichtbeeld"} <br>
> ?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster21439>; <br>
> dct:spatial ?place; <br>
> dc:type ?type; <br>
> dc:title ?title; <br>
> edm:isShownBy ?picture . <br>
> OPTIONAL {?cho dc:description ?description} . <br>
> FILTER langMatches(lang(?title), "ned") <br>
> } <br>
> LIMIT 40 <br>
`

### Aan de slag met Ember
Bij het ontwikkelen van dit concept heb ik het framework Ember gebruikt. Ember is een open-source JavaScript framework, waar webontwikkelaars webapplicaties kunnen maken met verschillende gebruikersinteracties. Er worden regelmatige verbeterde versies van Ember aangekondigd. <br>

Er is op de website een tutorial die je kan volgen om te begrijpen hoe je het via de terminal moet installeren en hoe je werk te werk gaat om uiteindelijk de applicatie te realiseren. Voordat Ember gedownload kan worden, moet je Node.js op je computer hebben. Ember is namelijk gebouwd met JavaScript. Ember is een groot pakket en is te installeren via een simpele command line in de terminal: <br>

> npm install -g ember-cli
<br>
Om te testen of Ember daadwerkelijk is geïnstalleerd, kan je deze commando invoeren die je laatste versie weergeeft:
> ember -v <br>

Vervolgens kan je beginnen met het creëeren van de applicatie door mappen aan te maken en deze te structuren met verschillende CLI's in de terminal die worden weergegeven in de tutorial. Ook kan je op deze manier pagina's met elkaar verbinden (routes), zodat de gebruiker kan navigeren. Tenslotte wordt er in de tutorial gefocust op de inhoud van de pagina's (html, css & javascript). Zo kunnen er componenten gebouwd worden en kunnen er bepaalde functionaliteiten toegevoegd worden.

### Resultaat (met link)
Dit is het resultaat:
[Klik hier om een live versie te bekijken](hier moet de link)

### Mijn leerpunten
Aangezien ik geen blok tech had, heb ik in deze twee weken een hoop geleerd: <br>
•	Mijn kennis over het museum Volkenkunde is vergroot. <br>
•	Ik ken de basiscommando's in de terminal. <br>
•	Ik heb geleerd om met Ember te werken. Zo blijkt dat frameworks hun eigen codes maken. <br>
•	Ik heb mijn vaardigheden en kennis van Javascript vergroot door een applicatie te maken. <br>
•	Ik weet nu hoe ik foto's kan zoeken in de collectie het museum m.b.v queries in Sparql. <br>
•	Ik heb geleerd hoe ik optimaal in github te werk kan gaan: zo wist ik weinig over wiki's en issues en kan ik nu beter mijn weg vinden.

### Bronnen
Tijdens het proces (van idee bedenken tot een uiteindelijke applicatie) heb ik gebruikgemaakt van de volgende bronnen:<br>
https://isgeschiedenis.nl/nieuws/geschiedenis-van-de-tatoeage <br>
https://collectie.wereldculturen.nl/ <br>
https://guides.emberjs.com/release/ <br>
http://demo.netwerkdigitaalerfgoed.nl/stories/nmvw/ <br>

### Credits

