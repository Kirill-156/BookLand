import { getBooks, type Book } from "../data/books";

const books = getBooks()

export function getBookById(id: number): Promise<Book> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const book = books.find(book => book.id === id)
            if (!book) {
                reject(new Error(`Книга с id ${id} не найдена`))
                return
            }
            resolve(book)
        }, 400)
    })
}