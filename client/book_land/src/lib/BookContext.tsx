import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { getBooks, type Book } from "../data/books";
import { useQueryClient } from "@tanstack/react-query";


interface BookContextType {
    books: Book[]
    toggleFavorite: (id: number) => void
}

const BookContext = createContext<BookContextType | undefined>(undefined)

export const BookProvider = ({children}: {children: ReactNode}) => {
    const queryClient = useQueryClient()
    const initialBooks = getBooks()

    const [books, setBooks] = useState<Book[]>(() => {
        const savedBook = localStorage.getItem("books")
        return savedBook ? JSON.parse(savedBook) : initialBooks
    })

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    }, [books])

    const toggleFavorite = (id: number) => {
        setBooks(prevBooks => {
            const updated = prevBooks.map(book =>
                book.id === id ? { ...book, isFavorite: !book.isFavorite } : book
            )

            queryClient.setQueryData(["book", String(id)], (oldBook: Book | undefined) => {
                if (!oldBook) return oldBook
                return { ...oldBook, isFavorite: !oldBook.isFavorite }
            })

            queryClient.setQueryData(["books"], updated)

            return updated
        })
    }

    return (
        <BookContext.Provider value={{ books, toggleFavorite }}>
            {children}
        </BookContext.Provider>
    )

}

export const useBooks = () => {
    const context = useContext(BookContext)
    if (context === undefined) {
        throw new Error('useBooks must be used within a BookProvider')
    }
    return context
}