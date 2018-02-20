var jsonParser = new JSONParser();
var library;
jsonParser.getJSON("items.json", function (data) {
    library = Library.fromJSON(data);
    library.render();
});
//# sourceMappingURL=app.js.map