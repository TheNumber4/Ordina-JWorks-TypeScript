class Library {
    books:Array<Book> = [];
    movies:Array<Movie> = [];

    constructor(books: Book[],movies:Movie[]){
        this.books = books;
        this.movies = movies;
    }

    static fromJSON(data: any) : Library {
       // Initialise the two arrays with the external json resource
        let books:Array<Book> = data.books.map(book => Book.fromJSON(book));
        let movies:Array<Movie> = data.movies.map(movie => Movie.fromJSON(movie));

        return new Library(books,movies);
    }

    getAll():Item[]{
        let items:Array<Item> = [];
        this.books.map(book => items.push(book));
        this.movies.map(movie => items.push(movie));

        return items;
    }
}