import type { Metadata } from "next";
import { Inter, Montserrat, Roboto, } from "next/font/google";
import "./globals.css";
import PropertyProvider from "./context/PropertyProvider";
import Footer from "./components/Footer/Desktop/Footer";
import NavigationMobile from "./components/Footer/Mobile/NavigationMobile"

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({subsets: ["latin"]})


export const metadata: Metadata = {
  title: "Marketplace - Libertum",
  description:
    "Exploring freedom, technology, and innovation in our journey to a brighter future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <PropertyProvider>{children}</PropertyProvider>
      </body>
      <footer className={montserrat.className}>
        <Footer />
        <NavigationMobile />        
      </footer>
    </html>
  );
}
