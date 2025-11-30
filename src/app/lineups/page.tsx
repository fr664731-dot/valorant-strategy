import Link from 'next/link';
import AdBanner from '@/components/AdBanner';

const lineupAgents = [
  { id: 'sova', name: '소바', icon: '🏹', skills: ['리콘 볼트', '쇼크 다트'] },
  { id: 'viper', name: '바이퍼', icon: '🐍', skills: ['스네이크 바이트', '독구름'] },
  { id: 'brimstone', name: '브림스톤', icon: '☁️', skills: ['인센디어리', '스카이 스모크'] },
  { id: 'killjoy', name: '킬조이', icon: '🤖', skills: ['나노스웜', '터렛'] },
  { id: 'cypher', name: '사이퍼', icon: '📷', skills: ['트랩와이어', '사이버 케이지'] },
  { id: 'kayo', name: '케이오', icon: '🤖', skills: ['플래시/드라이브', '제로/포인트'] },
  { id: 'fade', name: '페이드', icon: '😱', skills: ['호운트', '시즈'] },
  { id: 'gekko', name: '게코', icon: '🦎', skills: ['디지', '윙맨'] },
];

const maps = ['어센트', '바인드', '헤이븐', '스플릿', '아이스박스', '브리즈', '프랙처', '펄', '로터스', '선셋'];

export default function LineupsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">라인업 가이드</h1>
      <p className="text-gray-400 mb-8">요원별 스킬 라인업과 원웨이 스모크 위치를 확인하세요</p>

      <AdBanner slot="lineups-top" format="horizontal" />

      {/* Agent Selection */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">요원 선택</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {lineupAgents.map((agent) => (
            <Link
              key={agent.id}
              href={`/lineups/${agent.id}`}
              className="bg-[#1f2326] border border-gray-700 rounded-xl p-4 text-center card-hover group"
            >
              <div className="text-3xl mb-2">{agent.icon}</div>
              <h3 className="font-semibold text-sm group-hover:text-[#ff4655] transition-colors">{agent.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Lineups */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">인기 라인업</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { agent: '소바', map: '어센트', title: 'A 사이트 리콘 볼트', views: '12.5K' },
            { agent: '바이퍼', map: '브리즈', title: 'A 사이트 원웨이 스모크', views: '8.3K' },
            { agent: '킬조이', map: '어센트', title: 'B 사이트 나노스웜 세팅', views: '7.1K' },
            { agent: '소바', map: '바인드', title: 'B 사이트 쇼크 다트 콤보', views: '6.8K' },
            { agent: '브림스톤', map: '헤이븐', title: 'C 사이트 몰로토프 라인업', views: '5.9K' },
            { agent: '사이퍼', map: '스플릿', title: 'A 사이트 원웨이 케이지', views: '5.2K' },
          ].map((lineup, i) => (
            <div key={i} className="bg-[#1f2326] border border-gray-700 rounded-xl overflow-hidden card-hover">
              <div className="h-32 bg-gradient-to-br from-[#ff4655]/20 to-[#0f1923] flex items-center justify-center">
                <span className="text-4xl">🎯</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-[#ff4655]/20 text-[#ff4655] px-2 py-1 rounded">{lineup.agent}</span>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{lineup.map}</span>
                </div>
                <h3 className="font-semibold">{lineup.title}</h3>
                <p className="text-gray-500 text-sm mt-1">조회수 {lineup.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Filter */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">맵별 라인업</h2>
        <div className="flex flex-wrap gap-2">
          {maps.map((map) => (
            <button
              key={map}
              className="px-4 py-2 bg-[#1f2326] border border-gray-700 rounded-lg hover:border-[#ff4655] hover:text-[#ff4655] transition-colors"
            >
              {map}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <AdBanner slot="lineups-bottom" format="horizontal" />
      </div>
    </div>
  );
}
