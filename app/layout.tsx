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
      <body className="bg-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
