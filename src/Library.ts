class Library {

    items:Array<Item>;

    constructor(public books: Array<Book>,public movies:Array<Movie>){

    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books, movies);
    }
    addMovie():void {
        this.movies.push(new Movie('I am number four','Action, Fantasy', 'Lorem ipsum dolor si amet', 18, "PG"));
        this.render();
    }
    addBook():void {
        this.books.push(new Book('The Book',new Author('John Doe'),'Action, Fantasy', 'Lorem ipsum dolor si amet'));
        this.render();
    }
    render():void {
        let renderElement: HTMLElement = document.getElementById("items");
        let items:Array<Item> = this.getAll();
        //Clear current item set
        renderElement.innerHTML = "";
        //Refill with old + new items
        items.map(item => item.render(renderElement));
    }
    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }
}