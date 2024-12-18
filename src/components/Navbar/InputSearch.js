"use client";
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if (!keyword) return
        event.preventDefault()
        router.push(`/search/${keyword}`)
    }

    return (
        <form className="relative" onSubmit={handleSearch}>
            <input type="text" className="py-2 px-4 w-full rounded-md" placeholder="Search" ref={searchRef} />
            <button className="absolute top-2 end-2"onClick={handleSearch}>
                <MagnifyingGlass size={25} />
            </button>
        </form>
    )
}

export default InputSearch