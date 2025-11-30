import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f1923] border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-[#ff4655]">VALO</span>
              <span className="text-xl font-bold text-white">STRAT</span>
            </div>
            <p className="text-gray-400 text-sm">
              발로란트 전략과 팁을 공유하는 커뮤니티
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">가이드</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/maps" className="text-gray-400 hover:text-[#ff4655]">맵 전략</Link></li>
              <li><Link href="/lineups" className="text-gray-400 hover:text-[#ff4655]">라인업 가이드</Link></li>
              <li><Link href="/agents" className="text-gray-400 hover:text-[#ff4655]">요원 가이드</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">분석</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team-comps" className="text-gray-400 hover:text-[#ff4655]">팀 조합</Link></li>
              <li><Link href="/meta" className="text-gray-400 hover:text-[#ff4655]">메타 분석</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">커뮤니티</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/community" className="text-gray-400 hover:text-[#ff4655]">전략 공유</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <div className="flex justify-center gap-4 mb-2">
            <Link href="/privacy" className="hover:text-[#ff4655]">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-[#ff4655]">이용약관</Link>
          </div>
          <p>© 2025 VALOSTRAT. 발로란트는 Riot Games의 상표입니다.</p>
          <p className="mt-1 text-xs">본 사이트는 Riot Games와 제휴 관계가 없는 팬 사이트입니다.</p>
        </div>
      </div>
    </footer>
  );
}
