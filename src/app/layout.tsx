import type { Metadata } from "next";
import { Inter, DotGothic16 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/layout/Cart";
import BuyEverythingButton from "@/components/BuyEverythingButton";
import KonamiWrapper from "@/components/KonamiWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dotGothic = DotGothic16({
  weight: "400",
  variable: "--font-dot-matrix",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Everything Store",
  description: "The Everything Store - A parody of Nothing.tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dotGothic.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <CartProvider>
          <KonamiWrapper>
            <Header />
            <Cart />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <BuyEverythingButton />
            <Footer />
          </KonamiWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
