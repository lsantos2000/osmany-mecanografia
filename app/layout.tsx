import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./photo.css";
import "./printing.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const editorial = Cormorant_Garamond({variable:"--font-editorial",subsets:["latin"],weight:["500","600","700"]});

export const metadata: Metadata = {
  title: "Osmany Santos Macías | Mecanografía en Cienfuegos",
  description: "Mecanografía, transcripción y preparación de documentos en Cienfuegos, Cuba.",
  openGraph: { title: "Osmany Santos Macías | Mecanografía", description: "Sus documentos, bien hechos.", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Osmany Santos Macías | Mecanografía", description: "Sus documentos, bien hechos.", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${editorial.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
