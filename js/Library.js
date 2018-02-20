var Library = /** @class */ (function () {
    function Library(books, movies) {
        this.books = [];
        this.movies = [];
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        // Initialise the two arrays with the external json resource
        var books = data.books.map(function (book) { return Book.fromJSON(book); });
        var movies = data.movies.map(function (movie) { return Movie.fromJSON(movie); });
        return new Library(books, movies);
    };
    Library.prototype.getAll = function () {
        var items = [];
        this.books.map(function (book) { return items.push(book); });
        this.movies.map(function (movie) { return items.push(movie); });
        return items;
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map