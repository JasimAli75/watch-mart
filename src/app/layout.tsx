import NavBar from "@/MainComponents/views/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import Wrapper from "@/MainComponents/shared/Wrapper";
import Footer from "@/MainComponents/views/Footer/Footer";

const inter = Maven_Pro({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Watch Mart",
  description: "Best Online shopping platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <NavBar />
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
