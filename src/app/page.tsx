import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import { agents } from '@/data/agents';

const features = [
  { title: '맵 전략', description: '모든 맵의 공격/수비 전략', href: '/maps', icon: '🗺️' },
  { title: '라인업', description: '요원별 스킬 라인업', href: '/lineups', icon: '🎯' },
  { title: '요원 가이드', description: '스킬 활용법과 팁', href: '/agents', icon: '👤' },
  { title: '팀 조합', description: '맵별 추천 조합', href: '/team-comps', icon: '👥' },
  { title: '메타 분석', description: '현재 메타 티어', href: '/meta', icon: '📊' },
  { title: '프로 세팅', description: '프로 선수 감도/크로스헤어', href: '/pro-settings', icon: '🎮' },
];

const quickTools = [
  { title: '랜덤 요원', href: '/tools/random-agent', icon: '🎰', color: 'from-purple-500/30' },
  { title: '경제 계산기', href: '/tools/economy', icon: '💰', color: 'from-yellow-500/30' },
  { title: '감도 변환', href: '/tools/sensitivity', icon: '🎯', color: 'from-blue-500/30' },
  { title: '콜아웃 맵', href: '/callouts', icon: '📍', color: 'from-green-500/30' },
];

const stats = [
  { label: '요원 가이드', value: agents.length + '+', suffix: '개' },
  { label: '맵 전략', value: '50+', suffix: '개' },
  { label: '라인업', value: '100+', suffix: '개' },
  { label: '프로 세팅', value: '10+', suffix: '명' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 개선됨 */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff4655]/20 via-[#0f1923] to-[#1a2634]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff4655]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-[#ff4655]/20 rounded-full text-[#ff4655] text-sm font-medium mb-6">
            🔥 시즌 9 메타 업데이트
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#ff4655]">발로란트</span> 전략의
            <br />모든 것
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            프로 수준의 전략, 라인업, 팀 조합을 배우고
            <br className="hidden md:block" />
            랭크를 올려보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/maps"
              className="bg-[#ff4655] hover:bg-[#ff5566] text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-[#ff4655]/25"
            >
              🗺️ 전략 보기
            </Link>
            <Link
              href="/tools/random-agent"
              className="bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              🎰 랜덤 요원 뽑기
            </Link>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-[#1a2634] rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-700/50 shadow-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff4655]">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 빠른 도구 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">⚡ 빠른 도구</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group relative bg-[#1a2634] rounded-xl p-6 text-center hover:ring-2 hover:ring-[#ff4655] transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{tool.icon}</span>
                <span className="font-medium text-white">{tool.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBanner slot="home-top" format="horizontal" />

      {/* 카테고리 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">📚 카테고리</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="bg-[#1a2634] border border-gray-700/50 rounded-xl p-6 hover:border-[#ff4655]/50 hover:bg-[#1a2634]/80 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ff4655] transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 인기 요원 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">🔥 인기 요원</h2>
          <Link href="/agents" className="text-[#ff4655] hover:underline text-sm">전체 보기 →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {agents.slice(0, 6).map((agent) => (
            <Link
              key={agent.id}
              href={`/agents/${agent.id}`}
              className="bg-[#1a2634] rounded-xl p-4 text-center hover:ring-2 hover:ring-[#ff4655] transition-all group"
            >
              <span className="text-5xl block mb-2 group-hover:scale-110 transition-transform">{agent.icon}</span>
              <span className="font-medium text-white">{agent.name}</span>
              <span className={`block text-xs mt-1 ${
                agent.role === '타격대' ? 'text-red-400' :
                agent.role === '척후대' ? 'text-blue-400' :
                agent.role === '전략가' ? 'text-purple-400' :
                'text-green-400'
              }`}>{agent.role}</span>
            </Link>
          ))}
        </div>
      </section>

      <AdBanner slot="home-middle" format="horizontal" />

      {/* 최신 전략 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">📰 최신 전략</h2>
          <Link href="/maps" className="text-[#ff4655] hover:underline text-sm">전체 보기 →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/maps/ascent" className="bg-[#1a2634] rounded-xl overflow-hidden hover:ring-2 hover:ring-[#ff4655] transition-all group">
            <div className="h-40 bg-gradient-to-br from-[#ff4655]/30 to-[#0f1923] flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform">🏰</span>
            </div>
            <div className="p-4">
              <span className="text-xs text-[#ff4655] font-medium">어센트</span>
              <h3 className="text-lg font-semibold mt-1">미드 컨트롤 전략</h3>
              <p className="text-gray-400 text-sm mt-2">오멘 스모크와 소바 리콘으로 미드 장악</p>
            </div>
          </Link>
          <Link href="/maps/bind" className="bg-[#1a2634] rounded-xl overflow-hidden hover:ring-2 hover:ring-[#ff4655] transition-all group">
            <div className="h-40 bg-gradient-to-br from-blue-500/30 to-[#0f1923] flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform">🌀</span>
            </div>
            <div className="p-4">
              <span className="text-xs text-blue-400 font-medium">바인드</span>
              <h3 className="text-lg font-semibold mt-1">텔레포터 활용 전략</h3>
              <p className="text-gray-400 text-sm mt-2">빠른 로테이션과 기습 플레이</p>
            </div>
          </Link>
          <Link href="/maps/haven" className="bg-[#1a2634] rounded-xl overflow-hidden hover:ring-2 hover:ring-[#ff4655] transition-all group">
            <div className="h-40 bg-gradient-to-br from-green-500/30 to-[#0f1923] flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform">🏛️</span>
            </div>
            <div className="p-4">
              <span className="text-xs text-green-400 font-medium">헤이븐</span>
              <h3 className="text-lg font-semibold mt-1">3사이트 수비 전략</h3>
              <p className="text-gray-400 text-sm mt-2">킬조이와 사이퍼로 효율적인 수비</p>
            </div>
          </Link>
        </div>
      </section>

      <AdBanner slot="home-bottom" format="horizontal" />
    </div>
  );
}
