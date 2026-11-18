import type { Book } from "../data/books"
import { useNavigate } from "react-router-dom"
import { Favorite } from "./FavoriteIcon"

interface BookCardProps {
    book: Book,
}

export function BookCard({ book }: BookCardProps) {
    const navigate = useNavigate()

    return (
        <div className="relative flex flex-col p-8 border-2 border-gray-300 rounded-2xl">
            <img src={book.img} alt="book" className="shrink-0 rounded-md" onClick={() => navigate(`/book/${book.id}`)}/>
            <div className=" flex flex-col gap-2 my-3">
                <h3 className="font-heading text-2xl">{book.title}</h3>
                <p className="font-sans text-gray-600">{book.author}</p>
                <p className="font-sans text-gray-800 text-xl">{book.price} руб.</p>
            </div>
            <div className="flex gap-5 items-center justify-between">
                <button className="bg-green-900 py-3 px-2 rounded-2xl text-white w-[80%]">В корзину</button>
                <Favorite book={book} />
            </div>
        </div>
    )
}