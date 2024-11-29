import "./globals.css";
import Header from "./Header";
import { Space_Mono as font } from "next/font/google";

const mainTypeface = font({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased grid justify-center ${mainTypeface.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
