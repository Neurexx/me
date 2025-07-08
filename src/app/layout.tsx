import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "neurexx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  w-11/12 w-4xl max-w-4xl mx-auto`}
      >
        <div className="mt-4">
                  {children}
        </div>
      </body>
    </html>
  );
}
