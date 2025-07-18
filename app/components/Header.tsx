import logo from "@/public/logo-dark.svg"
import Image from "next/image"
import Button from "./Button"
export default function Header() {
    return (
        <header className="flex justify-between items-center py-8 relative z-20">
            <Image src={logo} alt="logo" />
            <Button variant="colored" size="sm" />
        </header>
    )
}
