import { Metadata } from "next";
import "./globals.scss";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>Header</Header>
        <main>{children}</main>
        <Footer>Footer</Footer>
      </body>
    </html>
  );
}
