import DunePreview from "../assets/img/dune.jpg"
import Preview1984 from "../assets/img/1984.jpg"
import LittlePrincePreview from "../assets/img/the-little-prince.jpg"
import HabbitPreview from "../assets/img/habbit.jpg"

export interface Book {
    id: number,
    title: string,
    img: string,
    author: string,
    isFavorite: boolean,
    price: number,
    publisher: string,
    binding: string,
    year: number,
    pages: number,
    description: string,
}

const books: Book[] = [
    { 
        id: 1, 
        title: "Дюна", 
        img: DunePreview, 
        author: "Фрэнк Герберт", 
        isFavorite: false, 
        price: 1890,
        publisher: "АСТ",
        binding: "Твердый",
        year: 2020,
        pages: 736,
        description: "Эпическая сага о пустынной планете Арракис, единственном источнике самого ценного вещества во вселенной — пряности."
    },
    { 
        id: 2, 
        title: "1984", 
        img: Preview1984, 
        author: "Джордж Оруэлл", 
        isFavorite: false, 
        price: 1690,
        publisher: "Азбука",
        binding: "Твердый",
        year: 2021,
        pages: 384,
        description: "Антиутопия о тоталитарном обществе, где Большой Брат следит за каждым шагом граждан, а правда подменяется пропагандой."
    },
    { 
        id: 3, 
        title: "Маленький принц", 
        img: LittlePrincePreview, 
        author: "Антуан де Сент-Экзюпери", 
        isFavorite: false, 
        price: 1490,
        publisher: "Эксмо",
        binding: "Твердый",
        year: 2019,
        pages: 128,
        description: "Философская сказка-притча о маленьком принце с далекой планеты, который учит нас видеть суть вещей сердцем."
    },
    { 
        id: 4, 
        title: "Сила привычки", 
        img: HabbitPreview, 
        author: "Чарльз Дахигг", 
        isFavorite: false, 
        price: 1790,
        publisher: "Манн, Иванов и Фербер",
        binding: "Твердый",
        year: 2022,
        pages: 416,
        description: "Исследование того, как формируются наши привычки, почему их так сложно изменить и как использовать эту силу для улучшения жизни."
    },
]

export function getBooks(): Array<Book> {
    return books
}