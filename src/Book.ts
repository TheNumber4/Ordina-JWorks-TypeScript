class Book extends Item{
    title: string;
    author: Author;
    genre: string;
    description: string;
    constructor(title: string, author: Author, genre: string, description: string)
    {
        super(title,genre,description);
        this.author = author;
    }
    render(element: HTMLElement):void{
        //Create article element
        let newElement = document.createElement("article");

        //Create html elements for fields
        let title  = document.createElement("h3");
        let author = document.createElement("i");
        let genre = document.createElement("p");
        let description = document.createElement("span");

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
    }


}