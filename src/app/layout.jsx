import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactMail from "@/components/contactMail";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexel",
  description: "Freelancers group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <ContactMail />
        <Footer />
      </body>
    </html>
  );
}
