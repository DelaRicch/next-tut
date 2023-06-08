import { Navbar } from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "@/components/auth-provider";
import dotenv from 'dotenv'
dotenv.config();


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevRicch Blog",
  description: "This is a blog website for DevRich",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="max-w-[1366px] min-h-screen my-0 mx-auto p-0 flex flex-col justify-between">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
