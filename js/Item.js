var Item = /** @class */ (function () {
    function Item(title, genre, description) {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }
    Item.prototype.render = function (element) {
        //Create article element
        var newElement = document.createElement("article");
        //Create html elements for fields
        var title = document.createElement("h3");
        var genre = document.createElement("p");
        var description = document.createElement("span");
        //Fill elements with corresponding data
        title.innerHTML = this.title;
        genre.innerHTML = this.genre;
        description.innerHTML = this.description;
        //Append elements to article
        newElement.appendChild(title);
        newElement.appendChild(genre);
        newElement.appendChild(description);
        //Append article to render element
        element.appendChild(newElement);
    };
    return Item;
}());
//# sourceMappingURL=Item.js.map