import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"
import { getBookById } from "../api/getBookById"
import { BookPageCard } from "../components/BookPageCard"
import smallArrow from "../assets/icons/arrow-next-small-svgrepo-com.svg"

export function BookPage() {
    const { id } = useParams()

    const { data: book, isLoading, isError, error } = useQuery({
        queryKey: ["book", id],
        queryFn: () => getBookById(Number(id)),
        retry: false
    })

    if (isLoading) {
        return <p>Загрузка данных</p>
    }

    if (isError || !book) {
        return <p>Ошибка при загрузке: {error?.message}</p>
    }

    return (
        <div className="p-10 flex flex-col gap-8 bg-amber-100/40">
            <nav className="flex gap-3 font-heading text-2xl items-center">
                <Link to="/">Главная</Link>
                <img src={smallArrow} className="w-6 h-6" />
                <Link to="/catalog">Каталог</Link>
                <img src={smallArrow} className="w-6 h-6" />
                <span>{book.title}</span>
            </nav>
            <BookPageCard book={book} />
        </div>
    )
}