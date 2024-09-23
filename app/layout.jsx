import { Poppins } from "next/font/google";
import "./globals.css";

// INFO: Importing the components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import PageTransitionEffect from "@/components/PageTransitionEffect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Menath Nadungoda",
  description: "Menath Nadungoda's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        <PageTransitionEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
