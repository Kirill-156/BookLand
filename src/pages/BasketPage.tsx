import { BasketCard } from "../components/BasketCard"
import { useBooks } from "../lib/BookContext"

export function BasketPage() {
    const { books } = useBooks()

    return (
        <div className="bg-amber-100/40 p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
                <h2 className="font-heading text-3xl">Корзина</h2>
                <p className="font-sans text-xl text-gray-700">товара</p>
            </div>
            <main className="grid grid-cols-5 gap-20">
                <section className="col-span-3 flex flex-col gap-10 p-10 border border-gray-400 rounded-2xl bg-white/30">
                    {books.map(book => (
                        <BasketCard key={book.id} book={book} />
                    ))}
                </section>
                <section className="flex flex-col gap-5">
                    <h3 className="font-heading text-3xl">Итого</h3>
                    <h3 className="font-heading text-2xl">5070 руб.</h3>
                    <button className="bg-green-900 py-3 px-2 rounded-2xl text-white">Оформить заказ</button>
                </section>
            </main>
        </div>
    )
}