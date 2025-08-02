
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


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
        <ClerkProvider>
          {/* <Navbar /> */}
          {children}
            <Toaster /> 
          </ClerkProvider>
        </body>
      </html>
   
  );
}
