interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "El Quijote", isRead: true },
  { title: "El Principito", isRead: false },
  { title: "Cien años de soledad", isRead: true },
  { title: "Crimen y castigo", isRead: false },
  { title: "El amor en los tiempos del cólera", isRead: true },
];

const isBookRead = (books: Book[], title: string): boolean =>
  books.some((book) => book.title === title && book.isRead);

console.log(isBookRead(books, "El Quijote")); 
console.log(isBookRead(books, "ElQuijote")); 

