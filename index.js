import Route from '@ember/routing/route';

export default Route.extend({
    redirect() {
    this.transitionTo('rentals');
  }
});

//PREFIX dc: <http://purl.org/dc/elements/1.1/>
//PREFIX dct: <http://purl.org/dc/terms/>
//PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
//
//SELECT ?cho ?title ?type WHERE {
//  VALUES ?type { "Foto" "foto" "Negatief" "negatief" "Glasnegatief" "glasnegatief" "Dia" "dia" "Kleurendia" "kleurendia" "Lichtbeeld" "lichtbeeld"}
//  ?cho dc:type ?type ;
//        dc:title ?title .
//   FILTER langMatches(lang(?title), "ned")
//   FILTER (REGEX (?title, "tatoeage"))
//
//}
