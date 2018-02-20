var Library = /** @class */ (function () {
    function Library(books, movies) {
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        var books = data.books.map(function (val) { return Book.fromJSON(val); });
        var movies = data.movies.map(function (val) { return Movie.fromJSON(val); });
        return new Library(books, movies);
    };
    Library.prototype.addMovie = function () {
        this.movies.push(new Movie('I am number four', 'Action, Fantasy', 'Lorem ipsum dolor si amet', 18, "PG"));
        this.render();
    };
    Library.prototype.addBook = function () {
        this.books.push(new Book('The Book', new Author('John Doe'), 'Action, Fantasy', 'Lorem ipsum dolor si amet'));
        this.render();
    };
    Library.prototype.render = function () {
        var renderElement = document.getElementById("items");
        var items = this.getAll();
        //Clear current item set
        renderElement.innerHTML = "";
        //Refill with old + new items
        items.map(function (item) { return item.render(renderElement); });
    };
    Library.prototype.getAll = function () {
        this.items = this.books.concat(this.movies);
        return this.items;
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map