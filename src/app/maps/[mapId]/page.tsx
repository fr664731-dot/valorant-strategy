import AdBanner from '@/components/AdBanner';
import Link from 'next/link';
import { getMapById, maps } from '@/data/maps';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return maps.map((map) => ({ mapId: map.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ mapId: string }> }): Promise<Metadata> {
  const { mapId } = await params;
  const map = getMapById(mapId);
  
  if (!map) {
    return { title: '맵을 찾을 수 없습니다' };
  }

  return {
    title: `${map.name} 전략 가이드 - 공격/수비 전략`,
    description: `발로란트 ${map.name} 완벽 공략. 공격 전략, 수비 전략, 콜아웃, 추천 요원 정보를 확인하세요.`,
    keywords: [`발로란트 ${map.name}`, `${map.name} 공략`, `${map.name} 전략`, `${map.name} 콜아웃`],
  };
}

const difficultyColors: Record<string, string> = {
  '쉬움': 'bg-green-500/20 text-green-400',
  '보통': 'bg-yellow-500/20 text-yellow-400',
  '어려움': 'bg-red-500/20 text-red-400',
};

export default async function MapDetailPage({ params }: { params: Promise<{ mapId: string }> }) {
  const { mapId } = await params;
  const map = getMapById(mapId);

  if (!map) {
    notFound();
  }

  const attackStrategies = map.strategies.filter(s => s.side === '공격');
  const defenseStrategies = map.strategies.filter(s => s.side === '수비');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Map Header */}
      <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="text-7xl">{map.icon}</div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{map.name}</h1>
              <span className={`px-3 py-1 rounded text-sm ${difficultyColors[map.difficulty]}`}>
                {map.difficulty}
              </span>
            </div>
            <p className="text-gray-400 mb-4">{map.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">사이트:</span>
              {map.sites.map((site) => (
                <span key={site} className="text-sm bg-[#ff4655]/20 text-[#ff4655] px-2 py-1 rounded">{site}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AdBanner slot="map-detail-top" format="horizontal" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Attack Strategies */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#ff4655] rounded-full"></span>
              공격 전략
            </h2>
            <div className="space-y-4">
              {attackStrategies.map((strategy, i) => (
                <div key={i} className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{strategy.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${difficultyColors[strategy.difficulty]}`}>
                      {strategy.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{strategy.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-500">추천 요원:</span>
                    {strategy.agents.map((agent) => (
                      <span key={agent} className="text-sm bg-[#0f1923] px-2 py-1 rounded">{agent}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Defense Strategies */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              수비 전략
            </h2>
            <div className="space-y-4">
              {defenseStrategies.map((strategy, i) => (
                <div key={i} className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{strategy.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${difficultyColors[strategy.difficulty]}`}>
                      {strategy.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{strategy.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-500">추천 요원:</span>
                    {strategy.agents.map((agent) => (
                      <span key={agent} className="text-sm bg-[#0f1923] px-2 py-1 rounded">{agent}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-xl font-semibold mb-4">맵 팁</h2>
            <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
              <ul className="space-y-3">
                {map.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#ff4655]">•</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Callouts */}
          <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">콜아웃</h3>
            <div className="space-y-3">
              {map.callouts.map((callout) => (
                <div key={callout.name} className="border-b border-gray-700 pb-2 last:border-0">
                  <p className="font-medium text-[#ff4655]">{callout.name}</p>
                  <p className="text-sm text-gray-400">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Agents */}
          <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">추천 요원</h3>
            <div className="flex flex-wrap gap-2">
              {map.recommendedAgents.map((agent) => (
                <Link
                  key={agent}
                  href={`/agents`}
                  className="px-3 py-2 bg-[#0f1923] hover:bg-[#ff4655]/20 rounded-lg text-sm transition-colors"
                >
                  {agent}
                </Link>
              ))}
            </div>
          </div>

          <AdBanner slot="map-detail-side" format="rectangle" />
        </div>
      </div>
    </div>
  );
}
