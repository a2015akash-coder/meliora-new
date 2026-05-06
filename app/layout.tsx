import type {Metadata} from 'next';
import { Manrope, Playfair_Display } from "next/font/google";
import './globals.css'; // Global styles

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: 'Meliora Projects | Strategic Planning & Development Approvals',
  description: 'Position your project for approval with clarity, strategy and confidence. NSW-based strategic planning consultancy.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}

