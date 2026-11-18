import type { Book } from "../data/books"
import heartFalseIcon from "../assets/icons/heart-svgrepo-false.svg"
import heartTrueIcon from "../assets/icons/heart-svgrepo-true.svg"
import { useBooks } from "../lib/BookContext"

interface BookCardProps {
    book: Book,
}

export function Favorite({ book }: BookCardProps) {
    const { books, toggleFavorite } = useBooks()
    const isFavorite = books.find(b => b.id === book.id)?.isFavorite ?? book.isFavorite

    return (
        <button onClick={() => toggleFavorite(book.id)}>
            <img src={isFavorite ? heartTrueIcon : heartFalseIcon} alt="favorite" className="w-6 h-6" />
        </button>
    )
}