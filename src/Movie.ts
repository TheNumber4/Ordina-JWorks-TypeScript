class Movie extends Item implements Rating{
    title: string;
    genre: string;
    description: string;
    ratingAge:number;
    ratingName: string;
    constructor(title: string, genre: string, description: string, ratingAge: number, ratingName: string)
    {
        super(title,genre,description);
        this.ratingAge = ratingAge;
        this.ratingName = ratingName;
    }
    render(element: HTMLElement):void{
        //Create article element
        let newElement = document.createElement("article");

        //Create html elements for fields
        let title  = document.createElement("h3");
        let ratingAge = document.createElement("i");
        let ratingName = document.createElement("strong");
        let genre = document.createElement("p");
        let description = document.createElement("span");

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
    }
}