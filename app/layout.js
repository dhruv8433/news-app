import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import "@/app/style/style.css";
import { Toaster } from "react-hot-toast";
import { ProviderStore } from "./StoreProvider";
import Footer from "./components/Footer";
require("dotenv").config();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* redux provider store */}
        <ProviderStore>
          <div>
            <NavBar />
          </div>
          {children}
          <div>
            <Footer />
          </div>
        </ProviderStore>
        <Toaster />
      </body>
    </html>
  );
}
