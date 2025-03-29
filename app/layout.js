import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: "Mohammed Haydar",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        cz-shortcut-listen="true"
        className={`${outfit.className} antialiased leading-[2] overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}