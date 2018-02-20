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
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie(title, genre, description, ratingAge, ratingName) {
        var _this = _super.call(this, title, genre, description) || this;
        _this.ratingAge = ratingAge;
        _this.ratingName = ratingName;
        return _this;
    }
    Movie.prototype.render = function (element) {
        //Create article element
        var newElement = document.createElement("article");
        //Create html elements for fields
        var title = document.createElement("h3");
        var ratingAge = document.createElement("i");
        var ratingName = document.createElement("strong");
        var genre = document.createElement("p");
        var description = document.createElement("span");
        //Fill elements with corresponding data
        title.innerHTML = this.title;
        ratingAge.innerHTML = this.ratingAge.toString() + " | ";
        ratingName.innerHTML = this.ratingName.toString();
        genre.innerHTML = this.genre;
        description.innerHTML = this.description;
        //Append elements to article
        newElement.appendChild(title);
        newElement.appendChild(ratingAge);
        newElement.appendChild(ratingName);
        newElement.appendChild(genre);
        newElement.appendChild(description);
        //Append article to render element
        element.appendChild(newElement);
    };
    return Movie;
}(Item));
//# sourceMappingURL=Movie.js.map