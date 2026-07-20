import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Settings Dashboard",
  description: "KPMG - AI settings dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
