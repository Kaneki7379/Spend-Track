import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner'
export const metadata = {
  title: "Spend Track",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClerkProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors/>
          {/* Footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>&copy; 2025</p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
