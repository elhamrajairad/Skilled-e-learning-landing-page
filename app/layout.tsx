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
    <html lang="en" className={`${jakartaSans.className} `}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="lg:relative bg-[#F7F7FF]">
        {children}
        <footer className="bg-blue flex justify-between items-center py-8">
          <Image src={logoDark} alt="" />
          <Button variant="secondGradient" />
        </footer>
      </body>
    </html>
  );
}
