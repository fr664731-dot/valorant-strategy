import AdBanner from '@/components/AdBanner';
import { teamComps } from '@/data/teamComps';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '팀 조합 추천',
  description: '발로란트 맵별 추천 팀 조합과 시너지 분석. 어센트, 바인드, 헤이븐 등 각 맵에 최적화된 S티어 팀 조합을 확인하세요.',
  keywords: ['발로란트 팀조합', '발로란트 조합', '발로란트 픽', '맵별 조합'],
};

const tierColors: Record<string, string> = {
  'S': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  'A': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
  'B': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
};

export default function TeamCompsPage() {
  const maps = [...new Set(teamComps.map(c => c.map))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">팀 조합</h1>
      <p className="text-gray-400 mb-8">맵별 추천 팀 조합과 시너지를 확인하세요</p>

      <AdBanner slot="team-comps-top" format="horizontal" />

      {maps.map((map) => (
        <div key={map} className="mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-[#ff4655]">{map}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamComps.filter(c => c.map === map).map((comp) => (
              <div key={comp.id} className="bg-[#1f2326] border border-gray-700 rounded-xl p-6 card-hover">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{comp.name}</h3>
                  <span className={`px-3 py-1 rounded border text-sm font-bold ${tierColors[comp.tier]}`}>
                    {comp.tier} 티어
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {comp.agents.map((agent) => (
                    <span key={agent} className="px-3 py-1 bg-[#0f1923] rounded-lg text-sm">
                      {agent}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{comp.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500">플레이 스타일:</span>
                  <span className="text-xs bg-[#ff4655]/20 text-[#ff4655] px-2 py-1 rounded">
                    {comp.playstyle}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-400 font-medium mb-1">강점</p>
                    <ul className="space-y-1">
                      {comp.strengths.map((s, i) => (
                        <li key={i} className="text-gray-400 text-xs">• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-medium mb-1">약점</p>
                    <ul className="space-y-1">
                      {comp.weaknesses.map((w, i) => (
                        <li key={i} className="text-gray-400 text-xs">• {w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8">
        <AdBanner slot="team-comps-bottom" format="horizontal" />
      </div>
    </div>
  );
}
