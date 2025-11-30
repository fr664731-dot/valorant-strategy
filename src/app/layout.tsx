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
  title: {
    default: "VALOSTRAT - 발로란트 전략 가이드",
    template: "%s | VALOSTRAT",
  },
  description: "발로란트 맵 전략, 라인업 가이드, 요원 스킬 활용법, 팀 조합, 메타 분석을 제공하는 전략 커뮤니티. 프로 수준의 전략으로 랭크를 올려보세요!",
  keywords: ["발로란트", "valorant", "전략", "라인업", "요원", "메타", "팀조합", "발로란트 공략", "발로란트 가이드", "발로란트 팁"],
  authors: [{ name: "VALOSTRAT" }],
  creator: "VALOSTRAT",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://valorant-strategy.vercel.app",
    siteName: "VALOSTRAT",
    title: "VALOSTRAT - 발로란트 전략 가이드",
    description: "발로란트 맵 전략, 라인업 가이드, 요원 스킬 활용법, 팀 조합, 메타 분석을 제공하는 전략 커뮤니티",
  },
  twitter: {
    card: "summary_large_image",
    title: "VALOSTRAT - 발로란트 전략 가이드",
    description: "발로란트 맵 전략, 라인업 가이드, 요원 스킬 활용법, 팀 조합, 메타 분석",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "BBDle2H1N6g_3XGHGG0ObJEWzpgZYs43-lLDtpGZvkg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3LG2331L3N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3LG2331L3N');
            `,
          }}
        />
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
