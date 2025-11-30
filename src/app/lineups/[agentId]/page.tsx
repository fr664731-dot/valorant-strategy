import AdBanner from '@/components/AdBanner';
import Link from 'next/link';
import { getLineupsByAgent, lineups } from '@/data/lineups';
import { getAgentById, agents } from '@/data/agents';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const lineupAgentIds = ['sova', 'viper', 'killjoy', 'cypher', 'brimstone', 'kayo', 'fade', 'gekko'];

export function generateStaticParams() {
  return lineupAgentIds.map((agentId) => ({ agentId }));
}

export async function generateMetadata({ params }: { params: Promise<{ agentId: string }> }): Promise<Metadata> {
  const { agentId } = await params;
  const agent = getAgentById(agentId);
  
  if (!agent) {
    return { title: '요원을 찾을 수 없습니다' };
  }

  return {
    title: `${agent.name} 라인업 가이드`,
    description: `발로란트 ${agent.name} 라인업 모음. 맵별 리콘, 스모크, 몰로토프 라인업 위치와 사용법을 확인하세요.`,
    keywords: [`${agent.name} 라인업`, `발로란트 ${agent.name}`, `${agent.name} 스킬`],
  };
}

const difficultyColors: Record<string, string> = {
  '쉬움': 'bg-green-500/20 text-green-400',
  '보통': 'bg-yellow-500/20 text-yellow-400',
  '어려움': 'bg-red-500/20 text-red-400',
};

const sideColors: Record<string, string> = {
  '공격': 'bg-red-500/20 text-red-400',
  '수비': 'bg-blue-500/20 text-blue-400',
  '공용': 'bg-purple-500/20 text-purple-400',
};

export default async function AgentLineupsPage({ params }: { params: Promise<{ agentId: string }> }) {
  const { agentId } = await params;
  const agent = getAgentById(agentId);
  const agentLineups = getLineupsByAgent(agentId);

  if (!agent) {
    notFound();
  }

  const maps = [...new Set(agentLineups.map(l => l.map))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">{agent.icon}</span>
        <div>
          <h1 className="text-3xl font-bold">{agent.name} 라인업</h1>
          <p className="text-gray-400">맵별 스킬 라인업 가이드 ({agentLineups.length}개)</p>
        </div>
      </div>

      <AdBanner slot="lineup-agent-top" format="horizontal" />


      {maps.length > 0 ? (
        maps.map((map) => (
          <div key={map} className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-[#ff4655]">{map}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {agentLineups.filter(l => l.map === map).map((lineup) => (
                <div key={lineup.id} className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-[#0f1923] rounded text-sm">{lineup.site} 사이트</span>
                      <span className="px-2 py-1 bg-[#0f1923] rounded text-sm">{lineup.skill}</span>
                      <span className={`px-2 py-1 rounded text-xs ${difficultyColors[lineup.difficulty]}`}>
                        {lineup.difficulty}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${sideColors[lineup.side]}`}>
                        {lineup.side}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{lineup.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{lineup.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-[#ff4655] font-medium mb-2">사용 방법:</p>
                    <ol className="space-y-1">
                      {lineup.steps.map((step, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-[#ff4655] font-bold">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <p className="text-sm text-blue-400 font-medium mb-2">팁:</p>
                    <ul className="space-y-1">
                      {lineup.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-4">
                    {lineup.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="mt-8 text-center py-12 bg-[#1f2326] rounded-xl">
          <p className="text-gray-400 mb-4">{agent.name} 라인업 정보를 준비 중입니다.</p>
          <Link href="/lineups" className="text-[#ff4655] hover:underline">
            ← 다른 요원 보기
          </Link>
        </div>
      )}

      <div className="mt-8">
        <AdBanner slot="lineup-agent-bottom" format="horizontal" />
      </div>
    </div>
  );
}
