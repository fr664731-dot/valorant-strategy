import AdBanner from '@/components/AdBanner';
import Link from 'next/link';
import { getAgentById, agents } from '@/data/agents';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return agents.map((agent) => ({ agentId: agent.id }));
}

const roleColors: Record<string, string> = {
  '타격대': 'bg-red-500/20 text-red-400',
  '감시자': 'bg-green-500/20 text-green-400',
  '전략가': 'bg-purple-500/20 text-purple-400',
  '척후대': 'bg-blue-500/20 text-blue-400',
};

const difficultyColors: Record<string, string> = {
  '쉬움': 'text-green-400',
  '보통': 'text-yellow-400',
  '어려움': 'text-red-400',
};

export default async function AgentDetailPage({ params }: { params: Promise<{ agentId: string }> }) {
  const { agentId } = await params;
  const agent = getAgentById(agentId);

  if (!agent) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Agent Header */}
      <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="text-7xl">{agent.icon}</div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{agent.name}</h1>
              <span className={`px-3 py-1 rounded text-sm ${roleColors[agent.role]}`}>
                {agent.role}
              </span>
              <span className={`text-sm ${difficultyColors[agent.difficulty]}`}>
                난이도: {agent.difficulty}
              </span>
            </div>
            <p className="text-gray-400 mb-4">{agent.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">추천 맵:</span>
              {agent.strongMaps.map((map) => (
                <span key={map} className="text-sm bg-[#0f1923] px-2 py-1 rounded">{map}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AdBanner slot="agent-detail-top" format="horizontal" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-4">스킬</h2>
            <div className="space-y-4">
              {agent.skills.map((skill) => (
                <div key={skill.name} className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 bg-[#ff4655] rounded flex items-center justify-center font-bold">
                      {skill.key}
                    </span>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{skill.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-[#ff4655] font-medium">팁:</p>
                    <ul className="space-y-1">
                      {skill.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-[#ff4655]">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Tips */}
          <div>
            <h2 className="text-xl font-semibold mb-4">플레이 팁</h2>
            <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
              <ul className="space-y-3">
                {agent.generalTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#ff4655] font-bold">{i + 1}.</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Synergies */}
          <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-400">시너지 요원</h3>
            <div className="flex flex-wrap gap-2">
              {agent.synergies.map((name) => (
                <span key={name} className="px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Counters */}
          <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-400">카운터 요원</h3>
            <div className="flex flex-wrap gap-2">
              {agent.counters.map((name) => (
                <span key={name} className="px-3 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>

          <AdBanner slot="agent-detail-side" format="rectangle" />

          {/* Related Links */}
          <div className="bg-[#1f2326] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">관련 링크</h3>
            <div className="space-y-2">
              <Link href={`/lineups/${agent.id}`} className="block text-[#ff4655] hover:underline">
                → {agent.name} 라인업 가이드
              </Link>
              <Link href="/team-comps" className="block text-[#ff4655] hover:underline">
                → 팀 조합 추천
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
