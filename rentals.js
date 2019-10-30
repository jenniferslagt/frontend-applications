import Route from '@ember/routing/route';

const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-10/sparql"
const query = `
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?cho ?title ?type
WHERE {
 VALUES ?type { "Foto" "foto" "Negatief" "negatief" "Glasnegatief" "glasnegatief" "Dia" "dia" "Kleurendia" "kleurendia" "Lichtbeeld" "lichtbeeld"}
 ?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster21439> ;
      dc:title ?title ;
      dc:type ?type .
}
LIMIT 40
`
//categorie = "tatoeage"
//students.filter(function(name){ return filterFunctie(name)} )
//
//function filterFunctie(naam){
//    return naam.includes(categorie)
//}


export default Route.extend({
    model() {                       // model() is eigenlijk een functie: model: function()
    return fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
    .then(res => res.json())    // res is een response die hier wordt omgezet in Jason
    .then(json => {
        console.log(json.results.bindings[0]);
    return json.results.bindings;    // response wordt weergegeven in de console.log (alleen de bindings-map)
    });
    }})


