import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

//const font = Barlow_Condensed({ subsets: ["latin"]});

export const metadata = {
  title: "Umiam Website",
  description: "Umiam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={font.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
