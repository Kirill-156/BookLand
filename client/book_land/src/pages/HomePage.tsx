import { NavLink, Link } from "react-router-dom"
import { BookCard } from "../components/BookCard"
import arrowRight from "../assets/icons/arrow-right-svgrepo-com.svg"
import bannerImg from "../assets/img/home.png"
import { useBooks } from "../lib/BookContext"

export function HomePage() {
    const { books } = useBooks()

    return (
        <div>
            <main 
                className="relative w-full aspect-2.5/1 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bannerImg})`}}
            >
                <div className="absolute inset-0 flex flex-col justify-center px-10 max-w-[50%] gap-8">
                    <h1 className="font-heading text-6xl text-green-950">Книги, которые вдохновляют</h1>
                    <p className="font-sans text-2xl w-[90%] text-green-950">Открой для себя новые миры, идеи и истории. В нашем магазине вы найдёте книги на любой вкус.</p>
                    <Link to="/catalog">
                        <button className="flex items-center gap-2 bg-green-900 w-[40%] justify-center py-3 rounded-2xl">
                            <p className="text-white font-sans text-xl">Перейти к каталогу</p>
                            <img src={arrowRight} className="h-6 w-6" />
                        </button>
                    </Link>
                </div>
            </main>
            <section className="flex flex-col gap-10 bg-amber-100/40 p-10">
                <div className="flex justify-between items-center">
                    <h2 className="font-heading text-3xl">Популярные книги</h2>
                    <NavLink to="/catalog" className="font-sans text-xl text-gray-800">Смотерть все</NavLink>
                </div>
                <div className="grid grid-cols-4 gap-10">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>
        </div>
    )
}