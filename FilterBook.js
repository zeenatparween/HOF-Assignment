const books = [
    {title: "The cather in the Rye", author: "j.d. salinger", year: 1951},
    {title: "The Hunger Games", author: "suzanne collins" , year:2008},
    {title: "The Girl with the dragon Tatoo" , author: "stieg larson" , year: 2005},
    {title: "Divergent" , author: "Veronica roth", year: 2011},
    {title: "Fifty Shades for grey", author: "E.L James", year: 2015},
    {title:"Steve Jobs", author: "walter issacon", year: 2013}
]

const filteredBooks = books.filter(book => book.year >= 2010);

const CapitalizeAuthorName = filteredBooks.map(book => {
    return{
        title:books.title,
        author:books.author.splite('').map( name => name.toUpperCase()).join(''),
        year:book.year
    };
});
console.log(CapitalizeAuthorName);

