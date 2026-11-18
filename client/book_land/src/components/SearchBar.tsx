import searchIcon from "../assets/icons/magnifer-svgrepo-com.svg"

export function SearchBar() {
    return (
        <div className="flex justify-between gap-2 border rounded-2xl p-2">
            <img src={searchIcon} alt="search" className="w-6 h-6" />
            <input type="text" placeholder="Поиск книг..." className="placeholder-slate-400 outline-none"/>
        </div>
    )
}