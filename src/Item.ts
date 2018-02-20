 abstract class Item{
    title: string;
    genre: string;
    description: string;
    constructor(title: string, genre: string, description: string)
    {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }
    render(element: HTMLElement):void{
        //Create article element
        let newElement = document.createElement("article");

        //Create html elements for fields
        let title  = document.createElement("h3");
        let genre = document.createElement("p");
        let description = document.createElement("span");

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
    }
}