import localFont from "next/font/local";
import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Broodl",
  description: "Track your daily mood everyday of the year",
};

const openSans = Open_Sans({ subsets:["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export default function RootLayout({ children }) {

  const header = (
    <header className='p-4 sm:p-8 flex items-center justify-between gap-4'>
      <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Broodl</h1>
    </header>
  )

  const footer = (
    <footer className={'p-4 sm:p-8 ' + fugaz.className}>
        Footer
    </footer>
  )
  return (
    <html lang="en">
      <body
        className={'w-full, max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800' ${openSans.className} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
