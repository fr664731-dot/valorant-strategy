import AdBanner from '@/components/AdBanner';
import { agentMeta, metaInsights } from '@/data/meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '메타 분석 & 티어 리스트',
  description: '발로란트 현재 시즌 요원 티어 리스트, 픽률, 승률 분석. S티어부터 C티어까지 모든 요원의 메타 분석을 확인하세요.',
  keywords: ['발로란트 메타', '발로란트 티어', '발로란트 픽률', '발로란트 승률', '요원 티어'],
};

const tierStyles: Record<string, { bg: string; border: string; text: string }> = {
  S: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/50', text: 'text-yellow-400' },
  A: { bg: 'bg-purple-500/10', border: 'border-purple-500/50', text: 'text-purple-400' },
  B: { bg: 'bg-blue-500/10', border: 'border-blue-500/50', text: 'text-blue-400' },
  C: { bg: 'bg-gray-500/10', border: 'border-gray-500/50', text: 'text-gray-400' },
};

const trendIcons: Record<string, { icon: string; color: string }> = {
  up: { icon: '↑', color: 'text-green-400' },
  down: { icon: '↓', color: 'text-red-400' },
  stable: { icon: '→', color: 'text-gray-400' },
};

export default function MetaPage() {
  const tiers = ['S', 'A', 'B', 'C'] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">메타 분석</h1>
      <p className="text-gray-400 mb-8">현재 시즌 요원 티어 리스트와 픽률/승률 분석</p>

      <AdBanner slot="meta-top" format="horizontal" />

      {/* Tier List */}
      <div className="mt-8 space-y-6">
        {tiers.map((tier) => {
          const tierAgents = agentMeta.filter(a => a.tier === tier);
          if (tierAgents.length === 0) return null;
          
          return (
            <div key={tier} className={`${tierStyles[tier].bg} border ${tierStyles[tier].border} rounded-xl p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-3xl font-bold ${tierStyles[tier].text}`}>{tier}</span>
                <span className="text-gray-400">티어</span>
                <span className="text-sm text-gray-500">({tierAgents.length}명)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {tierAgents.map((agent) => (
                  <div key={agent.name} className="bg-[#0f1923] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{agent.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{agent.role}</span>
                        <span className={trendIcons[agent.trend].color}>
                          {trendIcons[agent.trend].icon}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">
                        픽률: <span className="text-white">{agent.pickRate}</span>
                      </span>
                      <span className="text-gray-400">
                        승률: <span className={parseFloat(agent.winRate) >= 50 ? 'text-green-400' : 'text-red-400'}>
                          {agent.winRate}
                        </span>
                      </span>
                    </div>
                    {agent.note && (
                      <p className="text-xs text-gray-500 mt-2">{agent.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>


      {/* Meta Insights */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">메타 인사이트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-[#ff4655]">현재 메타 트렌드</h3>
            <ul className="space-y-2 text-gray-400">
              {metaInsights.trends.map((trend, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#ff4655]">•</span>
                  {trend}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">추천 요원</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">🚀 랭크 상승용 (캐리 가능)</p>
                <div className="flex flex-wrap gap-2">
                  {metaInsights.recommendations.rankUp.map((agent) => (
                    <span key={agent} className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded text-sm">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">🤝 팀 플레이용 (안정적)</p>
                <div className="flex flex-wrap gap-2">
                  {metaInsights.recommendations.teamPlay.map((agent) => (
                    <span key={agent} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-sm">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">💎 숨은 강캐 (특정 맵 필수)</p>
                <div className="flex flex-wrap gap-2">
                  {metaInsights.recommendations.hidden.map((agent) => (
                    <span key={agent} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-sm">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-[#1f2326] border border-gray-700 rounded-xl">
        <p className="text-sm text-gray-500">
          ※ 티어 리스트는 프로 경기 및 고랭크 통계를 기반으로 작성되었습니다. 
          개인의 플레이 스타일과 숙련도에 따라 다를 수 있습니다.
        </p>
      </div>

      <div className="mt-8">
        <AdBanner slot="meta-bottom" format="horizontal" />
      </div>
    </div>
  );
}
