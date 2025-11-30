import AdBanner from '@/components/AdBanner';
import Link from 'next/link';

const lineupData: Record<string, {
  name: string;
  icon: string;
  lineups: { map: string; site: string; title: string; difficulty: string; description: string }[];
}> = {
  sova: {
    name: '소바',
    icon: '🏹',
    lineups: [
      { map: '어센트', site: 'A', title: 'A 사이트 기본 리콘', difficulty: '쉬움', description: 'A 메인에서 A 사이트 전체를 스캔하는 기본 리콘 볼트입니다.' },
      { map: '어센트', site: 'A', title: 'A 헤븐 리콘', difficulty: '중간', description: '스폰에서 A 헤븐을 정확히 스캔하는 라인업입니다.' },
      { map: '어센트', site: 'B', title: 'B 사이트 기본 리콘', difficulty: '쉬움', description: 'B 메인에서 B 사이트를 스캔합니다.' },
      { map: '어센트', site: 'B', title: 'B CT 쇼크 다트', difficulty: '어려움', description: '설치 후 CT에서 해제하는 적을 처치하는 쇼크 다트 콤보입니다.' },
      { map: '바인드', site: 'A', title: 'A 숏 리콘', difficulty: '쉬움', description: 'A 로비에서 A 숏을 스캔합니다.' },
      { map: '바인드', site: 'B', title: 'B 사이트 더블 쇼크', difficulty: '어려움', description: 'B 사이트 설치 지점에 더블 쇼크 다트를 맞추는 라인업입니다.' },
    ],
  },
  viper: {
    name: '바이퍼',
    icon: '🐍',
    lineups: [
      { map: '브리즈', site: 'A', title: 'A 사이트 원웨이', difficulty: '중간', description: 'A 사이트 진입 시 유용한 원웨이 스모크입니다.' },
      { map: '브리즈', site: 'B', title: 'B 사이트 벽', difficulty: '쉬움', description: 'B 사이트를 가로지르는 독벽 위치입니다.' },
      { map: '아이스박스', site: 'A', title: 'A 사이트 기본 벽', difficulty: '쉬움', description: '아이스박스 A 사이트 필수 독벽입니다.' },
      { map: '아이스박스', site: 'B', title: 'B 사이트 원웨이', difficulty: '중간', description: 'B 사이트 수비 시 유용한 원웨이입니다.' },
    ],
  },
};

const difficultyColors: Record<string, string> = {
  '쉬움': 'bg-green-500/20 text-green-400',
  '중간': 'bg-yellow-500/20 text-yellow-400',
  '어려움': 'bg-red-500/20 text-red-400',
};

export default async function AgentLineupsPage({ params }: { params: Promise<{ agentId: string }> }) {
  const { agentId } = await params;
  const agent = lineupData[agentId] || { name: agentId, icon: '👤', lineups: [] };
  const maps = [...new Set(agent.lineups.map(l => l.map))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">{agent.icon}</span>
        <div>
          <h1 className="text-3xl font-bold">{agent.name} 라인업</h1>
          <p className="text-gray-400">맵별 스킬 라인업 가이드</p>
        </div>
      </div>

      <AdBanner slot="lineup-agent-top" format="horizontal" />

      {maps.length > 0 ? (
        maps.map((map) => (
          <div key={map} className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ff4655]">{map}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agent.lineups.filter(l => l.map === map).map((lineup, i) => (
                <div key={i} className="bg-[#1f2326] border border-gray-700 rounded-xl p-6 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-[#0f1923] rounded text-sm">{lineup.site} 사이트</span>
                      <span className={`px-2 py-1 rounded text-xs ${difficultyColors[lineup.difficulty]}`}>
                        {lineup.difficulty}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{lineup.title}</h3>
                  <p className="text-gray-400 text-sm">{lineup.description}</p>
                  <div className="mt-4 h-32 bg-[#0f1923] rounded-lg flex items-center justify-center text-gray-600">
                    라인업 이미지/영상
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="mt-8 text-center py-12 bg-[#1f2326] rounded-xl">
          <p className="text-gray-400">라인업 정보를 준비 중입니다.</p>
          <Link href="/lineups" className="text-[#ff4655] hover:underline mt-2 inline-block">
            다른 요원 보기 →
          </Link>
        </div>
      )}

      <div className="mt-8">
        <AdBanner slot="lineup-agent-bottom" format="horizontal" />
      </div>
    </div>
  );
}
