let library = new Library([
    new Book("Clean Code", new Author("Robert O."),"Learning", "Lorem ipsum clean si amet."),
    new Book("Java OCA Guiding", new Author("Robert P."),"Learning", "Lorem ipsum java si amet."),
    new Book("Typescript Certificate Guiding", new Author("Robert T."),"Learning", "Lorem ipsum typescript si amet."),
    new Movie("White Chicks","Action, Comedy", "Lorem ipsum white si amet.", 16, "PG-16"),
    new Movie("Spiderwick Chronicles","Action, Fantasy", "Lorem ipsum spiderwick si amet.", 12, "PG-12"),
]);

library.render();
