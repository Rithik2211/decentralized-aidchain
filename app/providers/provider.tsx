"use client";
import { usePathname } from "next/navigation";
import NavBar from "../screens/navbar/page";

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathName = usePathname();
  const isLoginPage = pathName === '/Login';
  return (
    <>
        {!isLoginPage && <NavBar />}
        {children}
    </>
  )
}