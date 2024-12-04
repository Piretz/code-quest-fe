import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Learning Platform',
  description: 'Interactive learning platform for web development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <main className="ml-20 pt-16 min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}