import type { Book } from "../data/books"

interface BasketCard {
    book: Book,
}

export function BasketCard({ book }: BasketCard) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-10">
                <img src={book.img} alt="Book preview" className="w-25 h-40 object-cover shrink-0 rounded-md" />
                <div className="flex flex-col gap-3">
                    <p className="font-heading text-xl">{book.title}</p>
                    <p className="font-sans text-gray-700">{book.author}</p>
                    <p className="mt-3 font-heading text-xl">{book.price} руб.</p>
                </div>
            </div>
            <div className="flex gap-10 items-center">
                <p className="font-heading text-xl">{book.price} руб.</p>
                <div className="flex gap-3 border border-gray-400 rounded-xl px-4 py-2 items-center">
                    <button className="font-heading text-xl">-</button>
                    <p className="font-heading">1</p>
                    <button className="font-heading text-xl">+</button>
                </div>
                <img src="src/assets/icons/trash-svgrepo-com.svg" className="w-6 h-6" />
            </div>
        </div>
    )
}