import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ferni.shop",
  description: "Making your space beautiful, one room at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
