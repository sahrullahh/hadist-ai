import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Hadist.ai",
  description: "these app in development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <div className="flex gap-0 justify-center ">
          <Sidebar />
          <div className="w-full p-5">
            <img
              src="./logo/logo.svg"
              alt=""
            />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
