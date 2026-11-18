import type { Book } from "../data/books"
import { Favorite } from "./FavoriteIcon"

interface BookCardProps {
    book: Book,
}

export function BookPageCard({ book }: BookCardProps) {
    return (
        <div className="flex gap-25 p-5">
            <img src={book.img} alt="Book preview" className="w-100 h-140 object-cover shrink-0 rounded-md" />
            <div className="flex flex-col gap-5">
                <h2 className="font-heading text-3xl">{book.title}</h2>
                <p className="font-heading text-gray-600 text-2xl">{book.author}</p>
                <h3 className="font-heading text-3xl">{book.price} руб.</h3>
                <div className="flex gap-10">
                    <button className="bg-green-900 py-3 px-2 w-[30%] rounded-2xl text-white">В корзину</button>
                    <Favorite book={book} />
                </div>
                <div className="flex flex-wrap gap-10 font-sans text-xl text-gray-600">
                    <span>{book.binding} переплёт</span>
                    <span>Издательство: {book.publisher}</span>
                    <span>Год издания: {book.year}</span>
                    <span>Страниц: {book.pages}</span>
                </div>
                <p className="font-sans">{book.description}</p>
            </div>
        </div>
    )
}