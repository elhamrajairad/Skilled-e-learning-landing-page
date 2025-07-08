import Image from "next/image";
import Button from "./Button";
import heroMobile from "@/public/image-hero-mobile.png"
import heroTablet from "@/public/image-hero-tablet.png"
import heroDesktop from "@/public/image-hero-desktop.png"

export default function Hero() {
    return (
        <section className="sm:grid grid-cols-3 lg:grid-cols-2 lg:mt-20">
            <section className="mb-4 sm:col-span-2 lg:col-span-1">
                <h1 className="text-blue text-3xl mb-4 font-extrabold lg:text-6xl lg:leading-[4rem]">Maximize skill,<br /> minimize budget</h1>
                <p className="font-semibold text-gray-400 mb-4 lg:my-8">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <Button size="lg" variant="primaryGradient" />
            </section>
            <section className="col-span-1">
                <Image src={heroMobile} alt="" className="sm:hidden" />
                <Image src={heroTablet} alt="" className="max-w-[25rem] relative -top-36 lg:hidden" />
                <Image src={heroDesktop} alt="" className="hidden lg:block absolute max-w-[50rem] -top-30" />
            </section>
        </section>
    )
}
