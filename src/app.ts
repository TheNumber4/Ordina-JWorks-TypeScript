
let jsonParser = new JSONParser();
let library : Library;

jsonParser.getJSON("items.json", data => {
    library = Library.fromJSON(data);
    library.render();
});
