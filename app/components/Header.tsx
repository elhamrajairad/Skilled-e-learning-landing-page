import logo from "@/public/logo-dark.svg"
import Image from "next/image"
export default function Header() {
    return (
        <header className="flex justify-between items-center py-8">
            <Image src={logo} alt="logo" />
            <button className="capitalize bg-[#13183f] text-white hover:bg-[#666ca3] cursor-pointer rounded-full px-6 py-3 font-bold">get started</button>
        </header>
    )
}
