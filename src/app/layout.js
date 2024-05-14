import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-Lfmyt9CP6gysodLcZh7bVHrz7qc1PVFkld4K7rTg6L8lCk0pUI6UOSDjiPY4UE3FgB+VVYoGFG9f2C9g7J3VwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <style>{`/* Custom CSS here */`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}