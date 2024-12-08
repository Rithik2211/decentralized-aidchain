import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from './providers/provider';
import { WagmiProvider } from "./providers/WagmiProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aid Chain",
  description: "Helping People ",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <WagmiProvider>
        <Provider>
          {children}
        </Provider>
      </WagmiProvider>
      </body>
    </html>
  );
}
