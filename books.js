// Sample list of books with author names and publication years
const books = [
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
    },
    {
        title: "The Help",
        author: "Kathryn Stockett",
        year: 2009,
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        year: 2005,
    },
    {
        title: "The Fault in Our Stars",
        author: "John Green",
        year: 2012,
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        year: 2012,
    },
    {
        title: "The Nightingale",
        author: "Kristin Hannah",
        year: 2015,
    },
];


// Function to filter books published after 2010 and capitalize author names
const filterAndCapitalizeAuthors = (books) => {
    return books
        .filter((book) => book.year < 2010)
        .map((book) => {
            return {
                ...book,
                author: book.author.toUpperCase(),
            };
        });
};

// Call the filterAndCapitalizeAuthors() function with the sample list of books
const filteredBooks = filterAndCapitalizeAuthors(books);

// Log the original and filtered book arrays
console.log("Original Books Array:\n", books);
console.log("Filtered and Capitalized Books Array:\n", filteredBooks);
