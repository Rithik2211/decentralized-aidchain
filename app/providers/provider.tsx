"use client";
import { usePathname } from "next/navigation";
import NavBar from "../screens/navbar/page";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// type Attribute = "class" | "data-theme" | "data-mode"

// type ThemeProviderProps = {
//   children: React.ReactNode
//   attribute?: Attribute | Attribute[]
//   defaultTheme?: string
//   enableSystem?: boolean
//   storageKey?: string
//   themes?: string[]
//   forcedTheme?: string
//   disableTransitionOnChange?: boolean
// }

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