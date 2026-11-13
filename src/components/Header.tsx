import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar"
import noteBookIcon from "../assets/icons/notebook-bookmark-svgrepo-com.svg"
import heartIcon from "../assets/icons/heart-svgrepo-com.svg"
import basketIcon from "../assets/icons/cart-large-minimalistic-svgrepo-com.svg"
import profileIcon from "../assets/icons/user-rounded-svgrepo-com.svg"

export function Header() {
    return (
        <header className="pt-5 pb-5 p-10 bg-amber-100/40">
            <nav className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src={noteBookIcon} alt="bookland" className="w-10 h-10" />
                    <Link to="/">
                        <h1 className="text-4xl font-heading text-green-950">BookLand</h1>
                    </Link>
                </div>
                <Link to="/catalog">
                    <p className="font-sans text-xl">Каталог</p>
                </Link>
                <SearchBar />
                <div className="flex justify-between gap-10">
                    <Link to="/favorite"><img src={heartIcon} alt="favorite" className="w-6 h-6" /></Link>
                    <Link to="/basket"><img src={basketIcon} alt="cart" className="w-6 h-6" /></Link>
                    <Link to="/profile"><img src={profileIcon} alt="profile" className="w-6 h-6" /></Link>
                </div>
            </nav>
        </header>
    )
}