import { useState } from "react"
import type { Book } from "../data/books"
import heartFalseIcon from "../assets/icons/heart-svgrepo-false.svg"
import heartTrueIcon from "../assets/icons/heart-svgrepo-true.svg"
interface BookCardProps {
    book: Book,
}

export function Favorite({ book }: BookCardProps) {
    const [isFavorite, setIsfavorite] = useState<boolean>(book.isFavorite)
    return (
        <button onClick={() => setIsfavorite((prev) => !prev)}>
            <img src={!isFavorite ? heartFalseIcon : heartTrueIcon} alt="favorite" className="w-6 h-6" />
        </button>
    )
}