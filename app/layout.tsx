import type { Metadata } from "next";
import { Inter, Montserrat, Roboto, } from "next/font/google";
import "./globals.css";
import PropertyProvider from "./context/PropertyProvider";
import Footer from "./components/Footer/Desktop/Footer";
import NavigationMobile from "./components/Footer/Mobile/NavigationMobile"
import Navbar from "./components/Navbar/Navbar"

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
        <nav>
          <Navbar />
        </nav>
        <div  style={{ paddingTop: '120px' }}>
          <PropertyProvider>{children}</PropertyProvider>
        </div>        
        <footer className={montserrat.className}>
          <Footer />
          <NavigationMobile />        
        </footer>
      </body>
    </html>
  );
}


{/* <nav className={montserrat.className}>
<Navbar />
</nav> */}