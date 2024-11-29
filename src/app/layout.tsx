import "./globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased grid justify-center`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
