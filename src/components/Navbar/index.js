import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-gray-800 sticky top-0 rounded-lg m-4 z-50">
            <div className="flex md:flex-row flex-col gap-3 justify-between p-4">
                <Link href={"/"} className="font-extrabold text-white text-3xl">MangaList</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar