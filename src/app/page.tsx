import Link from 'next/link';
import AdBanner from '@/components/AdBanner';

const features = [
  {
    title: '맵 전략',
    description: '어센트, 바인드, 헤이븐 등 모든 맵의 공격/수비 전략',
    href: '/maps',
    icon: '🗺️',
  },
  {
    title: '라인업 가이드',
    description: '요원별 스킬 라인업과 원웨이 스모크 위치',
    href: '/lineups',
    icon: '🎯',
  },
  {
    title: '요원 가이드',
    description: '모든 요원의 스킬 활용법과 팁',
    href: '/agents',
    icon: '👤',
  },
  {
    title: '팀 조합',
    description: '맵별 추천 팀 조합과 시너지 분석',
    href: '/team-comps',
    icon: '👥',
  },
  {
    title: '메타 분석',
    description: '현재 메타와 티어 리스트',
    href: '/meta',
    icon: '📊',
  },
  {
    title: '전략 공유',
    description: '유저들의 전략과 팁 공유 게시판',
    href: '/community',
    icon: '💬',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 valorant-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#ff4655]">발로란트</span> 전략의 모든 것
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            프로 수준의 전략, 라인업, 팀 조합을 배우고 랭크를 올려보세요
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/maps"
              className="bg-[#ff4655] hover:bg-[#ff4655]/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              전략 보기
            </Link>
            <Link
              href="/community"
              className="border border-[#ff4655] text-[#ff4655] hover:bg-[#ff4655]/10 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              전략 공유하기
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <AdBanner slot="home-top" format="horizontal" />
      </div>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">카테고리</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="bg-[#1f2326] border border-gray-700 rounded-xl p-6 card-hover"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <AdBanner slot="home-bottom" format="horizontal" />
      </div>

      {/* Latest Strategies Preview */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">최신 전략</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#1f2326] border border-gray-700 rounded-xl overflow-hidden card-hover">
              <div className="h-40 bg-gradient-to-br from-[#ff4655]/20 to-[#0f1923]" />
              <div className="p-4">
                <span className="text-xs text-[#ff4655] font-medium">어센트</span>
                <h3 className="text-lg font-semibold mt-1">A 사이트 빠른 러쉬 전략</h3>
                <p className="text-gray-400 text-sm mt-2">제트와 레이즈를 활용한 공격 전략...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
