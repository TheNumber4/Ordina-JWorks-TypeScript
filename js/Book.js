var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, genre, description) {
        var _this = _super.call(this, title, genre, description) || this;
        _this.author = author;
        return _this;
    }
    Book.prototype.render = function (element) {
        //Create article element
        var newElement = document.createElement("article");
        //Create html elements for fields
        var title = document.createElement("h3");
        var author = document.createElement("i");
        var genre = document.createElement("p");
        var description = document.createElement("span");
        //Fill elements with corresponding data
        title.innerHTML = this.title;
        author.innerHTML = this.author.name;
        genre.innerHTML = this.genre;
        description.innerHTML = this.description;
        //Append elements to article
        newElement.appendChild(title);
        newElement.appendChild(author);
        newElement.appendChild(genre);
        newElement.appendChild(description);
        //Append article to render element
        element.appendChild(newElement);
    };
    return Book;
}(Item));
//# sourceMappingURL=Book.js.map