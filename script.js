let fruits = ["Pineapples", "Mango", "Strawberries", "Coconuts", "Green grapes"];

console.log(fruits[0]);
  removedFirst = fruits.shift();
 console.log("After shift:", fruits);
 console.log("Removed first element:", removedFirst);

 fruits.unshift("Apricot");

console.log("After unshift:", fruits);


const removedLast = fruits.pop();

console.log("After pop:", fruits);
console.log("Removed last element:", removedLast);

fruits.push("Banana");

console.log("After push:", fruits);


fruits.push("Cherry", "Date");

console.log("Before splice:", fruits);


const cherryIndex = fruits.indexOf("Cherry");

fruits.splice(cherryIndex, 2, "Fig", "Grape");

console.log("After splice:", fruits);

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}
   {
    title: "1984",
    author: "George Orwell",
    year: 1949
},
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851
  }
];

books.forEach(book => {
  console.log(book.title);
});
const authors = books.map(book => book.author);

console.log(authors);


const oldBooks = books.filter(book => book.year < 1950);

console.log(oldBooks);
const foundBook = books.find(book => book.title === "1984");


