var Library = /** @class */ (function () {
    function Library(items) {
        this._items = items;
    }
    Library.prototype.render = function () {
        var renderElement = document.getElementById("items");
        //Loop through items and add to Items HTMLElement
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.render(renderElement);
        }
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map