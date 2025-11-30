import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VALOSTRAT - 발로란트 전략 가이드",
  description: "발로란트 맵 전략, 라인업 가이드, 요원 스킬 활용법, 팀 조합, 메타 분석을 제공하는 전략 커뮤니티",
  keywords: "발로란트, valorant, 전략, 라인업, 요원, 메타, 팀조합",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google AdSense - 실제 배포시 본인 ID로 교체 */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body className={`${geist.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
