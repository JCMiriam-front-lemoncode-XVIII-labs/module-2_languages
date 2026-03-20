// Read Books
import { BOOKS } from "../../constants/books";
import type { Book } from "../../constants/types";

// Buscamos un libro por su título dentro de una lista tipada como readonly.
// Usamos el método find de Array.prototype para obtener el primer libro cuyo title coincida con titleToSearch.
// Si el libro existe, devolvemos su propiedad isRead. Si no existe, devolvemos false.
const isBookRead = (books: readonly Book[], titleToSearch: string): string => {
  const book = books.find(({ title }) => title === titleToSearch);
  const isRead = book ? book.isRead : false;
  const parsedRead = isRead ? "Read" : "Not read";

  return `${book?.title}, ${book?.author} (${book?.year}) - ${parsedRead}`;
};

// Ejemplos de uso:
console.log(isBookRead(BOOKS, "The Metamorphosis"));
console.log(isBookRead(BOOKS, "Project Hail Mary"));
console.log(isBookRead(BOOKS, "Animal Farm"));
