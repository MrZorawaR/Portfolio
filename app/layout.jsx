import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffects from "@/components/StairEffects";
import { Toaster } from "@/components/ui/toaster";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight:['100','200','300','400','500','600','700','800']
})
export const metadata = {
  title: "ZorawaR SingH",
  description: "Portfolio of ZorawaR SingH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={JetBrainsMono.variable}
      >
        <Header/>
        <StairEffects/>
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
