'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1f2326] border-t border-gray-700 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          이 웹사이트는 사용자 경험 향상과 광고 제공을 위해 쿠키를 사용합니다.{' '}
          <Link href="/privacy" className="text-[#ff4655] hover:underline">
            개인정보처리방침
          </Link>
          에서 자세한 내용을 확인하세요.
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            거부
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-[#ff4655] hover:bg-[#ff4655]/80 text-white text-sm rounded-lg font-medium transition-colors"
          >
            동의
          </button>
        </div>
      </div>
    </div>
  );
}
