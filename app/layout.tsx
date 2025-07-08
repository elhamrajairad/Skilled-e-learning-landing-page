import Image from "next/image";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google"
import logoDark from "@/public/logo-light.svg"
import Button from "./components/Button";

export const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.className}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="lg:relative bg-[#F7F7FF]">
        {children}
        <footer className="bg-blue py-6">
          <section className="container max-w-[1100px] mx-auto px-6 sm:px-15 xl:px-0 flex justify-between items-center">
            <Image src={logoDark} alt="" />
            <Button variant="secondGradient" />
          </section>
        </footer>
      </body>
    </html>
  );
}
