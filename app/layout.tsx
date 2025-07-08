import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google"

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
      <body className="lg:relative">
        {children}
      </body>
    </html>
  );
}
