
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { type Metadata } from 'next'



import { Toaster } from "@/Components/ui/sonner"

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Clean",
  description: "Protecting Your Digital World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
        
          
          {children}
            <Toaster /> 
          
        </body>
      </html>
   
  );
}
