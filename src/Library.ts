class Library{
    private _items : Item[];

    constructor(items: Item[])
    {
        this._items = items;
    }

    render(): void {
        let renderElement = document.getElementById("items");

        //Loop through items and add to Items HTMLElement
        for(let item of this._items)
        {
            item.render(renderElement);
        }

    }
}