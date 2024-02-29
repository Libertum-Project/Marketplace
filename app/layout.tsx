import type { Metadata } from "next";
import "./globals.css";
import PropertyProvider from "./context/PropertyProvider";
// import MessageBoxProvider from "./context/MessageBoxProvider";
import { NavBar } from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer"


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
        <head>
        <link rel="preconnect" href="https://cdn.ad360.media" />
        {/* <GoogleTagManager gtmId="GTM-WBK9FF4T" /> */}
      </head>



      <body>
        
          <NavBar />
          {/* <MessageBoxProvider> */}
            <PropertyProvider>              
              {children}
            </PropertyProvider>
            <Footer />

      </body>
    </html>
  );
}

