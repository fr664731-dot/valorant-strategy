import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import { maps } from '@/data/maps';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '맵별 전략 가이드',
  description: '발로란트 모든 맵의 공격/수비 전략, 콜아웃, 추천 요원을 확인하세요. 어센트, 바인드, 헤이븐, 스플릿 등 11개 맵 완벽 공략.',
  keywords: ['발로란트 맵', '발로란트 전략', '어센트 공략', '바인드 공략', '헤이븐 공략'],
};

const difficultyColors: Record<string, string> = {
  '쉬움': 'bg-green-500/20 text-green-400',
  '보통': 'bg-yellow-500/20 text-yellow-400',
  '어려움': 'bg-red-500/20 text-red-400',
};

export default function MapsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">맵별 전략</h1>
      <p className="text-gray-400 mb-8">각 맵의 공격/수비 전략과 콜아웃을 확인하세요</p>

      <AdBanner slot="maps-top" format="horizontal" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {maps.map((map) => (
          <Link
            key={map.id}
            href={`/maps/${map.id}`}
            className="bg-[#1f2326] border border-gray-700 rounded-xl overflow-hidden card-hover group"
          >
            <div className="h-32 bg-gradient-to-br from-[#ff4655]/20 to-[#0f1923] flex items-center justify-center">
              <span className="text-6xl">{map.icon}</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold group-hover:text-[#ff4655] transition-colors">
                  {map.name}
                </h3>
                <span className={`text-xs px-2 py-1 rounded ${difficultyColors[map.difficulty]}`}>
                  {map.difficulty}
                </span>
              </div>
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">{map.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {map.sites.map((site) => (
                    <span key={site} className="text-xs bg-[#0f1923] px-2 py-1 rounded">{site} 사이트</span>
                  ))}
                </div>
                <span className="text-[#ff4655] text-sm">전략 보기 →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <AdBanner slot="maps-bottom" format="horizontal" />
      </div>
    </div>
  );
}
