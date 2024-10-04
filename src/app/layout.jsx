import { Inter, League_Script, Delius } from "next/font/google";
// import Navbar from "@/components/Navbar";
import "./globals.css";

// Initialize the fonts
const inter = Inter({ subsets: ["latin"] });
const league_script = League_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});
const fasinate = Delius({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fasinate",
});

export const metadata = {
  title: "Hanu's Portfolio",
  description: "Created by Hanu Singh",
  icons: {
    icon: {
      url: "/favicon.ico",
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${league_script.className} ${fasinate.className}`}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
