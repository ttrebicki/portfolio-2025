import { PropsWithChildren } from "react";
import { Navbar } from "@/ui/layout/Navbar";
import { Footer } from "@/ui/layout/Footer";
export { metadata } from "@/lib/constants/seo";
import { layoutConstraintsCn } from "@/lib/constants/ui";

import "./globals.css";
import React from "react";
import { Toaster } from "react-hot-toast";
import { geistMono, geistSans } from "@/lib/constants/fonts";

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between bg-background`}
      >
        <Navbar />
        <main className={`${layoutConstraintsCn}`}>{children}</main>
        <Footer />
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
